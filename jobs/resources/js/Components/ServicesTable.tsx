import { PricingOption, User } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaArrowLeft, FaArrowRight, FaPen, FaTrash } from "react-icons/fa";

const ServicesTable = ({ services }: { services: PricingOption[] }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        // destroy(route("admin.users.delete", id));
    };
    return (
        <div className="mt-8 bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    მომხმარებლები
                </h3>
                <table className="min-w-full mt-4 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ID
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                გეგმა
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ფასი
                            </th>

                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ვაკანსიების რაოდენობა
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ვიპ
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                                მოქმედებები
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y space-y-2 divide-gray-200">
                        {services.map((service: PricingOption) => (
                            <tr key={service.id}>
                                <td className="px-4 py-2 text-gray-800">
                                    {service.id}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {service.plan.name}
                                </td>
                                <td className="px-4 py-2 text-gray-600 text-nowrap">
                                    {service.price} ₾
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {service.max_vacancies} - ვაკანსია
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {service.plan.is_vip === 1 ? "კი" : "არა"}
                                </td>

                                <td className="px-4 py-2 ">
                                    <div className="flex items-center justify-center gap-1">
                                        <Link
                                            href={route(
                                                "admin.services.edit",
                                                service.id
                                            )}
                                            className="text-blue-600 hover:underline mr-2"
                                        >
                                            <FaPen />
                                        </Link>
                                        <form
                                            onSubmit={(e) =>
                                                handleDelete(e, service.id)
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
            </div>
        </div>
    );
};

export default ServicesTable;
