import FilterAnnouncements from "@/Components/FilterAnnouncements";
import JobsTable from "@/Components/JobsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    announcements,
    regions,
    categories,
    filters,
}: PageProps) {
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
                        <FilterAnnouncements
                            regions={regions}
                            categories={categories}
                            filters={filters}
                        />
                        <JobsTable jobs={announcements} user={auth.user} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
