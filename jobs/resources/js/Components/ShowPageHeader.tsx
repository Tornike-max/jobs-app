import { Announcement } from "@/types";
import { Link } from "@inertiajs/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { SiServerfault } from "react-icons/si";

const ShowPageHeader = ({ announcement }: { announcement: Announcement }) => {
    const handlePrint = () => {
        window.print();
    };
    return (
        <div className="w-full flex justify-start items-center gap-2 md:gap-4 text-sm">
            <Link
                href={route("dashboard")}
                className="text-blue-500 flex items-center gap-1"
            >
                <FaArrowLeft />
                <span>ყველა ვაკანსია</span>
            </Link>
            <Link
                href={route("currentCompany.show", announcement.company_id)}
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
    );
};

export default ShowPageHeader;
