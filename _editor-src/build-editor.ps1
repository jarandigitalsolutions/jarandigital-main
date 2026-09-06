<#
    Builds editor.html — a single, self-contained page editor.

    Everything it needs is inlined: the editor's own CSS and JavaScript, a copy
    of site.css and the site's logo/icon for the preview, and a copy of each
    page's HTML. That is what lets editor.html work by double-clicking it, with
    no web server, no internet, on any device.

    Run it from anywhere:
        powershell -ExecutionPolicy Bypass -File "_editor-src\build-editor.ps1"

    Re-run it whenever you change the editor, site.css, or want the built-in
    page copies refreshed to match the published pages.
#>

$ErrorActionPreference = "Stop"

$src  = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $src

Write-Host "project root : $root"

# ---------------------------------------------------------------- pages ----
# file -> label shown in the editor's dropdown
$pageList = [ordered]@{
  "index.html"                  = "Home  -  /"
  "about.html"                  = "About Us  -  /about"
  "cv.html"                     = "Jaran CV  -  /cv"
  "cv-templates.html"           = "All CV Templates  -  /cv-templates"
  "e-invitation.html"           = "E-Invitation  -  /e-invitation"
  "e-invitation-templates.html" = "All E-Invitation Templates  -  /e-invitation-templates"
  "contact.html"                = "Contact Us  -  /contact"
  "404.html"                    = "Page not found  -  404"
}

$pages = @()
foreach ($file in $pageList.Keys) {
  $full = Join-Path $root $file
  if (-not (Test-Path -LiteralPath $full)) { Write-Warning "missing page: $file"; continue }
  $pages += [pscustomobject]@{
    file  = $file
    label = $pageList[$file]
    html  = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)
  }
  Write-Host ("  + {0}" -f $file)
}

# --------------------------------------------------------------- assets ----
# Downscaled copies of the site images, so the offline preview is not broken
# and the built file stays small. The exported page keeps the real paths.
Add-Type -AssemblyName System.Drawing

function Get-DataUri {
  param([string]$Path, [int]$Max, [string]$Format)

  $img = [System.Drawing.Image]::FromFile($Path)
  try {
    $scale  = [Math]::Min(1.0, $Max / [Math]::Max($img.Width, $img.Height))
    $w      = [Math]::Max(1, [int]($img.Width  * $scale))
    $h      = [Math]::Max(1, [int]($img.Height * $scale))
    $bmp    = New-Object System.Drawing.Bitmap $w, $h
    $g      = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()

    $ms = New-Object System.IO.MemoryStream
    if ($Format -eq "png") {
      $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
      $mime = "image/png"
    } else {
      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
      $prm   = New-Object System.Drawing.Imaging.EncoderParameters 1
      $prm.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82
      $bmp.Save($ms, $codec, $prm)
      $mime = "image/jpeg"
    }
    $bytes = $ms.ToArray()
    $ms.Dispose(); $bmp.Dispose()
    Write-Host ("  + {0}  ({1}x{2}, {3} KB)" -f (Split-Path $Path -Leaf), $w, $h, [Math]::Round($bytes.Length / 1KB, 1))
    return "data:$mime;base64," + [Convert]::ToBase64String($bytes)
  } finally { $img.Dispose() }
}

$assets = [ordered]@{}
$logo     = Join-Path $root "assets\img\logo.jpg"
$telegram = Join-Path $root "assets\img\telegram.png"
if (Test-Path -LiteralPath $logo)     { $assets["/assets/img/logo.jpg"]     = Get-DataUri -Path $logo     -Max 128 -Format "jpg" }
if (Test-Path -LiteralPath $telegram) { $assets["/assets/img/telegram.png"] = Get-DataUri -Path $telegram -Max 64  -Format "png" }

# ----------------------------------------------------------------- read ----
$siteCss   = [System.IO.File]::ReadAllText((Join-Path $root "assets\css\site.css"), [System.Text.Encoding]::UTF8)
$editorCss = [System.IO.File]::ReadAllText((Join-Path $src  "editor.css"),          [System.Text.Encoding]::UTF8)
$editorJs  = [System.IO.File]::ReadAllText((Join-Path $src  "editor.js"),           [System.Text.Encoding]::UTF8)
$shell     = [System.IO.File]::ReadAllText((Join-Path $src  "shell.html"),          [System.Text.Encoding]::UTF8)

$bundle = [pscustomobject]@{
  builtAt = (Get-Date).ToString("d MMM yyyy, HH:mm")
  siteCss = $siteCss
  assets  = $assets
  pages   = $pages
}

# ConvertTo-Json escapes < and > as < / >, so embedded "</script>"
# inside the JSON cannot terminate the surrounding <script> block.
$bundleJson = $bundle | ConvertTo-Json -Depth 6 -Compress

# --------------------------------------------------------------- assemble --
$favicon = if ($assets.Contains("/assets/img/logo.jpg")) { $assets["/assets/img/logo.jpg"] } else { "" }

$out = $shell
$out = $out.Replace("{{EDITOR_CSS}}", $editorCss)
$out = $out.Replace("{{BUNDLE}}",     $bundleJson)
$out = $out.Replace("{{EDITOR_JS}}",  $editorJs)
$out = $out.Replace("{{FAVICON}}",    $favicon)

$target = Join-Path $root "editor.html"
[System.IO.File]::WriteAllText($target, $out, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ""
Write-Host ("built {0}  ({1} KB, {2} pages)" -f $target, [Math]::Round((Get-Item -LiteralPath $target).Length / 1KB, 0), $pages.Count) -ForegroundColor Green
