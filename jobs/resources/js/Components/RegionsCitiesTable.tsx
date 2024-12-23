import { City, PricingOption, User } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaArrowLeft, FaArrowRight, FaPen, FaTrash } from "react-icons/fa";

const RegionsCitiesTable = ({ cities }: { cities: any }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        // destroy(route("admin.users.delete", id));
    };
    return (
        <div className="mt-8 bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    რეგიონები და ქალაქები
                </h3>
                <table className="min-w-full mt-4 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ID
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ქალაქი
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                რეგიონი
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                                მოქმედებები
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y space-y-2 divide-gray-200">
                        {cities?.data?.map((city: City) => (
                            <tr key={city.id}>
                                <td className="px-4 py-2 text-gray-800">
                                    {city.id}
                                </td>
                                <td className="px-4 py-2 text-gray-600 text-nowrap">
                                    {city.name}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {city.region.region}
                                </td>

                                <td className="px-4 py-2 ">
                                    <div className="flex items-center justify-center gap-1">
                                        <Link
                                            href={""}
                                            className="text-blue-600 hover:underline mr-2"
                                        >
                                            <FaPen />
                                        </Link>
                                        <form
                                            onSubmit={(e) =>
                                                handleDelete(e, city.id)
                                            }
                                        >
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="text-red-600 hover:underline"
                                            >
                                                <FaTrash />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        {cities.prev_page_url && (
                            <Link
                                href={cities.prev_page_url}
                                className=" py-2 px-3 rounded-lg border-2 bg-blue-500 hover:bg-blue-600 text-slate-100 flex items-center justify-center gap-1"
                            >
                                <FaArrowLeft />
                                <span>უკან</span>
                            </Link>
                        )}
                    </div>
                    <div>
                        {cities.next_page_url && (
                            <Link
                                href={cities.next_page_url}
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

export default RegionsCitiesTable;
