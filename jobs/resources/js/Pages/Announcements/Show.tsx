import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import { SiServerfault } from "react-icons/si";
import { IoMdPrint } from "react-icons/io";
import { formatDate } from "@/helpers/helpers";
import ShowPageHeader from "@/Components/ShowPageHeader";

const Show = ({ auth, announcement }: PageProps) => {
    const [isStarred, setIsStarred] = useState(false);
    const toggleFavorite = () => {
        setIsStarred((starred) => !starred);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="w-full flex justify-center items-start flex-col gap-4">
                    <div className="w-full flex justify-start items-center gap-2">
                        <h2 className="text-xl font-semibold leading-tight text-gray-800">
                            {announcement.title}
                        </h2>
                        <button onClick={toggleFavorite}>
                            {isStarred ? (
                                <FaStar className="text-yellow-600" />
                            ) : (
                                <FaRegStar className="text-stone-500" />
                            )}
                        </button>
                    </div>
                    <ShowPageHeader announcement={announcement} />
                </div>
            }
        >
            <Head title="განცხადებები" />

            <div className="py-12">
                <div className="mx-auto w-full ">
                    <div className="p-6 text-gray-900">
                        <div className="bg-gray-200 flex flex-col justify-center items-start">
                            <div className="w-full text-sm py-2 px-2 border-b border-gray-300">
                                <p>
                                    დასახელება:{" "}
                                    <span className="font-bold">
                                        {announcement.title}
                                    </span>
                                </p>
                            </div>
                            <div className="w-full text-sm py-2 px-2 border-b border-gray-300">
                                <p>
                                    მომწოდებელი:{" "}
                                    <span className="font-bold text-blue-500">
                                        {announcement.company.name}
                                    </span>
                                </p>
                            </div>
                            <div className="w-full text-sm py-2 px-2 border-b border-gray-300">
                                <p className="flex items-center gap-1">
                                    <span>გამოქვეყნდა:</span>
                                    <span className="font-bold">
                                        {formatDate(announcement.created_at)}
                                    </span>
                                    <span>/</span>
                                    <span>ბოლო ვადა:</span>
                                    <span className="font-bold">
                                        {formatDate(announcement.end_date)}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-start flex-col py-8 gap-2">
                            <p className="font-semibold">ჩვენ შესახებ</p>
                            <span>{announcement.company.description}</span>
                            <p className="font-semibold">
                                სამუშაოს აღწერილობა:
                            </p>
                            <span>{announcement.description}</span>
                            {announcement.salary && (
                                <p>ხელფასი: {announcement.salary}</p>
                            )}
                            {announcement.employment_type && (
                                <p>ხელფასი: {announcement.employment_type}</p>
                            )}

                            <p className="font-semibold">
                                ელ-ფოსტა: {announcement.company.email}
                            </p>
                            <p>
                                დაინტერესების შემთხვევაში დაგვიკავშირდით შემდეგ
                                ელექტრონულ მისამართზე:{" "}
                                <span className="font-semibold text-blue-500">
                                    {announcement.company.email}
                                </span>{" "}
                                და სათაურის ველში მიუთითოთ{" "}
                                <span className="font-semibold text-blue-500">
                                    "{announcement.title}"
                                </span>{" "}
                                , ან დაგვიკავშირდით ნომერზე{" "}
                                <span>{announcement.company.phone}</span>
                            </p>
                        </div>

                        <ShowPageHeader announcement={announcement} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
