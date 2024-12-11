import { Link } from "@inertiajs/react";
import React from "react";

const Publish = () => {
    return (
        <div className="w-full flex justify-center items-start flex-col gap-8">
            <div className="w-full flex justify-start items-center">
                <h1 className="text-2xl text-slate-600 font-medium">
                    გამოაქვეყნე
                </h1>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-4 text-slate-700">
                <p>
                    იმისთვის, რომ განცხადება ოპერატიულად განათავსოთ, დააკლიკეთ
                    აქ:{" "}
                    <Link
                        className="text-blue-500 underline"
                        href={route("announcements.create")}
                    >
                        Link
                    </Link>{" "}
                    ან დაგვიკავშირდით ელ-ფოსტაზე{" "}
                    <span className="text-blue-500">
                        ozbetelashvilitornike2@gmail.com
                    </span>
                    .
                </p>
                <p>
                    განცხადებები, რომლებშიც არ არის მითითებული განაცხადის
                    შემოტანის საბოლოო ვადა, ავტომატურად ქვეყნდება 1 თვის ვადით.
                </p>
            </div>
            <div className="w-full flex justify-start items-center">
                <h1 className="underline text-slate-600">
                    დამატებითი ინფორმაცია
                </h1>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-4 text-slate-700">
                <p>
                    ჩვენ უფლებას ვიტოვებთ ჩავასწოროთ მცირე გრამატიკული შეცდომები
                    და შევცვალოთ ტექსტის ფორმატი მისი კითხვადობის გაუმჯობესების
                    მიზნით. ყველა შემოსული განცხადება გამოქვეყნდება ჩვენი საიტის
                    ერთიანი ფორმატის შესაბამისად. გამონაკლისები არ
                    დაიშვება.ჩვენს საიტზე არსებული ელექტრონული კონტაქტის ფორმის
                    მეშვეობით შემოსული განცხადებების სიზუსტე გადამოწმდება
                    გამომგზავნთან. თუ გამომგზავნი არ უპასუხებს თხოვნას ამ გზით
                    შემოსული განცხადების გადამოწმების შესახებ, განცხადება არ
                    გამოქვეყნდება.
                </p>
                <p>
                    თუ განცხადება ქვეყნდება ქსელურ მარკეტინგის ჩაბმის მიზნით, ეს
                    პირდაპირ უნდა იყოს მითითებული განცხადების დასაწყისში.
                </p>
                <p>
                    ჩვენ უფლებას ვიტოვებთ მომსახურებაზე უარი ვუთხრათ კომპანიებს,
                    რომლებიც სისტემატურად არღვევენ თანასწორუფლებიანი დასაქმების
                    სტანდარტებს ან/და ჩაბმულნი არიან არალეგალურ საქმიანობაში.
                </p>
                <p>
                    დამქირავებელი, რომელსაც სურს განცხადებაში არ მიუთითოს
                    საკუთარი ვინაობა და საკონტაქტო ინფორმაცია, ვალდებულია ეს
                    ინფორმაცია მოგვაწოდოს ცალკე. კონფიდენციალობა მკაცრად იქნება
                    დაცული.
                </p>
            </div>
        </div>
    );
};

export default Publish;
