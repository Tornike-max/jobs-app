import JobsTable from "@/Components/JobsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Dashboard({ auth, anouncements }: PageProps) {
    console.log(anouncements);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    განცხადებები
                </h2>
            }
        >
            <Head title="განცხადებები" />

            <div className="py-12">
                <div className="mx-auto w-full ">
                    <div className="p-6 text-gray-900">
                        <JobsTable jobs={anouncements} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
