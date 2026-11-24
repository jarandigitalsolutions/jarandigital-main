(function(){
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    km: {
      /* ---- v2.1: inner pages ---- */
      prod_by:"ដោយ Jaran Digital", cv_how_h2:"CV ថ្មីរបស់អ្នក ក្នុងបីជំហាន",
      also_eyebrow:"ផលិតផលផ្សេងទៀតពី Jaran", also_h2:"ស្គាល់គ្រួសារ Jaran បន្ថែម", also_p:"កំពុងរៀបមង្គលការ ឬបើកភោជនីយដ្ឋាន? យើងក៏អាចជួយបានដែរ។",
      cvt_cta_h:"រកឃើញគំរូដែលចូលចិត្តហើយឬនៅ?", cvt_cta_p:"ចុច \"ជ្រើសរើសគំរូនេះ\" ឬផ្ញើលេខកូដគំរូមកយើងតាម Telegram។",
      about_stat_cv:"គំរូ CV", fam_eyebrow:"គ្រួសារ Jaran", fam_h2:"ផលិតផលប្រាំមួយ ក្រុមការងារតែមួយ",
      fam_p:"ផលិតផលនីមួយៗមានគេហទំព័រផ្ទាល់ខ្លួន ហើយដំណើរការដូចគ្នា៖ ប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ ហើយយើងរៀបចំជូន។",
      chip_lang:"ខ្មែរ និងអង់គ្លេស",
      ct_form_h:"ផ្ញើសារមកយើង", ct_form_p:"សារនេះផ្ញើត្រង់ទៅក្រុមការងាររបស់យើង។ យើងនឹងឆ្លើយតបតាម Telegram ឬទូរសព្ទ។",
      ct_name:"ឈ្មោះរបស់អ្នក", ct_contact:"លេខទូរសព្ទ ឬ Telegram", ct_product:"ផលិតផលមួយណា?", ct_any:"មិនទាន់ប្រាកដ",
      ct_msg:"សាររបស់អ្នក", ct_send:"ផ្ញើសារ", ct_sending:"កំពុងផ្ញើ…",
      ct_ok:"សូមអរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើ។ យើងនឹងឆ្លើយតបឆាប់ៗ។",
      ct_err:"សូមទោស មិនអាចផ្ញើសារបានទេ។ សូមផ្ញើសារមកយើងតាម Telegram ជំនួសវិញ។",
      ct_need:"សូមបំពេញឈ្មោះ និងសាររបស់អ្នក។",
      ct_help_eyebrow:"សួរអំពីផលិតផល", ct_help_h2:"តើយើងអាចជួយអ្វីបាន?", ct_help_p:"ចុចលើផលិតផល ដើម្បីចាប់ផ្តើមជជែកតាម Telegram។",
      ask_msg:"សួស្តី! ខ្ញុំចង់ដឹងបន្ថែមអំពី ",      /* ---- v2: product family (home, /products, header menu) ---- */
      nav_products:"ផលិតផល", nav_all_products:"មើលផលិតផលទាំងអស់ →",
      pm_invite:"ធៀបការអេឡិចត្រូនិក", pm_gift:"កត់ចំណងដៃមង្គលការ ផ្ទាល់ៗ", pm_moment:"ភ្ញៀវចែករំលែករូបថត",
      pm_booth:"បោះពុម្ពរូបភ្លាមៗ ក្នុងកម្មវិធី", pm_menu:"កុម្ម៉ង់តាម QR សម្រាប់ភោជនីយដ្ឋាន", pm_cv:"រចនា CV ប្រកបដោយវិជ្ជាជីវៈ",
      hub_eyebrow:"ផលិតនៅកម្ពុជា · ផលិតផលឌីជីថល ៦",
      hub_h1a:"ផលិតផលឌីជីថល សម្រាប់", hub_h1b:"ពេលវេលាសំខាន់ៗក្នុងជីវិត",
      hub_lead:"ធៀបការ ការកត់ចំណងដៃផ្ទាល់ៗ ការចែករំលែករូបថតពីភ្ញៀវ និងប៊ូតថតរូប សម្រាប់ថ្ងៃពិសេសរបស់អ្នក ព្រមទាំងម៉ឺនុយ QR សម្រាប់ភោជនីយដ្ឋាន និង CV ដែលធ្វើឲ្យអ្នកលេចធ្លោ។ ក្រុមការងារតែមួយ ជជែកតាម Telegram តែមួយ។",
      hub_cta1:"ស្វែងយល់ពីផលិតផល",
      hub_stat1:"ផលិតផល", hub_stat2:"ជាភាសាខ្មែរ និងអង់គ្លេស", hub_stat3_v:"១ សារ", hub_stat3:"ដើម្បីចាប់ផ្តើម",
      hub_prod_eyebrow:"ផលិតផលរបស់យើង", hub_prod_h2:"ផលិតផលទាំងអស់របស់ Jaran",
      hub_prod_p:"ផលិតផលនីមួយៗមានគេហទំព័រផ្ទាល់ខ្លួន។ ចុចបើកដើម្បីមើលរបៀបដំណើរការ ឬផ្ញើសារមកយើង ហើយយើងនឹងជួយអ្នកជ្រើសរើស។",
      aud_all:"ទាំងអស់", aud_wed:"មង្គលការ និងកម្មវិធី", aud_biz:"ភោជនីយដ្ឋាន", aud_career:"អ្នករកការងារ",
      tag_wed:"មង្គលការ", tag_events:"មង្គលការ និងកម្មវិធី", tag_biz:"ភោជនីយដ្ឋាន", tag_career:"ការងារ",
      pc_invite_p:"ធៀបការខ្មែរដ៏ប្រណីត ដែលភ្ញៀវបើកមើលនៅលើទូរសព្ទ។",
      pc_invite_t1:"រចនាជាភាសាខ្មែរ និងអង់គ្លេស", pc_invite_t2:"ផែនទី កម្មវិធី រាប់ថយក្រោយ និង QR ចំណងដៃ", pc_invite_t3:"រួចរាល់ក្នុង ១–២ ថ្ងៃ",
      pc_gift_p:"កត់ត្រាចំណងដៃមង្គលការគ្រប់ចំនួន ដោយសុវត្ថិភាព និងផ្ទាល់ៗ នៅលើទូរសព្ទអ្នកជំនួយ។",
      pc_gift_t1:"សរុបសាច់ប្រាក់ ABA ដុល្លារ និងរៀល", pc_gift_t2:"ជូនដំណឹងតាម Telegram ពេលមានចំណងដៃ", pc_gift_t3:"សៀវភៅចំណងដៃទុកជាអនុស្សាវរីយ៍",
      pc_moment_p:"ភ្ញៀវគ្រប់គ្នាក្លាយជាអ្នកថតរូបរបស់អ្នក៖ QR តែមួយ មិនបាច់ដំឡើងកម្មវិធី។",
      pc_moment_t1:"រូបថតភ្ញៀវទាំងអស់ក្នុងអាល់ប៊ុមតែមួយ គុណភាពពេញ", pc_moment_t2:"បង្ហាញរូបផ្ទាល់ៗលើអេក្រង់ទូរទស្សន៍", pc_moment_t3:"ក៏សម្រាប់ខួបកំណើត និងកម្មវិធីក្រុមហ៊ុនផងដែរ",
      pc_booth_p:"ប៊ូតថតរូប បោះពុម្ពក្នុងរយៈពេលប៉ុន្មានវិនាទី និងមានរូបនៅលើទូរសព្ទគ្រប់គ្នា។",
      pc_booth_t1:"រូបបន្ទះ 2×6 និង 4×6 តាមការរចនារបស់អ្នក", pc_booth_t2:"QR ដើម្បីរក្សាទុករូបនៅលើទូរសព្ទ", pc_booth_t3:"បញ្ចាំងរូបលើទូរទស្សន៍ និងវិចិត្រសាលអនឡាញ",
      pc_menu_p:"អតិថិជនស្កេន QR នៅលើតុ ហើយកុម្ម៉ង់ ផ្ញើត្រង់ទៅផ្ទះបាយរបស់អ្នក។",
      pc_menu_t1:"ម៉ឺនុយ ៥ ភាសា", pc_menu_t2:"អេក្រង់ផ្ទះបាយ ម៉ាស៊ីនព្រីន និង Telegram", pc_menu_t3:"សាកល្បងឥតគិតថ្លៃ ២ សប្តាហ៍ យើងរៀបចំជូន",
      pc_cv_p:"CV រចនាដោយអ្នកជំនាញ ជួយឲ្យអ្នកលេចធ្លោពេលដាក់ពាក្យការងារ។",
      pc_cv_t1:"គំរូជាង ៣០០ ជាភាសាអង់គ្លេស ខ្មែរ និងចិន", pc_cv_t2:"អ្នករចនាធ្វើជាមួយអ្នក", pc_cv_t3:"ជាធម្មតារួចរាល់ក្នុងថ្ងៃតែមួយ",
      go_visit:"ចូលមើល", go_designs:"មើលគំរូ", go_templates:"មើលគំរូ", ask_tg:"សួរតាម Telegram", cv_how:"របៀបដំណើរការ",
      j_eyebrow:"សម្រាប់មង្គលការ", j_h2:"មង្គលការរបស់អ្នក ពីដើមដល់ចប់",
      j_p:"ផលិតផលបួនដែលធ្វើការជាមួយគ្នា ចាប់ពីថ្ងៃអញ្ជើញភ្ញៀវ រហូតដល់រូបថតដែលអ្នករក្សាទុកជារៀងរហូត។",
      j_before:"មុនថ្ងៃមង្គល", j_onday:"នៅថ្ងៃមង្គល", j_after:"នៅថ្ងៃមង្គល និងក្រោយមក",
      j_invite:"ផ្ញើធៀបការដ៏ស្រស់ស្អាត មានផែនទី កម្មវិធី និងរាប់ថយក្រោយ។",
      j_gift:"អ្នកជំនួយកត់ចំណងដៃ ហើយអ្នកឃើញចំនួនសរុបផ្ទាល់ៗ។",
      j_moment:"ភ្ញៀវស្កេន QR ហើយបំពេញអាល់ប៊ុម និងអេក្រង់ទូរទស្សន៍របស់អ្នក។",
      j_booth:"រូបបោះពុម្ពសម្រាប់ភ្ញៀវ និងរូបទាំងអស់រក្សាទុកក្នុងវិចិត្រសាលសម្រាប់អ្នក។",
      j_cta:"រៀបចំមង្គលការជាមួយ Jaran", j_cta2:"ប្រៀបធៀបផលិតផលទាំងអស់",
      duo_eyebrow:"មិនមែនរៀបមង្គលការ?", duo_h2:"សម្រាប់អាជីវកម្ម និងអាជីពរបស់អ្នក",
      duo_menu:"ម៉ឺនុយ QR ៥ ភាសា។ ការកុម្ម៉ង់ទៅដល់អេក្រង់ផ្ទះបាយ ម៉ាស៊ីនព្រីន និង Telegram ភ្លាមៗ។", duo_menu_go:"ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ →",
      duo_cv:"ជ្រើសពីគំរូជាង ៣០០ ហើយអ្នករចនារបស់យើងធ្វើ CV ជាមួយអ្នក ជាធម្មតារួចក្នុងថ្ងៃតែមួយ។", duo_cv_go:"មើលគំរូ CV →",
      why2_eyebrow:"ហេតុអ្វីជ្រើស Jaran", why2_h2:"ផលិតនៅទីនេះ សម្រាប់របៀបដែលកម្ពុជាប្រារព្ធពិធី និងធ្វើការ",
      why2_1h:"បង្កើតសម្រាប់កម្ពុជា", why2_1p:"ភាសាខ្មែរ និងអង់គ្លេសគ្រប់ទីកន្លែង ដុល្លារ និងរៀល ABA និង Telegram មានស្រាប់។",
      why2_2h:"យើងរៀបចំជូនអ្នក", why2_2p:"ផ្ញើព័ត៌មានមកយើង ហើយយើងរៀបចំអ្វីៗទាំងអស់ ដើម្បីឲ្យអ្នករីករាយនឹងថ្ងៃពិសេស។",
      hub_contact_p:"ប្រាប់យើងពីផលិតផលដែលអ្នកចាប់អារម្មណ៍។ យើងឆ្លើយតបលឿនបំផុតតាម Telegram។",
      pp_h1:"ផលិតផលប្រាំមួយ។ ក្រុមការងារតែមួយ។",
      pp_lead:"ផលិតផលទាំងអស់របស់ Jaran Digital នៅកន្លែងតែមួយ។ ចុចលើផលិតផលណាមួយ ឬផ្ញើសារមកយើងតាម Telegram ហើយយើងនឹងជួយអ្នកជ្រើសរើស។",
      pp_cta_h:"មិនប្រាកដថាត្រូវការមួយណា?", pp_cta_p:"ប្រាប់យើងពីកម្មវិធី ឬអាជីវកម្មរបស់អ្នក ហើយយើងនឹងណែនាំផលិតផលដែលសមស្រប។",
      ch_invite2:"រួចរាល់ក្នុង ១–២ ថ្ងៃ", ch_invite3:"ប្រើបានលើទូរសព្ទគ្រប់ប្រភេទ",
      pp_invite_tag:"ធៀបការ ដែលភ្ញៀវនឹងចងចាំ។",
      pp_invite_p:"ជ្រើសរើសការរចនា ផ្ញើព័ត៌មានមកយើង ហើយយើងបង្កើតធៀបការជាភាសាខ្មែរ និងអង់គ្លេសជូនអ្នក។ ភ្ញៀវបើកមើលលើទូរសព្ទ មានរូបថតរបស់អ្នក កម្មវិធី ផែនទី និង QR ចំណងដៃ។",
      f_inv1:"គម្របបើក", f_inv1p:"ត្រាក្រមួន ទ្វារ ឬស៊ុម ដែលបើកចូលទៅកាន់ធៀបការរបស់អ្នក។",
      f_inv2:"កម្មវិធី និងរាប់ថយក្រោយ", f_inv2p:"ពិធីនីមួយៗតាមម៉ោង និងការរាប់ថយក្រោយផ្ទាល់។",
      f_inv3:"ផែនទី និងការឆ្លើយតប", f_inv3p:"ចុចម្តងទៅដល់ទីតាំង និងងាយស្រួលសម្រាប់ភ្ញៀវឆ្លើយតប។",
      f_inv4:"កាត KHQR ចំណងដៃ", f_inv4p:"QR ធនាគាររបស់អ្នក រចនាយ៉ាងស្អាត សម្រាប់ភ្ញៀវដែលមិនអាចមកបាន។",
      ch_gift1:"សាច់ប្រាក់ · ABA", ch_gift3:"សៀវភៅចំណងដៃ",
      pp_gift_tag:"ចំណងដៃគ្រប់ចំនួន កត់ត្រាដោយសុវត្ថិភាព និងផ្ទាល់ៗ។",
      pp_gift_p:"អ្នកជំនួយកត់ចំណងដៃនៅលើទូរសព្ទរបស់ពួកគេ ខណៈអ្នកមើលឃើញចំនួនសរុបកើនឡើង ទាំងសាច់ប្រាក់ និង ABA ដុល្លារ និងរៀល។ ក្រោយមង្គលការ អ្នកទទួលបានសៀវភៅចំណងដៃដ៏ស្អាតទុកជាអនុស្សាវរីយ៍។",
      f_gift1:"ផ្ទាល់ៗលើទូរសព្ទគ្រប់គ្រឿង", f_gift1p:"អ្នកជំនួយច្រើននាក់កត់ក្នុងពេលតែមួយ ហើយគ្រប់គ្នាឃើញបញ្ជីដូចគ្នា។",
      f_gift2:"ជូនដំណឹងតាម Telegram", f_gift2p:"អ្នកទទួលសារពេលចំណងដៃត្រូវបានកត់ត្រា។",
      f_gift3:"គ្មានការលុបដោយច្រឡំ", f_gift3p:"ការលុបត្រូវការពាក្យសម្ងាត់។",
      f_gift4:"ដំណើរការបានទោះអ៊ីនធឺណិតខ្សោយ", f_gift4p:"បន្តកត់ត្រា ហើយធ្វើសមកាលកម្មពេលមានសេវាវិញ។",
      ch_mom1:"QR តែមួយ", ch_mom2:"មិនបាច់ដំឡើងកម្មវិធី", ch_mom3:"បង្ហាញលើទូរទស្សន៍",
      pp_mom_tag:"ភ្ញៀវមង្គលការគ្រប់គ្នា គឺជាអ្នកថតរូបរបស់អ្នក។",
      pp_mom_p:"ភ្ញៀវស្កេន QR តែមួយ ហើយបញ្ចូលរូបថតត្រង់ទៅអាល់ប៊ុមរបស់អ្នក ដោយមិនបាច់ដំឡើងកម្មវិធី ឬចុះឈ្មោះ។ បង្ហាញរូបផ្ទាល់ៗលើអេក្រង់ទូរទស្សន៍ រួចទាញយករូបដើមទាំងអស់ក្នុងគុណភាពពេញ។",
      f_mom1:"មិនបាច់ដំឡើងកម្មវិធី", f_mom1p:"ស្កេន ចុច បញ្ចូល។ ប៉ុណ្ណឹងឯង។",
      f_mom2:"បង្ហាញរូបផ្ទាល់លើទូរទស្សន៍", f_mom2p:"រូបថតភ្ញៀវលេចឡើងលើអេក្រង់ធំភ្លាមៗ។",
      f_mom3:"រូបដើមគុណភាពពេញ", f_mom3p:"ទាញយកទាំងអស់ មានស៊ុម ឬគ្មានស៊ុម។",
      f_mom4:"មិនត្រឹមតែមង្គលការ", f_mom4p:"ខួបកំណើត កម្មវិធីក្រុមហ៊ុន និងពិធីផ្សេងៗទៀត។",
      ch_booth1:"៤ ប្លង់", ch_booth2:"ដំណើរការដោយគ្មាន Wi-Fi", ch_booth3:"វិចិត្រសាលអនឡាញ",
      pp_booth_tag:"បោះពុម្ពក្នុងប៉ុន្មានវិនាទី។ រូបនៅលើទូរសព្ទគ្រប់គ្នា។",
      pp_booth_p:"យើងនាំប៊ូតថតរូបទៅកាន់មង្គលការ ឬកម្មវិធីរបស់អ្នក។ ភ្ញៀវថតរូប ទទួលបានរូបបោះពុម្ពតាមការរចនារបស់អ្នក ហើយស្កេន QR ដើម្បីរក្សាទុករូបនៅលើទូរសព្ទ។",
      f_booth1:"បោះពុម្ពភ្លាមៗ", f_booth1p:"រូបបន្ទះ 2×6 និងរូប 4×6 ក្នុងប៉ុន្មានវិនាទី។",
      f_booth2:"ការរចនារបស់អ្នក", f_booth2p:"ឈ្មោះ កាលបរិច្ឆេទ ឡូហ្គោ និងពណ៌ លើរូបគ្រប់សន្លឹក។",
      f_booth3:"QR ទៅទូរសព្ទ", f_booth3p:"ភ្ញៀវគ្រប់គ្នាអាចរក្សាទុករូបបានភ្លាមៗ។",
      f_booth4:"បញ្ចាំងលើទូរទស្សន៍ និងវិចិត្រសាល", f_booth4p:"បញ្ចាំងរូបផ្ទាល់នៅថ្ងៃកម្មវិធី និងវិចិត្រសាលអនឡាញបន្ទាប់មក។",
      ch_menu1:"សាកល្បងឥតគិតថ្លៃ ២ សប្តាហ៍", ch_menu2:"យើងរៀបចំជូន", ch_menu3:"ជូនដំណឹងតាម Telegram",
      pp_menu_tag:"ស្កេន។ កុម្ម៉ង់។ រីករាយ។",
      pp_menu_p:"អតិថិជនស្កេន QR នៅលើតុ ហើយកុម្ម៉ង់ពីទូរសព្ទរបស់ខ្លួន។ ការកុម្ម៉ង់ទៅដល់អេក្រង់ផ្ទះបាយ ម៉ាស៊ីនព្រីន និង Telegram ភ្លាមៗ ដូច្នេះគ្មានអ្វីបាត់បង់នៅពេលភ្ញៀវច្រើន។",
      f_menu1:"ម៉ឺនុយ ៥ ភាសា", f_menu1p:"ខ្មែរ អង់គ្លេស ចិន កូរ៉េ និងវៀតណាម។",
      f_menu2:"ផ្ទះបាយ បារ និងម៉ាស៊ីនព្រីន", f_menu2p:"ការកុម្ម៉ង់នីមួយៗទៅដល់កន្លែងត្រឹមត្រូវភ្លាមៗ។",
      f_menu3:"ផ្ទាំងតុ", f_menu3p:"មើលតុនីមួយៗ និងអ្វីដែលបានកុម្ម៉ង់។",
      f_menu4:"កែម៉ឺនុយក្នុងប៉ុន្មានវិនាទី", f_menu4p:"តម្លៃ រូបភាព និងម្ហូបអស់ ពេលណាក៏បាន។",
      ch_cv2:"រួចក្នុងថ្ងៃតែមួយ", ch_cv3:"PDF រួចរាល់សម្រាប់ផ្ញើ",
      pp_cv_tag:"CV ដែលធ្វើឲ្យអ្នកត្រូវបានកត់សម្គាល់។",
      pp_cv_p:"ជ្រើសរើសគំរូដែលអ្នកចូលចិត្ត ប្រាប់យើងពីខ្លួនអ្នក ហើយអ្នករចនារបស់យើងបង្កើត CV ជូនអ្នក ជាភាសាអង់គ្លេស ខ្មែរ ឬចិន។ ជាធម្មតារួចរាល់ក្នុងថ្ងៃតែមួយ។",
      f_cv1:"គំរូជាង ៣០០", f_cv1p:"រចនាបថទំនើប បុរាណ និងច្នៃប្រឌិត។",
      f_cv2:"បីភាសា", f_cv2p:"គ្រប់គំរូមានជាភាសាអង់គ្លេស ខ្មែរ និងចិន។",
      f_cv3:"ធ្វើដោយអ្នករចនា", f_cv3p:"យើងសរសេរ និងរៀបចំប្លង់ជាមួយអ្នក។",
      f_cv4:"លឿន", f_cv4p:"ជាធម្មតាក្នុងថ្ងៃតែមួយ យូរបំផុតពីរថ្ងៃ។",
      nav_home:"ទំព័រដើម", nav_about:"អំពីយើង", nav_cv:"ចរន្ត CV", nav_einvite:"សំបុត្រអញ្ជើញ",
      nav_contact:"ទំនាក់ទំនង", nav_telegram:"Telegram",
      hero_eyebrow:"ដំណោះស្រាយឌីជីថល សម្រាប់ជំនួញ និងបុគ្គល",
      hero_h1:"សេវាឌីជីថលដែលជួយឲ្យអ្នក លេចធ្លោ",
      hero_lead:"Jaran Digital Solutions រចនា CV ប្រកបដោយវិជ្ជាជីវៈ និងសំបុត្រអញ្ជើញឌីជីថល ជួយឲ្យអ្នកបង្ហាញខ្លួន និងព្រឹត្តិការណ៍របស់អ្នកយ៉ាងស្រស់ស្អាត។",
      hero_cta1:"មើលគំរូ CV", hero_cta2:"ជជែកតាម Telegram",
      hero_chip1:"ឆ្លើយតបលឿន", hero_chip2:"រចនាដោយអ្នកជំនាញ", hero_chip3:"តម្លៃសមរម្យ",
      hero_card2_title:"សំបុត្រអញ្ជើញ",
      about_eyebrow:"អំពីយើង",
      about_h2:"ក្រុមហ៊ុនឌីជីថលតូច ដែលយកចិត្តទុកដាក់ធំ",
      about_p1:"Jaran Digital Solutions គឺជាក្រុមហ៊ុនផ្តល់សេវាឌីជីថលមានមូលដ្ឋាននៅកម្ពុជា ជួយអតិថិជនបុគ្គល និងអាជីវកម្មបង្ហាញខ្លួនប្រកបដោយវិជ្ជាជីវៈ តាមរយៈ CV ដែលរចនាដោយអ្នកជំនាញ ធៀបការអេឡិចត្រូនិក ការកត់ចំណងដៃ ការចែករំលែករូបថតពីភ្ញៀវ ប៊ូតថតរូប និងម៉ឺនុយ QR សម្រាប់ភោជនីយដ្ឋាន។",
      about_p2:"យើងជឿជាក់ថា ការទំនាក់ទំនងដែលងាយស្រួល និងលឿន គឺជាគន្លឹះនៃសេវាកម្មល្អ។ នោះហើយជាមូលហេតុដែលអតិថិជនអាចជជែកជាមួយពួកយើងផ្ទាល់តាម Telegram ដើម្បីចាប់ផ្តើមភ្លាមៗ។",
      about_v1_h:"រចនាប្រកបដោយវិជ្ជាជីវៈ", about_v1_p:"គំរូគ្រប់មួយត្រូវបានរចនាដោយអ្នកជំនាញ ដើម្បីឲ្យអ្នកលេចធ្លោ។",
      about_v2_h:"ឆ្លើយតបលឿន", about_v2_p:"ផ្ញើសារតាម Telegram ហើយទទួលបានការឆ្លើយតបភ្លាមៗ។",
      about_v3_h:"តម្លៃសមរម្យ ច្បាស់លាស់", about_v3_p:"គ្មានតម្លៃលាក់កំបាំង — ព្រមព្រៀងគ្នាច្បាស់មុននឹងចាប់ផ្តើម។",
      services_eyebrow:"សេវាកម្មរបស់យើង", services_h2:"អ្វីដែលយើងផ្តល់ជូន",
      services_p:"សេវាឌីជីថលពីរប្រភេទ រចនាដើម្បីជួយអ្នកបង្ហាញខ្លួន និងព្រឹត្តិការណ៍របស់អ្នកបានយ៉ាងស្រស់ស្អាត។",
      svc_cv_h:"ចរន្ត CV", svc_cv_p:"CV ដែលរចនាដោយអ្នកជំនាញ សម្រាប់ជួយអ្នកលេចធ្លោនៅពេលដាក់ពាក្យសុំការងារ។",
      svc_cv_btn:"មើលគំរូ CV",
      svc_einv_h:"សំបុត្រអញ្ជើញឌីជីថល", svc_einv_p:"សំបុត្រអញ្ជើញឌីជីថលដ៏ស្រស់ស្អាត សម្រាប់រាល់ព្រឹត្តិការណ៍របស់អ្នក។",
      svc_einv_btn:"មើលគំរូ",
      cvpage_eyebrow:"ចរន្ត CV", cvpage_h1:"CV ប្រកបដោយវិជ្ជាជីវៈ រចនាសម្រាប់អ្នក",
      cvpage_lead:"ជ្រើសរើសរចនាបថដែលអ្នកចូលចិត្ត ផ្ញើសារប្រាប់យើងតាម Telegram ហើយអ្នករចនារបស់យើងនឹងបង្កើត CV ជូនអ្នកភ្លាមៗ។",
      cvpage_cta1:"មើលគំរូ CV", cvpage_cta2:"ជជែកតាម Telegram",
      why_eyebrow:"គុណសម្បត្តិ", why_h2:"ហេតុអ្វីជ្រើសរើសចរន្ត CV",
      cv_eyebrow:"គំរូ CV", cv_h2:"ជ្រើសរើសគំរូ CV របស់អ្នក",
      cv_p:"គំរូខាងក្រោមនេះ គ្រាន់តែជាចំណុចចាប់ផ្តើម — ប្រាប់យើងពីគំនិតរបស់អ្នក ហើយអ្នករចនានឹងកែសម្រួលឲ្យសមនឹងអ្នកផ្ទាល់។",
      cv_s1_h:"រកមើល និងជ្រើសរើស", cv_s1_p:"មើលគំរូខាងក្រោម ហើយជ្រើសរើសរចនាបថដែលសមនឹងអ្នក។",
      cv_s2_h:"ផ្ញើសារតាម Telegram", cv_s2_p:"ចុចប៊ូតុង ហើយប្រាប់យើងថាអ្នកចង់បានគំរូមួយណា។",
      cv_s3_h:"ទទួលបាន CV របស់អ្នក", cv_s3_p:"អ្នករចនារបស់យើងបង្កើត CV ជូនអ្នក រហ័ស និងប្រកបដោយវិជ្ជាជីវៈ។",
      tpl_choose:"ជ្រើសរើសគំរូនេះ",
      toc_label:"ក្នុងទំព័រនេះ",
      cv_toc_how:"របៀបធ្វើការ", cv_toc_templates:"គំរូ CV", cv_toc_faq:"សំណួរញឹកញាប់", cv_toc_start:"ចាប់ផ្តើម",
      cv_see_all:"មើលគំរូទាំងអស់",
      cv_all_h1:"គំរូ CV ទាំងអស់", cv_all_lead:"រកមើលគំរូទាំងអស់របស់យើង ហើយផ្ញើសារប្រាប់យើងតាម Telegram នៅពេលអ្នករកឃើញរចនាបថដែលអ្នកចូលចិត្ត។",
      cv_all_back:"← ត្រឡប់ទៅចរន្ត CV",
      tpl_search_placeholder:"ស្វែងរកតាមកូដ ឧ. TPL118",
      tpl_no_results:"រកមិនឃើញគំរូដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ។ សាកល្បងកូដមួយផ្សេងទៀត ឬទាក់ទងយើងតាម Telegram។",
      cv_form_eyebrow:"ចាប់ផ្តើម", cv_form_h:"ជ្រើសរើសមធ្យោបាយដែលងាយស្រួលសម្រាប់អ្នក",
      cv_form_1_h:"បំពេញទម្រង់ព័ត៌មាន", cv_form_1_p:"ចង់សរសេរព័ត៌មានទាំងអស់ដោយខ្លួនឯង? មានតែ ៣ ជំហានប៉ុណ្ណោះ៖",
      cv_form_1_s1:"ទាញយកទម្រង់។", cv_form_1_s2:"បំពេញវានៅលើទូរស័ព្ទ ឬកុំព្យូទ័រ តាមពេលវេលាដែលអ្នកទំនេរ។", cv_form_1_s3:"ផ្ញើទម្រង់ដែលបានបំពេញ និងរូបថតរបស់អ្នកមួយសន្លឹក មកយើងតាម Telegram។",
      cv_form_1_btn:"ទាញយកទម្រង់ (English)", cv_form_1_btn2:"ផ្ញើទម្រង់ដែលបានបំពេញ",
      cv_form_2_h:"ជជែកជាមួយអ្នករចនាដោយផ្ទាល់", cv_form_2_p:"ចង់និយាយជាជាងសរសេរ? ផ្ញើសារមកយើង ហើយអ្នករចនានឹងសួរសំណួរម្តងមួយៗ។",
      cv_form_2_btn:"ជជែកតាម Telegram",
      faq_eyebrow:"សំណួរញឹកញាប់", faq_h2:"សំណួរដែលសួរញឹកញាប់",
      faq_q1:"តើត្រូវការពេលប៉ុន្មានដើម្បីទទួលបាន CV?",
      faq_a1:"ជាធម្មតាក្នុងថ្ងៃតែមួយ ឬយូរបំផុត ២ ថ្ងៃ។ អ្នកផ្ញើព័ត៌មាន និងឆ្លើយតបអ្នករចនាតាម Telegram កាន់តែលឿន CV របស់អ្នកនឹងរួចរាល់កាន់តែលឿន។",
      faq_q2:"បើខ្ញុំមិនចូលចិត្តគំរូណាមួយសោះ តើត្រូវធ្វើដូចម្តេច?",
      faq_a2:"ប្រាប់យើងអំពីរចនាបថដែលអ្នកគិតទុកក្នុងចិត្ត អ្នករចនានឹងជួយណែនាំ ឬរចនាថ្មីមួយសមស្របនឹងអ្នក។",
      faq_q3:"តើអាចស្នើសុំកែប្រែបន្ទាប់ពីទទួលបាន CV ដែរឬទេ?",
      faq_a3:"បាទ/ចាស អាចធ្វើបាន — ពិភាក្សាការកែប្រែដែលអ្នកចង់បានដោយផ្ទាល់ជាមួយអ្នករចនាតាម Telegram។",
      faq_q4:"តើបង់ប្រាក់យ៉ាងដូចម្តេច?",
      faq_a4:"ព័ត៌មានលម្អិតអំពីការបង់ប្រាក់ នឹងត្រូវព្រមព្រៀងគ្នាដោយផ្ទាល់ជាមួយអ្នករចនារបស់អ្នកតាម Telegram។",
      t1_name:"Modern Navy", t1_desc:"ស្អាត ទំនើប សម្រាប់មុខតំណែងជំនាញ",
      t2_name:"Minimal Mono", t2_desc:"សាមញ្ញ ស-ខ្មៅ ផ្តោតលើខ្លឹមសារ",
      t3_name:"Executive Classic", t3_desc:"ថ្លៃថ្នូរ សម្រាប់អ្នកគ្រប់គ្រង",
      t4_name:"Creative Accent", t4_desc:"ពណ៌លេចធ្លោ សម្រាប់អ្នកច្នៃប្រឌិត",
      t5_name:"Two-Column Pro", t5_desc:"រៀបចំជា ២ជួរឈរ អានងាយ",
      t6_name:"Bold Header", t6_desc:"ក្បាលដិត ទាក់ទាញភ្នែក",
      einv_f1:"រចនាតាមតម្រូវការ", einv_f1_p:"រចនាឲ្យសមស្របទៅនឹងម្ចាស់ព្រឹត្តិការណ៍ម្នាក់ៗ។",
      einv_f2:"ចែករំលែកបានងាយ", einv_f2_p:"ផ្ញើតាមទូរស័ព្ទបាន ភ្លាមៗ គ្មានបោះពុម្ព។",
      einv_f3:"សម្រាប់រាល់ព្រឹត្តិការណ៍", einv_f3_p:"មង្គលការ ថ្ងៃកំណើត និងព្រឹត្តិការណ៍ក្រុមហ៊ុន។",
      einvpage_eyebrow:"សំបុត្រអញ្ជើញ", einvpage_h1:"សំបុត្រអញ្ជើញឌីជីថល ស្រស់ស្អាត សម្រាប់រាល់ព្រឹត្តិការណ៍",
      einvpage_lead:"មើលគំរូរបស់យើង ជ្រើសរើសរចនាបថដែលអ្នកចូលចិត្ត ហើយផ្ញើសារប្រាប់យើងតាម Telegram។ យើងកែសម្រួលឈ្មោះ កាលបរិច្ឆេទ និងរូបភាពរបស់អ្នក រួចផ្ញើតំណភ្ជាប់ជូនអ្នកឆាប់ៗ។",
      einvpage_cta1:"មើលគំរូ", einvpage_cta2:"ជជែកតាម Telegram",
      why_einv_h2:"ហេតុអ្វីជ្រើសរើសសំបុត្រអញ្ជើញរបស់យើង",
      einv_how_eyebrow:"របៀបធ្វើការ", einv_how_h2:"របៀបធ្វើការ",
      einv_s1_h:"រកមើល និងជ្រើសរើស", einv_s1_p:"មើលគំរូខាងក្រោម ហើយជ្រើសរើសរចនាបថដែលសមនឹងព្រឹត្តិការណ៍របស់អ្នក។",
      einv_s2_h:"ផ្ញើសារតាម Telegram", einv_s2_p:"ប្រាប់យើងពីឈ្មោះ កាលបរិច្ឆេទ និងព័ត៌មានលម្អិត។",
      einv_s3_h:"ទទួលបានតំណភ្ជាប់", einv_s3_p:"យើងរៀបចំជូនអ្នក រួចផ្ញើតំណភ្ជាប់សម្រាប់ចែករំលែកទៅភ្ញៀវ។",
      einv_toc_why:"ហេតុអ្វីជ្រើសរើសយើង", einv_toc_how:"របៀបធ្វើការ", einv_toc_templates:"គំរូ", einv_toc_faq:"សំណួរញឹកញាប់", einv_toc_start:"ចាប់ផ្តើម",
      einv_tpl_eyebrow:"គំរូ", einv_tpl_h2:"មើលគំរូសំបុត្រអញ្ជើញ",
      einv_tpl_p:"គំរូខាងក្រោមនេះ គ្រាន់តែជាចំណុចចាប់ផ្តើម — ប្រាប់យើងពីព្រឹត្តិការណ៍របស់អ្នក ហើយអ្នករចនានឹងកែសម្រួលឲ្យសមនឹងអ្នកផ្ទាល់។",
      vid_soon:"វីដេអូគំរូនឹងមកដល់ឆាប់ៗនេះ",
      einv_faq_q1:"តើអាចប្ដូររូបភាព ឈ្មោះ និងកាលបរិច្ឆេទបានទេ?",
      einv_faq_a1:"បាទ/ចាស — សំបុត្រអញ្ជើញនីមួយៗត្រូវបានកែសម្រួលតាមព័ត៌មានលម្អិតរបស់អ្នក រួមទាំងឈ្មោះ កាលបរិច្ឆេទ ទីតាំង និងរូបភាព។",
      einv_faq_q2:"តើភ្ញៀវអាចឆ្លើយតប (RSVP) បានទេ?",
      einv_faq_a2:"បាទ/ចាស សំបុត្រអញ្ជើញរួមបញ្ចូលទម្រង់ឆ្លើយតបសម្រាប់ភ្ញៀវរបស់អ្នក។",
      einv_faq_q3:"តើអាចដាក់ចម្រៀង ឬវីដេអូបានទេ?",
      einv_faq_a3:"បាទ/ចាស — អាចដាក់ចម្រៀងផ្ទាល់ខ្លួន ព្រមទាំងវីដេអូខ្លីមួយ ដូចជាតំណ YouTube។",
      einv_faq_q4:"តើបង់ប្រាក់យ៉ាងដូចម្តេច?",
      einv_faq_a4:"ព័ត៌មានលម្អិតអំពីការបង់ប្រាក់ នឹងត្រូវព្រមព្រៀងគ្នាដោយផ្ទាល់ជាមួយអ្នករចនារបស់អ្នកតាម Telegram។",
      einv_cta_h:"រកមិនឃើញរចនាបថត្រូវចិត្ត?", einv_cta_p:"ប្រាប់យើងពីគំនិតរបស់អ្នក — យើងជួយណែនាំ ឬរចនាថ្មីមួយសម្រាប់ព្រឹត្តិការណ៍របស់អ្នក។",
      einv_cta_btn:"ជជែកជាមួយអ្នករចនា",
      einv_see_all:"មើលគំរូទាំងអស់",
      einv_all_h1:"គំរូសំបុត្រអញ្ជើញទាំងអស់", einv_all_lead:"រកមើលគំរូទាំងអស់តាមប្រភេទព្រឹត្តិការណ៍ ហើយផ្ញើសារប្រាប់យើងតាម Telegram។",
      einv_all_back:"← ត្រឡប់ទៅសំបុត្រអញ្ជើញ", cat_all:"ទាំងអស់",
      skip_link:"រំលងទៅមាតិកា",
      crumb_home:"ទំព័រដើម", learn_more:"ស្វែងយល់បន្ថែម",
      home_about_h2:"អំពី Jaran Digital Solutions",
      home_about_btn:"ស្វែងយល់អំពីយើង",
      home_contact_teaser_h:"ត្រៀមចាប់ផ្តើមហើយឬនៅ?",
      home_contact_teaser_p:"ប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ — យើងឆ្លើយតបលឿនបំផុតតាម Telegram។",
      home_contact_teaser_btn:"ទំនាក់ទំនងយើង",
      aboutpage_eyebrow:"អំពីយើង",
      aboutpage_h1:"ក្រុមហ៊ុនឌីជីថលតូច ដែលយកចិត្តទុកដាក់ធំ",
      aboutpage_lead:"យើងជួយបុគ្គល និងអាជីវកម្មនៅកម្ពុជាបង្ហាញខ្លួនប្រកបដោយវិជ្ជាជីវៈ តាមរយៈ CV ដែលរចនាដោយអ្នកជំនាញ ធៀបការអេឡិចត្រូនិក ការកត់ចំណងដៃ ការចែករំលែករូបថតពីភ្ញៀវ ប៊ូតថតរូប និងម៉ឺនុយ QR សម្រាប់ភោជនីយដ្ឋាន។",
      about_story_eyebrow:"រឿងរ៉ាវរបស់យើង", about_story_h2:"រចនាដែលមានគោលបំណងច្បាស់លាស់",
      about_p3:"រាល់គម្រោងចាប់ផ្តើមដោយការសន្ទនាដ៏សាមញ្ញមួយ។ អ្នកប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ យើងបង្ហាញជម្រើស ហើយរួមគ្នាកែសម្រួលរហូតដល់ត្រឹមត្រូវ។",
      about_stat1:"គំរូរចនា", about_stat2:"ផលិតផល",
      about_stat3:"ឆ្លើយតបតាម Telegram", about_stat4:"ភាសាបម្រើសេវា",
      about_stat1_v:"400+", about_stat2_v:"6", about_stat3_v:"< 24 ម៉ោង", about_stat4_v:"ខ្មែរ / EN",
      about_how_eyebrow:"របៀបធ្វើការ", about_how_h2:"របៀបដែលយើងធ្វើការជាមួយអ្នក",
      about_pr1_h:"ស្តាប់", about_pr1_p:"យើងសួរនាំពីគោលដៅ រចនាបថ និងកាលបរិច្ឆេទរបស់អ្នក មុននឹងចាប់ផ្តើម។",
      about_pr2_h:"ស្នើរចនា", about_pr2_p:"យើងណែនាំគំរូ ឬរចនាថ្មីមួយដែលសមនឹងអ្នក ព្រមទាំងតម្លៃច្បាស់លាស់។",
      about_pr3_h:"កែសម្រួល", about_pr3_p:"អ្នកមើល ហើយផ្តល់មតិ — យើងកែរហូតដល់អ្នកពេញចិត្ត។",
      about_pr4_h:"ប្រគល់ជូន", about_pr4_p:"យើងរៀបចំអ្វីៗទាំងអស់ ហើយប្រគល់ជូនអ្នក រួចរាល់សម្រាប់ប្រើប្រាស់។",
      about_values_eyebrow:"គុណតម្លៃរបស់យើង", about_values_h2:"អ្វីដែលយើងប្រកាន់ខ្ជាប់",
      about_cta_h:"ចង់ពិភាក្សាពីគម្រោងរបស់អ្នក?",
      about_cta_p:"ផ្ញើសារមកយើងតាម Telegram — គ្មានកាតព្វកិច្ច គ្រាន់តែជាការសន្ទនាដ៏មានប្រយោជន៍។",
      about_cta_btn:"ជជែកតាម Telegram",
      contactpage_eyebrow:"ទំនាក់ទំនង", contactpage_h1:"ចាប់ផ្តើមថ្ងៃនេះ",
      contactpage_lead:"ជ្រើសរើសមធ្យោបាយងាយស្រួលបំផុតសម្រាប់អ្នក — យើងឆ្លើយតបលឿនបំផុតតាម Telegram។",
      contact_ways_eyebrow:"មធ្យោបាយទំនាក់ទំនង", contact_ways_h2:"ទាក់ទងមកយើង",
      contact_hours_eyebrow:"ព័ត៌មានបន្ថែម", contact_hours_h2:"អ្វីដែលគួរដឹងមុនសរសេរមក",
      contact_i1_h:"ម៉ោងឆ្លើយតប", contact_i1_p:"យើងឆ្លើយតបជាធម្មតាក្នុងរយៈពេលមួយថ្ងៃធ្វើការ តាមម៉ោងនៅកម្ពុជា (ICT)។",
      contact_i2_h:"ភាសា", contact_i2_p:"យើងបម្រើសេវាជាភាសាខ្មែរ និងអង់គ្លេស — សរសេរតាមភាសាដែលអ្នកស្រួល។",
      contact_i3_h:"ទីតាំង", contact_i3_p:"យើងធ្វើការតាមអនឡាញទាំងស្រុង បម្រើអតិថិជនទូទាំងប្រទេសកម្ពុជា និងក្រៅប្រទេស។",
      contact_eyebrow:"ទំនាក់ទំនង", contact_h2:"ចាប់ផ្តើមថ្ងៃនេះ",
      contact_p:"ជ្រើសរើសមធ្យោបាយងាយស្រួលបំផុតសម្រាប់អ្នក — យើងឆ្លើយតបលឿនបំផុតតាម Telegram។",
      contact_tg_h:"Telegram", contact_tg_btn:"ជជែកឥឡូវនេះ",
      contact_phone_h:"ទូរស័ព្ទ", contact_phone_btn:"ហៅឥឡូវនេះ",
      contact_email_h:"អ៊ីមែល", contact_email_btn:"សរសេរអ៊ីមែល",
      contact_note_pre:"ចម្លើយលឿនបំផុតគឺតាមរយៈ ",
      nf_h1:"រកមិនឃើញទំព័រនេះទេ",
      nf_p:"តំណភ្ជាប់ដែលអ្នកចុច ប្រហែលជាផ្លាស់ប្តូរ ឬលែងមានទៀតហើយ។ សូមសាកល្បងតំណខាងក្រោម។",
      nf_home:"ត្រឡប់ទៅទំព័រដើម",
      foot_tagline:"សេវាឌីជីថលដែលជួយឲ្យអ្នក និងអាជីវកម្មរបស់អ្នកលេចធ្លោ។",
      foot_explore:"ស្វែងរក", foot_contact:"ទំនាក់ទំនង", foot_legal:"រក្សាសិទ្ធិគ្រប់យ៉ាង"
    },
    en: {
      /* ---- v2.1: inner pages ---- */
      prod_by:"by Jaran Digital", cv_how_h2:"Your new CV in three steps",
      also_eyebrow:"Also from Jaran", also_h2:"More from the Jaran family", also_p:"Planning a wedding or running a restaurant? We can help there too.",
      cvt_cta_h:"Found one you like?", cvt_cta_p:"Tap \"Choose this template\" on it, or send us its code on Telegram.",
      about_stat_cv:"CV templates", fam_eyebrow:"The Jaran family", fam_h2:"Six products, one team",
      fam_p:"Each product has its own website, and they all work the same way: tell us what you need and we set it up.",
      chip_lang:"Khmer & English",
      ct_form_h:"Send us a message", ct_form_p:"It goes straight to our team. We'll reply on Telegram or by phone.",
      ct_name:"Your name", ct_contact:"Phone or Telegram", ct_product:"Which product?", ct_any:"Not sure yet",
      ct_msg:"Your message", ct_send:"Send message", ct_sending:"Sending…",
      ct_ok:"Thank you! Your message has been sent. We'll get back to you soon.",
      ct_err:"Sorry, the message couldn't be sent. Please message us on Telegram instead.",
      ct_need:"Please fill in your name and message.",
      ct_help_eyebrow:"Ask about a product", ct_help_h2:"What can we help you with?", ct_help_p:"Tap a product to start a Telegram chat about it.",
      ask_msg:"Hi! I'd like to know more about ",      /* ---- v2: product family (home, /products, header menu) ---- */
      nav_products:"Products", nav_all_products:"See all products →",
      pm_invite:"Wedding e-invitations", pm_gift:"Live wedding gift book", pm_moment:"Guests share their photos",
      pm_booth:"Instant prints at your event", pm_menu:"QR ordering for restaurants", pm_cv:"Professional CV design",
      hub_eyebrow:"Made in Cambodia · 6 digital products",
      hub_h1a:"Digital products for", hub_h1b:"life's big moments",
      hub_lead:"Wedding invitations, a live gift book, guest photo sharing and a photobooth for your big day, plus QR menus for restaurants and CVs that get you noticed. One team, one Telegram chat.",
      hub_cta1:"Explore our products",
      hub_stat1:"products", hub_stat2:"in Khmer and English", hub_stat3_v:"1 chat", hub_stat3:"to get started",
      hub_prod_eyebrow:"Our products", hub_prod_h2:"Everything Jaran makes",
      hub_prod_p:"Each product has its own website. Open one to see how it works, or message us and we'll help you choose.",
      aud_all:"All", aud_wed:"Weddings & events", aud_biz:"Restaurants", aud_career:"Job seekers",
      tag_wed:"Weddings", tag_events:"Weddings & events", tag_biz:"Restaurants", tag_career:"Careers",
      pc_invite_p:"Elegant Khmer wedding invitations your guests open on their phones.",
      pc_invite_t1:"Khmer and English designs", pc_invite_t2:"Map, programme, countdown and gift QR", pc_invite_t3:"Ready in 1–2 days",
      pc_gift_p:"Record every wedding gift safely and live, on your helpers' phones.",
      pc_gift_t1:"Cash, ABA, dollar and riel totals", pc_gift_t2:"Telegram alerts as gifts come in", pc_gift_t3:"A gift book to keep after the day",
      pc_moment_p:"Every guest becomes your photographer: one QR code, no app.",
      pc_moment_t1:"All guests' photos in one album, full quality", pc_moment_t2:"Live photo wall on the TV", pc_moment_t3:"For birthdays and company events too",
      pc_booth_p:"A photobooth with prints in seconds and photos on every phone.",
      pc_booth_t1:"2×6 strips and 4×6 prints in your design", pc_booth_t2:"A QR code to save each photo on the phone", pc_booth_t3:"Live TV slideshow and online gallery",
      pc_menu_p:"Customers scan the QR on their table and order, straight to your kitchen.",
      pc_menu_t1:"Menu in 5 languages", pc_menu_t2:"Kitchen screen, printer and Telegram", pc_menu_t3:"2-week free trial, we set it up for you",
      pc_cv_p:"Professionally designed CVs that help you stand out when you apply.",
      pc_cv_t1:"300+ templates in English, Khmer and Chinese", pc_cv_t2:"A designer builds it with you", pc_cv_t3:"Usually ready the same day",
      go_visit:"Visit site", go_designs:"See designs", go_templates:"See templates", ask_tg:"Ask on Telegram", cv_how:"How it works",
      j_eyebrow:"For weddings", j_h2:"Your wedding, start to finish",
      j_p:"Four products that work together, from the day guests are invited to the photos you keep forever.",
      j_before:"Before the day", j_onday:"On the day", j_after:"On the day and after",
      j_invite:"Send a beautiful invitation with the map, programme and countdown.",
      j_gift:"Helpers record every gift and you see the totals live.",
      j_moment:"Guests scan a QR code and fill your album and TV wall.",
      j_booth:"Prints for your guests, and every photo kept in a gallery for you.",
      j_cta:"Plan my wedding with Jaran", j_cta2:"Compare all products",
      duo_eyebrow:"Not planning a wedding?", duo_h2:"For your business and your career",
      duo_menu:"A QR menu in 5 languages. Orders go straight to your kitchen screen, printer and Telegram.", duo_menu_go:"Start a free trial →",
      duo_cv:"Pick from 300+ designs and our designer builds your CV with you, usually the same day.", duo_cv_go:"Browse CV templates →",
      why2_eyebrow:"Why Jaran", why2_h2:"Made here, for the way Cambodia celebrates and works",
      why2_1h:"Made for Cambodia", why2_1p:"Khmer and English everywhere, dollars and riel, ABA and Telegram built in.",
      why2_2h:"We set it up for you", why2_2p:"Send us your details and we do the setup, so you can enjoy the day.",
      hub_contact_p:"Tell us which product you're interested in. We reply fastest on Telegram.",
      pp_h1:"Six products. One friendly team.",
      pp_lead:"Everything Jaran Digital makes, in one place. Jump to a product, or message us on Telegram and we'll help you choose.",
      pp_cta_h:"Not sure which one you need?", pp_cta_p:"Tell us about your event or business and we'll suggest the right products.",
      ch_invite2:"Ready in 1–2 days", ch_invite3:"Works on any phone",
      pp_invite_tag:"Wedding invitations your guests will remember.",
      pp_invite_p:"Choose a design, send us your details and we build your invitation in Khmer and English. Guests open it on their phone, with your photos, the programme, the map and a gift QR.",
      f_inv1:"Opening cover", f_inv1p:"A wax seal, doors or frame that opens onto your invitation.",
      f_inv2:"Programme and countdown", f_inv2p:"Every part of the day with its time, plus a live countdown.",
      f_inv3:"Map and RSVP", f_inv3p:"One tap to the venue, and an easy way for guests to reply.",
      f_inv4:"KHQR gift card", f_inv4p:"Your bank QR, beautifully designed, for guests who can't come.",
      ch_gift1:"Cash · ABA", ch_gift3:"Gift book to keep",
      pp_gift_tag:"Every wedding gift, recorded safely and live.",
      pp_gift_p:"Your helpers record gifts on their own phones while you watch the totals add up, in cash and ABA, dollars and riel. After the wedding you get a tidy gift book to keep.",
      f_gift1:"Live on every phone", f_gift1p:"Several helpers record at once and everyone sees the same list.",
      f_gift2:"Telegram alerts", f_gift2p:"A message reaches you as gifts are recorded.",
      f_gift3:"Nothing erased by mistake", f_gift3p:"Deleting a record needs a password.",
      f_gift4:"Works with weak internet", f_gift4p:"Keeps recording and catches up when the signal is back.",
      ch_mom1:"One QR code", ch_mom2:"No app", ch_mom3:"TV photo wall",
      pp_mom_tag:"Every wedding guest is your photographer.",
      pp_mom_p:"Guests scan one QR code and add their photos straight to your album, with no app and no sign-up. Show them live on a TV photo wall, then download every original in full quality.",
      f_mom1:"No app needed", f_mom1p:"Scan, tap, upload. That's it.",
      f_mom2:"Live TV photo wall", f_mom2p:"Guests' photos appear on the big screen as they arrive.",
      f_mom3:"Full-quality originals", f_mom3p:"Download everything, with or without a frame.",
      f_mom4:"Not only weddings", f_mom4p:"Birthdays, company events and other celebrations too.",
      ch_booth1:"4 layouts", ch_booth2:"Works without Wi-Fi", ch_booth3:"Online gallery",
      pp_booth_tag:"Prints in seconds. Photos on every phone.",
      pp_booth_p:"We bring the photobooth to your wedding or event. Guests pose, get a print in your own design, and scan a QR code to keep the photo on their phone.",
      f_booth1:"Instant prints", f_booth1p:"2×6 strips and 4×6 photos in seconds.",
      f_booth2:"Your design", f_booth2p:"Names, date, logo and colours on every print.",
      f_booth3:"QR code to the phone", f_booth3p:"Every guest can save their photo straight away.",
      f_booth4:"TV slideshow and gallery", f_booth4p:"A live slideshow on the day and an online gallery afterwards.",
      ch_menu1:"2-week free trial", ch_menu2:"We set it up", ch_menu3:"Telegram alerts",
      pp_menu_tag:"Scan. Order. Enjoy.",
      pp_menu_p:"Customers scan the QR code on their table and order from their own phone. Orders go straight to your kitchen screen, printer and Telegram, so nothing gets lost on busy nights.",
      f_menu1:"Menu in 5 languages", f_menu1p:"Khmer, English, Chinese, Korean and Vietnamese.",
      f_menu2:"Kitchen, bar and printer", f_menu2p:"Each order goes to the right place instantly.",
      f_menu3:"Tables board", f_menu3p:"See every table and what it has ordered.",
      f_menu4:"Change the menu in seconds", f_menu4p:"Prices, photos and sold-out dishes, any time.",
      ch_cv2:"Same-day delivery", ch_cv3:"PDF ready to send",
      pp_cv_tag:"A CV that gets you noticed.",
      pp_cv_p:"Pick a template you like, tell us about yourself, and our designer builds your CV for you in English, Khmer or Chinese. It's usually ready the same day.",
      f_cv1:"300+ templates", f_cv1p:"Modern, classic and creative designs.",
      f_cv2:"Three languages", f_cv2p:"English, Khmer and Chinese versions of every design.",
      f_cv3:"Made by a designer", f_cv3p:"We write and lay it out together with you.",
      f_cv4:"Fast", f_cv4p:"Usually the same day, two days at most.",
      nav_home:"Home", nav_about:"About Us", nav_cv:"Jaran CV", nav_einvite:"E-Invitation",
      nav_contact:"Contact Us", nav_telegram:"Telegram",
      hero_eyebrow:"Digital solutions for businesses and individuals",
      hero_h1:"Digital services that help you stand out",
      hero_lead:"Jaran Digital Solutions designs professional CVs and beautiful digital e-invitations — helping you and your events make a great impression.",
      hero_cta1:"Browse CV Templates", hero_cta2:"Chat on Telegram",
      hero_chip1:"Fast response", hero_chip2:"Designed by experts", hero_chip3:"Fair pricing",
      hero_card2_title:"E-Invitation",
      about_eyebrow:"About Us",
      about_h2:"A small digital studio with big attention to detail",
      about_p1:"Jaran Digital Solutions is a Cambodia-based digital services studio helping individuals and businesses present themselves professionally — through expertly designed CVs, wedding e-invitations, a live gift book, guest photo sharing, a photobooth and QR menus for restaurants.",
      about_p2:"We believe great service starts with easy, fast communication. That's why you can chat with us directly on Telegram and get started right away.",
      about_v1_h:"Professional design", about_v1_p:"Every template is crafted by a designer to help you stand out.",
      about_v2_h:"Fast response", about_v2_p:"Message us on Telegram and get a reply right away.",
      about_v3_h:"Fair, transparent pricing", about_v3_p:"No hidden fees — we agree on everything before we start.",
      services_eyebrow:"Our Services", services_h2:"What we offer",
      services_p:"Two digital services designed to help you and your events make a great impression.",
      svc_cv_h:"Jaran CV", svc_cv_p:"Professionally designed CVs to help you stand out when applying for jobs.",
      svc_cv_btn:"Browse CV Templates",
      svc_einv_h:"Digital E-Invitations", svc_einv_p:"Beautiful digital invitations for every occasion.",
      svc_einv_btn:"See Templates",
      cvpage_eyebrow:"Jaran CV", cvpage_h1:"Professional CVs, designed for you",
      cvpage_lead:"Pick the style you like, message us on Telegram, and our designer will build your CV for you — fast.",
      cvpage_cta1:"See Templates", cvpage_cta2:"Chat on Telegram",
      why_eyebrow:"Advantages", why_h2:"Why choose Jaran CV",
      cv_eyebrow:"Templates", cv_h2:"Choose your CV template",
      cv_p:"The styles below are just a starting point — tell us your idea and our designer will tailor it to you.",
      cv_s1_h:"Browse & pick", cv_s1_p:"Look through the templates below and choose the style that fits you.",
      cv_s2_h:"Message us on Telegram", cv_s2_p:"Tap the button and tell us which template you'd like.",
      cv_s3_h:"Get your CV", cv_s3_p:"Our designer builds your CV and sends it back — fast and professional.",
      tpl_choose:"Choose this template",
      toc_label:"On this page",
      cv_toc_how:"How it Works", cv_toc_templates:"Templates", cv_toc_faq:"FAQ", cv_toc_start:"Get Started",
      cv_see_all:"See All Templates",
      cv_all_h1:"All CV Templates", cv_all_lead:"Browse all of our styles and message us on Telegram once you find one you like.",
      cv_all_back:"← Back to Jaran CV",
      tpl_search_placeholder:"Search by code, e.g. TPL118",
      tpl_no_results:"No templates match your search. Try a different code, or contact us on Telegram.",
      cv_form_eyebrow:"Get Started", cv_form_h:"Pick whichever way works best for you",
      cv_form_1_h:"Fill in the intake form", cv_form_1_p:"Prefer to write everything down yourself? It takes 3 steps:",
      cv_form_1_s1:"Download the form.", cv_form_1_s2:"Fill it in on your phone or computer, at your own pace.", cv_form_1_s3:"Send the completed form and one photo of yourself to us on Telegram.",
      cv_form_1_btn:"Download Form (English)", cv_form_1_btn2:"Send Completed Form",
      cv_form_2_h:"Talk to a designer directly", cv_form_2_p:"Prefer to talk instead of write? Message us and your designer will ask you the questions one at a time.",
      cv_form_2_btn:"Chat on Telegram",
      faq_eyebrow:"FAQ", faq_h2:"Frequently asked questions",
      faq_q1:"How long does it take to get my CV?",
      faq_a1:"Usually the same day — 2 days at most. The sooner you send your details and reply to your designer on Telegram, the sooner your CV is ready.",
      faq_q2:"What if I don't like any of the templates?",
      faq_a2:"Tell us the look you have in mind — your designer can point you to a closer fit or design something new around it.",
      faq_q3:"Can I request changes after I receive my CV?",
      faq_a3:"Yes — just discuss the changes you'd like directly with your designer on Telegram.",
      faq_q4:"How do I pay?",
      faq_a4:"Payment details are arranged directly with your designer over Telegram.",
      t1_name:"Modern Navy", t1_desc:"Clean and modern, for career professionals",
      t2_name:"Minimal Mono", t2_desc:"Simple black & white, content-first",
      t3_name:"Executive Classic", t3_desc:"Polished, for managers and leaders",
      t4_name:"Creative Accent", t4_desc:"Bold color, for creative roles",
      t5_name:"Two-Column Pro", t5_desc:"Two-column layout, easy to scan",
      t6_name:"Bold Header", t6_desc:"Strong header that grabs attention",
      einv_f1:"Custom design", einv_f1_p:"Tailored to fit each event and host.",
      einv_f2:"Easy to share", einv_f2_p:"Send instantly from your phone — no printing needed.",
      einv_f3:"For any occasion", einv_f3_p:"Weddings, birthdays, and corporate events.",
      einvpage_eyebrow:"E-Invitation", einvpage_h1:"Beautiful digital invitations, for any occasion",
      einvpage_lead:"Browse our designs, pick the one you like, and message us on Telegram. We'll personalize the names, date, and photos, then send you a link to share.",
      einvpage_cta1:"See Templates", einvpage_cta2:"Chat on Telegram",
      why_einv_h2:"Why choose our e-invitations",
      einv_how_eyebrow:"How it Works", einv_how_h2:"How it Works",
      einv_s1_h:"Browse & pick", einv_s1_p:"Look through the templates below and choose the style that fits your event.",
      einv_s2_h:"Message us on Telegram", einv_s2_p:"Tell us the names, date, and details.",
      einv_s3_h:"Get your link", einv_s3_p:"We put it together and send you a link to share with your guests.",
      einv_toc_why:"Why Us", einv_toc_how:"How it Works", einv_toc_templates:"Templates", einv_toc_faq:"FAQ", einv_toc_start:"Get Started",
      einv_tpl_eyebrow:"Templates", einv_tpl_h2:"Browse invitation templates",
      einv_tpl_p:"The templates below are just a starting point — tell us about your event and your designer will tailor it to you.",
      vid_soon:"Preview video coming soon",
      einv_faq_q1:"Can you change the photos, names, and date?",
      einv_faq_a1:"Yes — every invitation is personalized with your details, including names, date, location, and photos.",
      einv_faq_q2:"Can guests reply (RSVP)?",
      einv_faq_a2:"Yes, each invitation includes an RSVP form for your guests.",
      einv_faq_q3:"Can it include music or video?",
      einv_faq_a3:"Yes — you can add your own song, plus a short video, like a YouTube link.",
      einv_faq_q4:"How do I pay?",
      einv_faq_a4:"Payment details are arranged directly with your designer over Telegram.",
      einv_cta_h:"Not sure which style fits?", einv_cta_p:"Tell us about your event — we'll help you pick a design or create something new.",
      einv_cta_btn:"Chat with a designer",
      einv_see_all:"See All Templates",
      einv_all_h1:"All E-Invitation Templates", einv_all_lead:"Browse all of our designs by occasion, and message us on Telegram once you find one you like.",
      einv_all_back:"← Back to E-Invitation", cat_all:"All",
      skip_link:"Skip to content",
      crumb_home:"Home", learn_more:"Learn more",
      home_about_h2:"About Jaran Digital Solutions",
      home_about_btn:"Learn about us",
      home_contact_teaser_h:"Ready to get started?",
      home_contact_teaser_p:"Tell us what you need — we respond fastest on Telegram.",
      home_contact_teaser_btn:"Contact us",
      aboutpage_eyebrow:"About Us",
      aboutpage_h1:"A small digital studio with big attention to detail",
      aboutpage_lead:"We help individuals and businesses across Cambodia present themselves professionally — through expertly designed CVs, wedding e-invitations, a live gift book, guest photo sharing, a photobooth and QR menus for restaurants.",
      about_story_eyebrow:"Our Story", about_story_h2:"Design with a clear purpose",
      about_p3:"Every project starts with a simple conversation. You tell us what you need, we show you the options, and we refine it together until it's right.",
      about_stat1:"Design templates", about_stat2:"Products",
      about_stat3:"Telegram response", about_stat4:"Languages served",
      about_stat1_v:"400+", about_stat2_v:"6", about_stat3_v:"< 24 hrs", about_stat4_v:"KH / EN",
      about_how_eyebrow:"How We Work", about_how_h2:"How we work with you",
      about_pr1_h:"Listen", about_pr1_p:"We ask about your goal, your style, and your deadline before anything gets designed.",
      about_pr2_h:"Propose", about_pr2_p:"We suggest a template or design something new to suit you — with clear, upfront pricing.",
      about_pr3_h:"Refine", about_pr3_p:"You review and give feedback, and we revise until you're happy with it.",
      about_pr4_h:"Deliver", about_pr4_p:"We set everything up and hand it over, ready to use.",
      about_values_eyebrow:"Our Values", about_values_h2:"What we stand by",
      about_cta_h:"Want to talk through your project?",
      about_cta_p:"Message us on Telegram — no obligation, just a useful conversation.",
      about_cta_btn:"Chat on Telegram",
      contactpage_eyebrow:"Contact Us", contactpage_h1:"Get started today",
      contactpage_lead:"Pick whichever way works best for you — we respond fastest on Telegram.",
      contact_ways_eyebrow:"Ways to reach us", contact_ways_h2:"Get in touch",
      contact_hours_eyebrow:"Good to know", contact_hours_h2:"Before you write to us",
      contact_i1_h:"Response times", contact_i1_p:"We normally reply within one business day, Cambodia time (ICT).",
      contact_i2_h:"Languages", contact_i2_p:"We work in Khmer and English — write in whichever you prefer.",
      contact_i3_h:"Where we work", contact_i3_p:"We work entirely online, serving clients across Cambodia and abroad.",
      contact_eyebrow:"Contact Us", contact_h2:"Get started today",
      contact_p:"Pick whichever way works best for you — we respond fastest on Telegram.",
      contact_tg_h:"Telegram", contact_tg_btn:"Chat now",
      contact_phone_h:"Phone", contact_phone_btn:"Call now",
      contact_email_h:"Email", contact_email_btn:"Send email",
      contact_note_pre:"The fastest way to reach us is on ",
      nf_h1:"We can't find that page",
      nf_p:"The link you followed may have moved or no longer exists. Try one of the links below.",
      nf_home:"Back to home",
      foot_tagline:"Digital services that help you and your business stand out.",
      foot_explore:"Explore", foot_contact:"Contact", foot_legal:"All rights reserved"
    }
  };

  var TPL_KEYS = ["t1","t2","t3","t4","t5","t6"];
  var TG_HANDLE = "jarandigitalservices_cambodia";
  var currentLang = "en";
  var TPL_LANGS = ["en","kh","zh"];
  var TPL_LANG_NAMES = {en:"English", kh:"Khmer", zh:"Chinese"};
  var tplLang = "en"; // which CV template language folder is being browsed
  var uploadedTemplates = {en:null, kh:null, zh:null}; // null = not checked yet, [] = checked, none found
  var uploadedVideos = null;    // null = not checked yet, [] = checked, none found

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function nameFromFile(file){
    var base = file.replace(/\.[a-zA-Z0-9]+$/, "");

    // Jaran style: JARAN-01-EN_Onyx-Executive.png -> "01 — Onyx Executive"
    var jaran = base.match(/^JARAN-(\d+)-(?:EN|KH|ZH)_(.+)$/i);
    if(jaran){
      var jNum = jaran[1];
      var jLabel = jaran[2].replace(/[-_]+/g, " ").trim();
      jLabel = jLabel.replace(/\w\S*/g, function(w){ return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(); });
      return jNum + " — " + jLabel;
    }

    // catalogue code style: TPL001.jpg, or TPL001-modern-navy.jpg
    var tpl = base.match(/^(TPL\d+)(?:[-_](.+))?$/i);
    if(tpl){
      var code = tpl[1].toUpperCase();
      var label = tpl[2];
      if(!label) return code;
      label = label.replace(/[-_]+/g, " ").trim();
      label = label.replace(/\w\S*/g, function(w){ return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(); });
      return code + " — " + label;
    }

    // older style: 01-modern-navy.jpg
    base = base.replace(/^\d+[-_]/, "");
    base = base.replace(/[-_]+/g, " ").trim();
    return base.replace(/\w\S*/g, function(w){ return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(); });
  }

  function telegramTplUrl(lang, name, kind, tplLangTag){
    var taggedName = tplLangTag ? name + " (" + TPL_LANG_NAMES[tplLangTag] + ")" : name;
    var msg;
    if(kind === "einv"){
      msg = lang === "km"
        ? "សួស្តី! ខ្ញុំចង់បានសំបុត្រអញ្ជើញរចនាបថ \"" + taggedName + "\"។"
        : "Hi! I'd like the \"" + taggedName + "\" invitation template.";
    } else {
      msg = lang === "km"
        ? "សួស្តី! ខ្ញុំចង់បាន CV រចនាបថ \"" + taggedName + "\"។"
        : "Hi! I'd like the \"" + taggedName + "\" CV template.";
    }
    return "https://t.me/"+TG_HANDLE+"?text="+encodeURIComponent(msg);
  }

  function extractYouTubeId(url){
    var m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  }

  function loadUploadedTemplates(){
    var pending = TPL_LANGS.length;
    TPL_LANGS.forEach(function(lg){
      fetch("/assets/templates/" + lg + "/list.txt", {cache:"no-store"}).then(function(res){
        return res.ok ? res.text() : "";
      }).then(function(text){
        uploadedTemplates[lg] = text.split("\n")
          .map(function(l){ return l.trim(); })
          .filter(function(l){ return l && l.charAt(0) !== "#"; });
      }).catch(function(){
        uploadedTemplates[lg] = [];
      }).then(function(){
        pending--;
        if(pending === 0){ renderTemplates(currentLang); renderHeroShowcase(); }
      });
    });
  }

  function renderHeroShowcase(){
    var box = document.getElementById("heroShowcase");
    var files = uploadedTemplates.en || [];
    if(!box || !files.length) return;
    var count = Math.min(6, files.length), picks = [];
    for(var k=0;k<count;k++) picks.push(files[Math.floor(k * files.length / count)]);
    var html = picks.map(function(f){
      var name = nameFromFile(f);
      return '<div class="hs-card" data-name="'+escapeHtml(name)+'"><img src="/assets/templates/en/'+escapeHtml(f)+'" alt="'+escapeHtml(name)+' CV template"></div>';
    }).join("");
    html += '<div class="hs-caption"><span class="hs-name"></span><span class="hs-dots">'+picks.map(function(){return "<i></i>";}).join("")+'</span></div>';
    box.innerHTML = html;
    box.classList.add("is-live");
    var cards = box.querySelectorAll(".hs-card"), dots = box.querySelectorAll(".hs-dots i"), nameEl = box.querySelector(".hs-name");
    var n = cards.length, idx = 0, paused = false;
    function show(){
      for(var i=0;i<n;i++){
        var c = cards[i]; c.className = "hs-card";
        if(i === idx) c.classList.add("is-front");
        else if(i === (idx - 1 + n) % n) c.classList.add("is-left");
        else if(i === (idx + 1) % n) c.classList.add("is-right");
        if(dots[i]) dots[i].classList.toggle("on", i === idx);
      }
      nameEl.textContent = cards[idx].getAttribute("data-name");
    }
    show();
    box.addEventListener("mouseenter", function(){ paused = true; });
    box.addEventListener("mouseleave", function(){ paused = false; });
    setInterval(function(){ if(!paused && !document.hidden){ idx = (idx + 1) % n; show(); } }, 3200);
  }

  var MOCK_PREVIEW =
    '<div class="r-head">'+
      '<div class="r-avatar"></div>'+
      '<div class="r-headlines"><div class="r-name"></div><div class="r-title"></div></div>'+
    '</div>'+
    '<div class="r-rule"></div>'+
    '<div class="r-grid">'+
      '<div class="r-side">'+
        '<div class="r-label"></div>'+
        '<div class="r-ln w80"></div><div class="r-ln w60"></div><div class="r-ln w70"></div>'+
        '<div class="r-pills"><span class="r-pill"></span><span class="r-pill"></span><span class="r-pill"></span></div>'+
      '</div>'+
      '<div class="r-main">'+
        '<div class="r-label"></div>'+
        '<div class="r-block"><div class="r-ln w70"></div><div class="r-ln w40"></div><div class="r-ln w90"></div></div>'+
        '<div class="r-block"><div class="r-ln w60"></div><div class="r-ln w40"></div><div class="r-ln w80"></div></div>'+
      '</div>'+
    '</div>';

  function getTemplateItems(lang){
    var files = uploadedTemplates[tplLang];
    if(files && files.length){
      return files.map(function(file){
        var name = nameFromFile(file);
        var src = "/assets/templates/" + tplLang + "/" + file;
        return {
          name: name, desc: "",
          cardClass: "tpl-img",
          url: telegramTplUrl(lang, name, "cv", tplLang),
          previewHtml: '<a class="tpl-preview img" href="'+escapeHtml(src)+'" target="_blank" rel="noopener">'+
            '<img src="'+escapeHtml(src)+'" alt="'+escapeHtml(name)+'" loading="lazy"></a>'
        };
      });
    }
    return TPL_KEYS.map(function(key){
      return {
        name: I18N[lang][key+"_name"], desc: I18N[lang][key+"_desc"],
        cardClass: key,
        url: telegramTplUrl(lang, I18N[lang][key+"_name"]),
        previewHtml: '<div class="tpl-preview rmock">'+MOCK_PREVIEW+'</div>'
      };
    });
  }

  function tplCardHtml(lang, item, extraClass){
    return '<div class="tpl-card '+item.cardClass+(extraClass?" "+extraClass:"")+'">'+
      item.previewHtml+
      '<div class="tpl-body">'+
        '<h3>'+escapeHtml(item.name)+'</h3>'+
        (item.desc ? '<p>'+escapeHtml(item.desc)+'</p>' : '')+
        '<a class="btn tg block sm" href="'+item.url+'" target="_blank" rel="noopener">'+I18N[lang].tpl_choose+'</a>'+
      '</div>'+
    '</div>';
  }

  var tplSearchQuery = "";
  function buildTemplateGrid(lang){
    var grid = document.getElementById("tplGrid");
    if(!grid) return;
    var items = getTemplateItems(lang);

    var q = tplSearchQuery.trim().toLowerCase();
    var shown = q ? items.filter(function(it){ return it.name.toLowerCase().indexOf(q) !== -1; }) : items;

    var countEl = document.getElementById("tplResultCount");
    if(countEl){
      countEl.textContent = q ? (shown.length + " of " + items.length + " templates") : (items.length + " templates");
    }

    if(!shown.length){
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:40px 0">'+I18N[lang].tpl_no_results+'</p>';
      return;
    }
    grid.innerHTML = shown.map(function(item){ return tplCardHtml(lang, item); }).join("");
  }

  var carouselIndex = 0;
  function buildTemplateCarousel(lang){
    var track = document.getElementById("tplCarouselTrack");
    if(!track) return;
    var items = getTemplateItems(lang);
    var n = items.length;
    if(!n) return;
    if(carouselIndex >= n) carouselIndex = 0;

    var order, centerPos;
    if(n < 3){
      order = items.map(function(_, i){ return i; });
      centerPos = order.indexOf(carouselIndex);
    } else {
      order = [(carouselIndex - 1 + n) % n, carouselIndex, (carouselIndex + 1) % n];
      centerPos = 1;
    }

    track.innerHTML = order.map(function(i, pos){
      return tplCardHtml(lang, items[i], "carousel-card " + (pos === centerPos ? "is-center" : "is-side"));
    }).join("");

    var counter = document.getElementById("tplCarouselCounter");
    if(counter) counter.textContent = (carouselIndex + 1) + " / " + n;

    var prevBtn = document.getElementById("tplPrev");
    var nextBtn = document.getElementById("tplNext");
    var showArrows = n > 1;
    if(prevBtn) prevBtn.style.visibility = showArrows ? "visible" : "hidden";
    if(nextBtn) nextBtn.style.visibility = showArrows ? "visible" : "hidden";
  }

  function renderTemplates(lang){
    buildTemplateGrid(lang);
    buildTemplateCarousel(lang);
  }

  /* ---------------- E-Invitation video templates ---------------- */
  var EINV_FALLBACK = [
    {category:"Wedding", name:"Royal Gold Wedding", mockClass:"v1"},
    {category:"Birthday", name:"Neon Birthday Bash", mockClass:"v2"},
    {category:"Baby Shower", name:"Little Star Baby Shower", mockClass:"v3"},
    {category:"Anniversary", name:"Golden Years Anniversary", mockClass:"v4"},
    {category:"Corporate", name:"Modern Corporate Event", mockClass:"v5"},
    {category:"Party", name:"Midnight Rooftop Party", mockClass:"v6"}
  ];

  function loadUploadedVideos(){
    fetch("/assets/e-invitation/list.txt", {cache:"no-store"}).then(function(res){
      return res.ok ? res.text() : "";
    }).then(function(text){
      uploadedVideos = text.split("\n")
        .map(function(l){ return l.trim(); })
        .filter(function(l){ return l && l.charAt(0) !== "#"; })
        .map(function(line){
          var parts = line.split("|").map(function(p){ return p.trim(); });
          var category = parts[0] || "Other";
          var name = parts[1] || category;
          var videoId = extractYouTubeId(parts[2] || "");
          return videoId ? {category:category, name:name, videoId:videoId} : null;
        })
        .filter(Boolean);
      renderVideos(currentLang);
    }).catch(function(){
      uploadedVideos = [];
      renderVideos(currentLang);
    });
  }

  function getVideoItems(lang){
    if(uploadedVideos && uploadedVideos.length){
      return uploadedVideos.map(function(v){
        return {
          category: v.category, name: v.name, videoId: v.videoId, mockClass: null,
          url: telegramTplUrl(lang, v.name, "einv")
        };
      });
    }
    return EINV_FALLBACK.map(function(f){
      return {
        category: f.category, name: f.name, videoId: null, mockClass: f.mockClass,
        url: telegramTplUrl(lang, f.name, "einv")
      };
    });
  }

  function videoCardHtml(lang, item, extraClass){
    var preview;
    if(item.videoId){
      preview = '<div class="tpl-preview vid-preview" style="background-image:url(https://img.youtube.com/vi/'+item.videoId+'/hqdefault.jpg)" data-video="'+item.videoId+'">'+
        '<button class="vid-play" aria-label="Play preview">▶</button></div>';
    } else {
      preview = '<div class="tpl-preview vid-preview '+item.mockClass+'">'+
        '<button class="vid-play" disabled aria-label="Preview not available">▶</button>'+
        '<span class="vid-soon">'+I18N[lang].vid_soon+'</span></div>';
    }
    return '<div class="tpl-card vid-card '+(item.mockClass||"")+' '+(extraClass||"")+'">'+
      preview+
      '<div class="tpl-body">'+
        '<span class="vid-cat">'+escapeHtml(item.category)+'</span>'+
        '<h3>'+escapeHtml(item.name)+'</h3>'+
        '<a class="btn tg block sm" href="'+item.url+'" target="_blank" rel="noopener">'+I18N[lang].tpl_choose+'</a>'+
      '</div>'+
    '</div>';
  }

  var videoCarouselIndex = 0;
  function buildVideoCarousel(lang){
    var track = document.getElementById("vidCarouselTrack");
    if(!track) return;
    var items = getVideoItems(lang);
    var n = items.length;
    if(!n) return;
    if(videoCarouselIndex >= n) videoCarouselIndex = 0;

    var order, centerPos;
    if(n < 3){
      order = items.map(function(_, i){ return i; });
      centerPos = order.indexOf(videoCarouselIndex);
    } else {
      order = [(videoCarouselIndex - 1 + n) % n, videoCarouselIndex, (videoCarouselIndex + 1) % n];
      centerPos = 1;
    }

    track.innerHTML = order.map(function(i, pos){
      return videoCardHtml(lang, items[i], "carousel-card " + (pos === centerPos ? "is-center" : "is-side"));
    }).join("");

    var counter = document.getElementById("vidCarouselCounter");
    if(counter) counter.textContent = (videoCarouselIndex + 1) + " / " + n;

    var prevBtn = document.getElementById("vidPrev");
    var nextBtn = document.getElementById("vidNext");
    var showArrows = n > 1;
    if(prevBtn) prevBtn.style.visibility = showArrows ? "visible" : "hidden";
    if(nextBtn) nextBtn.style.visibility = showArrows ? "visible" : "hidden";
  }

  var videoCategoryFilter = "All";
  function buildVideoGrid(lang){
    var grid = document.getElementById("vidGrid");
    if(!grid) return;
    var items = getVideoItems(lang);

    var filterWrap = document.getElementById("vidFilters");
    if(filterWrap){
      var cats = ["All"];
      items.forEach(function(it){ if(cats.indexOf(it.category) === -1) cats.push(it.category); });
      if(cats.indexOf(videoCategoryFilter) === -1) videoCategoryFilter = "All";
      filterWrap.innerHTML = cats.map(function(c){
        var label = c === "All" ? I18N[lang].cat_all : escapeHtml(c);
        return '<button type="button" class="cat-filter'+(c===videoCategoryFilter?" active":"")+'" data-cat="'+escapeHtml(c)+'">'+label+'</button>';
      }).join("");
    }

    var shown = videoCategoryFilter === "All" ? items : items.filter(function(it){ return it.category === videoCategoryFilter; });
    grid.innerHTML = shown.map(function(item){ return videoCardHtml(lang, item); }).join("");
  }

  function renderVideos(lang){
    buildVideoCarousel(lang);
    buildVideoGrid(lang);
  }

  function setLang(lang){
    if(!I18N[lang]) lang = "en";
    currentLang = lang;
    document.body.setAttribute("data-lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
      var key = el.getAttribute("data-i18n-placeholder");
      if(I18N[lang][key] !== undefined) el.setAttribute("placeholder", I18N[lang][key]);
    });
    /* The contact note mixes text with a link, so it is rebuilt rather than
       swapped as plain text. Dropping data-i18n-note (as the page editor does
       when you retype it) leaves whatever is written in the HTML untouched. */
    var note = document.querySelector(".contact-note[data-i18n-note]");
    if(note){
      note.innerHTML = I18N[lang].contact_note_pre + '<a href="https://t.me/'+TG_HANDLE+'" target="_blank" rel="noopener">Telegram</a>' + (lang==="km" ? "។" : ".");
    }
    var kmBtn = document.getElementById("langBtnKm");
    var enBtn = document.getElementById("langBtnEn");
    if(kmBtn) kmBtn.classList.toggle("active", lang==="km");
    if(enBtn) enBtn.classList.toggle("active", lang==="en");
    var footYear = document.getElementById("footYear");
    if(footYear){
      footYear.textContent = "© "+new Date().getFullYear()+" Jaran Digital Solutions. "+I18N[lang].foot_legal+".";
    }
    /* "ask about this product" tiles open Telegram with a ready message */
    document.querySelectorAll("a[data-ask]").forEach(function(a){
      a.href = "https://t.me/"+TG_HANDLE+"?text="+encodeURIComponent(I18N[lang].ask_msg + a.getAttribute("data-ask") + (lang==="km" ? "។" : "."));
    });
    renderTemplates(lang);
    renderVideos(lang);
    try{ localStorage.setItem("jaran-lang", lang); }catch(e){}
  }

  /* Highlight the nav entry for the page we're on. Pages are separate files now,
     so this is a path match rather than a scroll-spy. Sub-pages (e.g. the full
     template galleries) light up their parent section. */
  function markActiveNav(){
    var path = location.pathname.replace(/\/+$/, "").replace(/\.html$/, "").toLowerCase();
    if(path === "") path = "/";
    var section = "home";
    if(path.indexOf("/cv") === 0 || path.indexOf("/products") === 0 ||
       path.indexOf("/e-invitation") === 0 || path.indexOf("/einvitation") === 0) section = "products";
    else if(path.indexOf("/about") === 0) section = "about";
    else if(path.indexOf("/contact") === 0) section = "contact";
    else if(path !== "/" && path !== "/index") section = "";

    document.querySelectorAll(".navlinks a[data-nav], .mobilepanel a[data-nav]").forEach(function(a){
      var on = a.getAttribute("data-nav") === section;
      a.classList.toggle("active", on);
      if(on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    var kmBtn = document.getElementById("langBtnKm");
    var enBtn = document.getElementById("langBtnEn");
    if(kmBtn) kmBtn.addEventListener("click", function(){ setLang("km"); });
    if(enBtn) enBtn.addEventListener("click", function(){ setLang("en"); });

    var savedLang = "en";
    try{ savedLang = localStorage.getItem("jaran-lang") || "en"; }catch(e){}
    setLang(savedLang);

    var tplLangBtns = document.querySelectorAll("[data-tpl-lang]");
    if(tplLangBtns.length){
      var savedTplLang = "en";
      try{ savedTplLang = localStorage.getItem("jaran-tpl-lang") || "en"; }catch(e){}
      if(TPL_LANGS.indexOf(savedTplLang) === -1) savedTplLang = "en";
      tplLang = savedTplLang;
      tplLangBtns.forEach(function(b){
        b.classList.toggle("active", b.getAttribute("data-tpl-lang") === tplLang);
        b.addEventListener("click", function(){
          tplLang = b.getAttribute("data-tpl-lang");
          try{ localStorage.setItem("jaran-tpl-lang", tplLang); }catch(e){}
          tplLangBtns.forEach(function(bb){ bb.classList.toggle("active", bb.getAttribute("data-tpl-lang") === tplLang); });
          carouselIndex = 0;
          renderTemplates(currentLang);
        });
      });
    }

    if(document.getElementById("tplGrid") || document.getElementById("tplCarouselTrack")) loadUploadedTemplates();

    var tplSearch = document.getElementById("tplSearch");
    if(tplSearch){
      tplSearch.addEventListener("input", function(){
        tplSearchQuery = tplSearch.value;
        buildTemplateGrid(currentLang);
      });
    }

    /* template carousel arrows */
    var tplPrev = document.getElementById("tplPrev");
    var tplNext = document.getElementById("tplNext");
    if(tplPrev){
      tplPrev.addEventListener("click", function(){
        var n = getTemplateItems(currentLang).length;
        if(!n) return;
        carouselIndex = (carouselIndex - 1 + n) % n;
        buildTemplateCarousel(currentLang);
      });
    }
    if(tplNext){
      tplNext.addEventListener("click", function(){
        var n = getTemplateItems(currentLang).length;
        if(!n) return;
        carouselIndex = (carouselIndex + 1) % n;
        buildTemplateCarousel(currentLang);
      });
    }

    if(document.getElementById("vidGrid") || document.getElementById("vidCarouselTrack")) loadUploadedVideos();

    /* video carousel arrows */
    var vidPrev = document.getElementById("vidPrev");
    var vidNext = document.getElementById("vidNext");
    if(vidPrev){
      vidPrev.addEventListener("click", function(){
        var n = getVideoItems(currentLang).length;
        if(!n) return;
        videoCarouselIndex = (videoCarouselIndex - 1 + n) % n;
        buildVideoCarousel(currentLang);
      });
    }
    if(vidNext){
      vidNext.addEventListener("click", function(){
        var n = getVideoItems(currentLang).length;
        if(!n) return;
        videoCarouselIndex = (videoCarouselIndex + 1) % n;
        buildVideoCarousel(currentLang);
      });
    }

    /* video play buttons + category filters (event delegation: cards rebuild often) */
    document.addEventListener("click", function(e){
      var playBtn = e.target.closest ? e.target.closest(".vid-play") : null;
      if(playBtn && !playBtn.disabled){
        var preview = playBtn.closest(".vid-preview");
        var videoId = preview && preview.getAttribute("data-video");
        if(videoId){
          preview.outerHTML = '<div class="tpl-preview vid-preview is-playing">'+
            '<iframe src="https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&rel=0" '+
            'title="Video preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" '+
            'allowfullscreen loading="lazy"></iframe></div>';
        }
        return;
      }
      var filterBtn = e.target.closest ? e.target.closest(".cat-filter") : null;
      if(filterBtn){
        videoCategoryFilter = filterBtn.getAttribute("data-cat") || "All";
        buildVideoGrid(currentLang);
      }
    });

    /* ---------------- contact form → contact.jarandigital.com → our Telegram ---------------- */
    var ctForm = document.getElementById("ctForm");
    if(ctForm){
      var ctStatus = document.getElementById("ctStatus");
      var ctBtn = ctForm.querySelector("button[type=submit]");
      var say = function(key, cls){ ctStatus.textContent = I18N[currentLang][key]; ctStatus.className = "ct-status" + (cls ? " "+cls : ""); };
      ctForm.addEventListener("submit", function(e){
        e.preventDefault();
        var f = ctForm.elements;
        var name = f.name.value.trim(), msg = f.message.value.trim();
        if(!name || !msg){ say("ct_need", "err"); return; }
        var product = f.product.value;
        ctBtn.disabled = true; say("ct_sending");
        fetch("https://contact.jarandigital.com/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            site: "Jaran Digital",
            name: name,
            contact: f.contact.value.trim(),
            message: (product ? "[" + product + "] " : "") + msg,
            page: location.href,
            website: f.website.value
          })
        }).then(function(r){ return r.json().catch(function(){ return {ok:false}; }); })
          .then(function(d){
            if(d && d.ok){ say("ct_ok", "ok"); ctForm.reset(); }
            else say("ct_err", "err");
          })
          .catch(function(){ say("ct_err", "err"); })
          .then(function(){ ctBtn.disabled = false; });
      });
    }

    /* ---------------- home: show products for one audience ---------------- */
    var audBtns = document.querySelectorAll(".aud-tabs [data-aud]");
    audBtns.forEach(function(b){
      b.addEventListener("click", function(){
        var aud = b.getAttribute("data-aud");
        audBtns.forEach(function(x){ x.classList.toggle("active", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        document.querySelectorAll(".prod-card[data-aud]").forEach(function(card){
          card.classList.toggle("dim", aud !== "all" && card.getAttribute("data-aud") !== aud);
        });
      });
    });

    /* ---------------- theme (light/dark) ---------------- */
    var themeBtn = document.getElementById("themeBtn");
    function applyThemeIcon(theme){ if(themeBtn) themeBtn.textContent = theme === "dark" ? "☀" : "🌙"; }
    function setTheme(theme){
      document.documentElement.setAttribute("data-theme", theme);
      applyThemeIcon(theme);
      try{ localStorage.setItem("jaran-theme", theme); }catch(e){}
    }
    var savedTheme = null;
    try{ savedTheme = localStorage.getItem("jaran-theme"); }catch(e){}
    if(!savedTheme){
      savedTheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    }
    setTheme(savedTheme);
    if(themeBtn){
      themeBtn.addEventListener("click", function(){
        var cur = document.documentElement.getAttribute("data-theme");
        setTheme(cur === "dark" ? "light" : "dark");
      });
    }

    /* footer year */
    var footYear = document.getElementById("footYear");
    if(footYear){
      var y = new Date().getFullYear();
      footYear.textContent = "© "+y+" Jaran Digital Solutions. "+I18N[currentLang].foot_legal+".";
    }

    /* mobile menu */
    var burger = document.getElementById("burgerBtn");
    var panel = document.getElementById("mobilePanel");
    if(burger && panel){
      var syncBurger = function(){
        burger.setAttribute("aria-expanded", panel.classList.contains("open") ? "true" : "false");
      };
      burger.addEventListener("click", function(){ panel.classList.toggle("open"); syncBurger(); });
      panel.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){ panel.classList.remove("open"); syncBurger(); });
      });
      document.addEventListener("keydown", function(e){
        if(e.key === "Escape" && panel.classList.contains("open")){
          panel.classList.remove("open"); syncBurger(); burger.focus();
        }
      });
      syncBurger();
    }

    markActiveNav();

    /* active link within each section's own contents sidebar */
    [
      ["cvToc","cv-how,cv-templates,cv-faq,cv-start"],
      ["einvToc","einv-why,einv-how,einv-templates,einv-faq,einv-start"]
    ].forEach(function(pair){
      var toc = document.getElementById(pair[0]);
      if(!toc) return;
      var tocLinks = toc.querySelectorAll("a");
      var tocIo = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            var id = entry.target.id;
            tocLinks.forEach(function(a){
              a.classList.toggle("active", a.getAttribute("href") === "#"+id);
            });
          }
        });
      }, {rootMargin:"-30% 0px -55% 0px"});
      pair[1].split(",").forEach(function(id){
        var el = document.getElementById(id);
        if(el) tocIo.observe(el);
      });
    });

    /* reveal on scroll */
    var ro = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add("show"); ro.unobserve(entry.target); }
      });
    }, {threshold:.12});
    document.querySelectorAll(".reveal:not(.show)").forEach(function(el){ ro.observe(el); });

    /* back to top */
    var totop = document.getElementById("toTop");
    if(totop){
      window.addEventListener("scroll", function(){
        totop.classList.toggle("show", window.scrollY > 480);
      }, {passive:true});
      totop.addEventListener("click", function(){
        window.scrollTo({top:0, behavior:"smooth"});
      });
    }
  });
})();
