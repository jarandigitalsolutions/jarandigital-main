(function(){
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    km: {
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
      about_p1:"Jaran Digital Solutions គឺជាក្រុមហ៊ុនផ្តល់សេវាឌីជីថលមានមូលដ្ឋាននៅកម្ពុជា ជួយអតិថិជនបុគ្គល និងអាជីវកម្មបង្ហាញខ្លួនប្រកបដោយវិជ្ជាជីវៈ តាមរយៈ CV ដែលរចនាដោយអ្នកជំនាញ និងសំបុត្រអញ្ជើញឌីជីថលដ៏ស្រស់ស្អាត។",
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
      cv_form_1_h:"បំពេញទម្រង់ព័ត៌មាន", cv_form_1_p:"ទាញយកទម្រង់ បំពេញតាមល្បឿនផ្ទាល់ខ្លួន រួចផ្ញើត្រឡប់មកយើងវិញតាម Telegram ជាមួយរូបថតមួយសន្លឹក។",
      cv_form_1_btn:"ទាញយកទម្រង់ (English)",
      cv_form_2_h:"ជជែកជាមួយអ្នករចនាដោយផ្ទាល់", cv_form_2_p:"ចង់និយាយជាជាងសរសេរ? ផ្ញើសារមកយើង ហើយអ្នករចនានឹងសួរសំណួរម្តងមួយៗ។",
      cv_form_2_btn:"ជជែកតាម Telegram",
      faq_eyebrow:"សំណួរញឹកញាប់", faq_h2:"សំណួរដែលសួរញឹកញាប់",
      faq_q1:"តើត្រូវការពេលប៉ុន្មានដើម្បីទទួលបាន CV?",
      faq_a1:"អាស្រ័យលើលក្ខណៈស្មុគស្មាញនៃការរចនា និងល្បឿននៃការឆ្លើយតបគ្នារវាងអ្នក និងអ្នករចនា។ សរសេរមកតាម Telegram ហើយអ្នករចនានឹងប្រាប់អ្នកអំពីរយៈពេលប៉ាន់ស្មានមុននឹងចាប់ផ្តើម។",
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
      aboutpage_lead:"យើងជួយបុគ្គល និងអាជីវកម្មនៅកម្ពុជាបង្ហាញខ្លួនប្រកបដោយវិជ្ជាជីវៈ តាមរយៈ CV ដែលរចនាដោយអ្នកជំនាញ និងសំបុត្រអញ្ជើញឌីជីថលដ៏ស្រស់ស្អាត។",
      about_story_eyebrow:"រឿងរ៉ាវរបស់យើង", about_story_h2:"រចនាដែលមានគោលបំណងច្បាស់លាស់",
      about_p3:"រាល់គម្រោងចាប់ផ្តើមដោយការសន្ទនាដ៏សាមញ្ញមួយ។ អ្នកប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ យើងបង្ហាញជម្រើស ហើយរួមគ្នាកែសម្រួលរហូតដល់ត្រឹមត្រូវ។",
      about_stat1:"គំរូរចនា", about_stat2:"សេវាកម្មសំខាន់",
      about_stat3:"ឆ្លើយតបតាម Telegram", about_stat4:"ភាសាបម្រើសេវា",
      about_stat1_v:"400+", about_stat2_v:"2", about_stat3_v:"< 24 ម៉ោង", about_stat4_v:"ខ្មែរ / EN",
      about_how_eyebrow:"របៀបធ្វើការ", about_how_h2:"របៀបដែលយើងធ្វើការជាមួយអ្នក",
      about_pr1_h:"ស្តាប់", about_pr1_p:"យើងសួរនាំពីគោលដៅ រចនាបថ និងកាលបរិច្ឆេទរបស់អ្នក មុននឹងចាប់ផ្តើម។",
      about_pr2_h:"ស្នើរចនា", about_pr2_p:"យើងណែនាំគំរូ ឬរចនាថ្មីមួយដែលសមនឹងអ្នក ព្រមទាំងតម្លៃច្បាស់លាស់។",
      about_pr3_h:"កែសម្រួល", about_pr3_p:"អ្នកមើល ហើយផ្តល់មតិ — យើងកែរហូតដល់អ្នកពេញចិត្ត។",
      about_pr4_h:"ប្រគល់ជូន", about_pr4_p:"អ្នកទទួលបានឯកសារចុងក្រោយ ឬតំណភ្ជាប់សម្រាប់ចែករំលែកភ្លាមៗ។",
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
      contact_note_pre:"jarandigital.com — ចម្លើយលឿនបំផុតគឺតាមរយៈ ",
      nf_h1:"រកមិនឃើញទំព័រនេះទេ",
      nf_p:"តំណភ្ជាប់ដែលអ្នកចុច ប្រហែលជាផ្លាស់ប្តូរ ឬលែងមានទៀតហើយ។ សូមសាកល្បងតំណខាងក្រោម។",
      nf_home:"ត្រឡប់ទៅទំព័រដើម",
      foot_tagline:"សេវាឌីជីថលដែលជួយឲ្យអ្នក និងអាជីវកម្មរបស់អ្នកលេចធ្លោ។",
      foot_explore:"ស្វែងរក", foot_contact:"ទំនាក់ទំនង", foot_legal:"រក្សាសិទ្ធិគ្រប់យ៉ាង"
    },
    en: {
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
      about_p1:"Jaran Digital Solutions is a Cambodia-based digital services studio helping individuals and businesses present themselves professionally — through expertly designed CVs and beautiful digital invitations.",
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
      cv_form_1_h:"Fill in the intake form", cv_form_1_p:"Download the form, fill it in at your own pace, and send it back to us on Telegram with one photo attached.",
      cv_form_1_btn:"Download Form (English)",
      cv_form_2_h:"Talk to a designer directly", cv_form_2_p:"Prefer to talk instead of write? Message us and your designer will ask you the questions one at a time.",
      cv_form_2_btn:"Chat on Telegram",
      faq_eyebrow:"FAQ", faq_h2:"Frequently asked questions",
      faq_q1:"How long does it take to get my CV?",
      faq_a1:"It depends on how detailed the design is and how quickly we hear back from each other. Message us on Telegram and your designer will give you a time estimate before you commit.",
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
      aboutpage_lead:"We help individuals and businesses across Cambodia present themselves professionally — through expertly designed CVs and beautiful digital invitations.",
      about_story_eyebrow:"Our Story", about_story_h2:"Design with a clear purpose",
      about_p3:"Every project starts with a simple conversation. You tell us what you need, we show you the options, and we refine it together until it's right.",
      about_stat1:"Design templates", about_stat2:"Core services",
      about_stat3:"Telegram response", about_stat4:"Languages served",
      about_stat1_v:"400+", about_stat2_v:"2", about_stat3_v:"< 24 hrs", about_stat4_v:"KH / EN",
      about_how_eyebrow:"How We Work", about_how_h2:"How we work with you",
      about_pr1_h:"Listen", about_pr1_p:"We ask about your goal, your style, and your deadline before anything gets designed.",
      about_pr2_h:"Propose", about_pr2_p:"We suggest a template or design something new to suit you — with clear, upfront pricing.",
      about_pr3_h:"Refine", about_pr3_p:"You review and give feedback, and we revise until you're happy with it.",
      about_pr4_h:"Deliver", about_pr4_p:"You get the final files, or a link ready to share with your guests.",
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
      contact_note_pre:"jarandigital.com — the fastest way to reach us is on ",
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
        if(pending === 0) renderTemplates(currentLang);
      });
    });
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
    if(path.indexOf("/cv") === 0) section = "cv";
    else if(path.indexOf("/e-invitation") === 0 || path.indexOf("/einvitation") === 0) section = "einv";
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
