import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

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
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="w-full flex justify-center items-center"></div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                                #
                                            </th>
                                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                                Job Title
                                            </th>
                                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                                Category
                                            </th>
                                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                                Location
                                            </th>
                                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                                Salary
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-t">
                                                1
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Software Engineer
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                IT
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Tbilisi
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                5000₾
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-t">
                                                2
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Graphic Designer
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Design
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Batumi
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                2200₾
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-t">
                                                3
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Marketing Manager
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Marketing
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Kutaisi
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                3000₾
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
