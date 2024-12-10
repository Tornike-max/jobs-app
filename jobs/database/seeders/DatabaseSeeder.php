<?php

namespace Database\Seeders;

use App\Models\About;
use App\Models\Announcement;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\City;
use App\Models\Company;
use App\Models\Faq;
use App\Models\PricingOption;
use App\Models\PricingPlan;
use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory(10)->create();

        // Announcement::factory(25)->create();

        // Company::factory(25)->create();

        // PricingPlan::factory()->create([

        //     'name' => 'ვიპ განცხადება',
        //     'description' => 'მაქსიმალური ხილვადობა ვიპ ველზე 7 დღის განმავლობაში. ',
        //     'is_vip' => true,
        //     'base_duration_days' => '7',
        //     'created_at' => now(),
        //     'updated_at' => now(),

        // ]);

        // PricingOption::factory()->create([
        //     'pricing_plan_id' => 2,
        //     'price' => '50',
        // ]);

        About::factory()->create([
            'headerText' => 'ჯობს.გე არის ვებ-გვერდი, სადაც ქვეყნდება განცხადებები ვაკანსიების, ტრენინგების, გაცვლითი პროგრამების, გრანტებისა და ტენდერების შესახებ. ჯობს.გე შეიქმნა 1998 წელს, როგორც დასაქმების ხელშემწყობი არამომგებიანი პროექტი, და შემდგომში გარდაიქმნა ყველაზე წარმატებულ ინტერნეტ-ბიზნესად საქართველოში. დღეს-დღეობით ჯობს.გე ერთ-ერთი ყველაზე პოპულარული ინტერნეტ-გვერდია ქვეყნის ფარგლებში. იგი ასევე მოიცავს ყველაზე ფართომასშტაბიან ელექტრონულ დაგზავნას, რის გამოც ჯობს.გე ყველაზე ეფექტური და ქმედითი საინფორმაციო რესურსია ადგილობრივ ვირტუალურ ბაზარზე.',
            'middleText' => '1998 წლიდან დღემდე ჩვენ ვემსახურებით საქართველოში მოქმედ მსხვილ დამქირავებელთა უმეტესობას და მათ სასურველ კანდიდატებთან ვაკავშირებთ. ამ პერიოდის განმავლობაში ჩვენ შევიძინეთ მნიშვნელოვანი ცოდნა და გამოცდილება, და დავამკვიდრეთ კლიენტებთან განსაკუთრებული ურთიერთობის ტრადიცია, რამაც გადამწყვეტი როლი ითამაშა ჩვენი კომპანიის წარმატებაში. სწორედ ამის გამო, საქართველოში მოქმედ მსხვილ დამქირავებელთა უმეტესობა ჩვენს მომსახურებას ირჩევს.',
            'footerText' => 'დღეს-დღეობით ჯობს.გე ემსახურება ინტერნეტის ასიათასობით მომხმარებელს და ათიათასობით დამქირავებელს. ჩვენი მომსახურებების შესახებ დამატებითი ინფორმაციისთვის გთხოვთ იხილოთ საიტის შესაბამისი განყოფილება.'
        ]);
    }
}
