import { formatDate } from "@/helpers/helpers";
import { Company } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaArrowRight, FaPen, FaTrash } from "react-icons/fa";

const CompaniesTable = ({ companies }: { companies: any }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        destroy(route("admin.company.delete", id));
    };
    return (
        <div className="mt-8 bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    კომპანიების სია
                </h3>
                <table className="min-w-full mt-4 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                კომპანიის დასახელება
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ელ. ფოსტა
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                დამატების დრო
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                                მოქმედება
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {companies.data.map((company: Company) => (
                            <tr key={company.id}>
                                <td className="px-4 py-2 text-gray-800">
                                    {company.name}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {company.email}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {formatDate(company.created_at)}
                                </td>
                                <td className="px-4 py-2  flex items-center justify-center gap-2">
                                    <Link
                                        href={route(
                                            "admin.company.edit",
                                            company.id
                                        )}
                                        className="text-blue-600 hover:underline"
                                    >
                                        <FaPen />
                                    </Link>
                                    <button
                                        disabled={processing}
                                        onClick={() => handleDelete(company.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-4">
                    <div>
                        {companies.prev_page_url && (
                            <Link
                                href={companies.prev_page_url}
                                className=" py-2 px-3 rounded-lg border-2 bg-blue-500 hover:bg-blue-600 text-slate-100 flex items-center justify-center gap-1"
                            >
                                <FaArrowLeft />
                                <span>უკან</span>
                            </Link>
                        )}
                    </div>
                    <div>
                        {companies.next_page_url && (
                            <Link
                                href={companies.next_page_url}
                                className=" py-2 px-3 rounded-lg border-2 bg-blue-500 hover:bg-blue-600 text-slate-100 flex items-center justify-center gap-1"
                            >
                                <span>შემდეგი</span>
                                <FaArrowRight />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesTable;
