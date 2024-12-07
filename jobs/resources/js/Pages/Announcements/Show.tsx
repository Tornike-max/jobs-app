import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import { SiServerfault } from "react-icons/si";
import { IoMdPrint } from "react-icons/io";

const Show = ({ auth, announcement }: PageProps) => {
    const [isStarred, setIsStarred] = useState(false);
    const toggleFavorite = () => {
        setIsStarred((starred) => !starred);
    };
    const handlePrint = () => {
        window.print();
    };
    console.log(announcement);
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
                    <div className="w-full flex justify-start items-center gap-2 md:gap-4 text-sm">
                        <Link
                            href={route("dashboard")}
                            className="text-blue-500 flex items-center gap-1"
                        >
                            <FaArrowLeft />
                            <span>ყველა ვაკანსია</span>
                        </Link>
                        <Link
                            href={route(
                                "currentCompany.show",
                                announcement.company_id
                            )}
                            className="text-blue-500 flex items-center gap-1"
                        >
                            <SiServerfault />
                            <span>ამ ორგანიზაციის ყველა ვაკანსია</span>
                        </Link>
                        <button
                            onClick={handlePrint}
                            className="text-blue-500 flex items-center gap-1"
                        >
                            <IoMdPrint />
                            <span>ამოსაბეჭდი ვერსია</span>
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="განცხადებები" />

            <div className="py-12">
                <div className="mx-auto w-full ">
                    <div className="p-6 text-gray-900"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
