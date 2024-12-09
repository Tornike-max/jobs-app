import JobsTable from "@/Components/JobsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa";

const Index = ({ auth, company }: PageProps) => {
    console.log(company);
    return (
        <AuthenticatedLayout
            header={
                <div className="w-full flex justify-center items-start flex-col gap-2">
                    <Link
                        href={route("dashboard")}
                        className="text-blue-500 flex items-center gap-1"
                    >
                        <FaArrowLeft />
                        <span>ყველა ვაკანსია</span>
                    </Link>
                    <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                        {company.name}
                    </h2>
                    <img
                        className="max-w-48 w-full rounded-md"
                        src={company.logo}
                    />
                </div>
            }
        >
            <Head title="ორგანიზაცია" />

            <div className="py-12">
                <div className="mx-auto w-full ">
                    <div className="p-6 text-gray-900">
                        <JobsTable jobs={company.announcements} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
