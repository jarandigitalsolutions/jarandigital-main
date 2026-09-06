<#
    Converts the JARAN-*.png template screenshots in en/, kh/, zh/ to .webp,
    at a quality that stays visually identical to the PNG but is usually
    30-50% smaller. Uses Google's cwebp encoder.

    Run it from anywhere:
        powershell -ExecutionPolicy Bypass -File "assets\templates\convert-to-webp.ps1"

    Drop your exported JARAN-01-EN_Onyx-Executive.png (etc.) straight into
    en/, kh/, zh/ as usual, then run this. It converts every .png in those
    three folders in place (writes a .webp next to it) and leaves the
    original .png untouched -- update list.txt to point at the new .webp
    file name once you're happy with the result, then delete the .png.

    Pass -DeleteOriginal to remove each .png automatically after a
    successful conversion instead.
#>

param(
  [int]$Quality = 90,
  [switch]$DeleteOriginal
)

$ErrorActionPreference = "Stop"

# ------------------------------------------------------------- find cwebp --
$cwebp = (Get-Command cwebp -ErrorAction SilentlyContinue).Source
if (-not $cwebp) {
  $fallback = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter "cwebp.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($fallback) { $cwebp = $fallback.FullName }
}
if (-not $cwebp) {
  Write-Error "cwebp.exe not found. Install it with: winget install --id Google.Libwebp -e"
  exit 1
}
Write-Host "using cwebp: $cwebp"

# ------------------------------------------------------------- convert -----
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$langs = @("en", "kh", "zh")
$totalBefore = 0
$totalAfter = 0
$count = 0

foreach ($lang in $langs) {
  $dir = Join-Path $root $lang
  if (-not (Test-Path -LiteralPath $dir)) { continue }

  Get-ChildItem -LiteralPath $dir -Filter "*.png" | ForEach-Object {
    $png = $_.FullName
    $webp = [System.IO.Path]::ChangeExtension($png, "webp")

    & $cwebp -quiet -q $Quality "$png" -o "$webp"
    if ($LASTEXITCODE -ne 0) { Write-Warning "failed: $($_.Name)"; return }

    $before = $_.Length
    $after = (Get-Item -LiteralPath $webp).Length
    $totalBefore += $before
    $totalAfter += $after
    $count++
    Write-Host ("  {0}/{1}  {2} KB -> {3} KB" -f $lang, $_.Name, [Math]::Round($before / 1KB, 0), [Math]::Round($after / 1KB, 0))

    if ($DeleteOriginal) { Remove-Item -LiteralPath $png -Force }
  }
}

if ($count -eq 0) {
  Write-Host "No .png files found in en/, kh/, or zh/. Drop your exports in there first."
} else {
  $changePct = [Math]::Round((1 - ($totalAfter / $totalBefore)) * 100, 0)
  $changeLabel = if ($changePct -ge 0) { "$changePct% smaller" } else { "$([Math]::Abs($changePct))% BIGGER" }
  Write-Host ""
  Write-Host ("converted {0} files -- {1} KB -> {2} KB  ({3})" -f $count, [Math]::Round($totalBefore / 1KB, 0), [Math]::Round($totalAfter / 1KB, 0), $changeLabel) -ForegroundColor Green
  if ($changePct -lt 0) {
    Write-Host "Note: some source PNGs (flat color / mostly text, few photos) can compress better as PNG than lossy WebP. Check the per-file sizes above -- if a file grew, keep that one as .png." -ForegroundColor Yellow
  }
  if (-not $DeleteOriginal) {
    Write-Host "Originals kept. Point list.txt at the new .webp file names, then delete the .png files once you're happy." -ForegroundColor Yellow
  }
}
