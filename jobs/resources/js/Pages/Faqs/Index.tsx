import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, faqs }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    კითხვა პასუხი
                </h2>
            }
        >
            <Head title="კითხვა პასუხი" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8 text-slate-700">
                    <div className="w-full flex justify-center items-start flex-col gap-8">
                        <div className="w-full flex justify-start items-center">
                            <p>
                                ამ გვერდზე თავი მოვუყარეთ ჩვენს საიტთან
                                დაკავშირებულ ყველაზე ხშირად დასმულ შეკითხვებს და
                                მათ პასუხებს.
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-4">
                            {faqs.map((faq) => (
                                <div
                                    className="flex justify-center items-start flex-col gap-2"
                                    key={faq.id}
                                >
                                    <h4>{faq.question}</h4>
                                    <p className="border-l border-slate-700 px-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
