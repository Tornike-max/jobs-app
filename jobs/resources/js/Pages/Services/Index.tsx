import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, pricing }: PageProps) => {
    console.log(pricing);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ტარიფები
                </h2>
            }
        >
            <Head title="ტარიფები" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full flex justify-center items-start flex-col gap-8">
                        {pricing?.map((option) => (
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <div className="w-full flex flex-col justify-center items-start gap-1">
                                    <h4 className="underline">{option.name}</h4>
                                    {option.options.map((item) => (
                                        <p>
                                            {item.max_vacancies} ვაკანსია ერთ
                                            განცხადებაში: {item.price} ლარი
                                        </p>
                                    ))}
                                    <div className="w-full flex justify-center items-start flex-col my-4">
                                        <p>{option.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
