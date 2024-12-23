import { formatDate } from "@/helpers/helpers";
import { Category } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FocusEvent, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import TextInput from "./TextInput";
import { MdOutlineCancel } from "react-icons/md";

const CategoriesTable = ({ categories }: { categories: Category[] }) => {
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
        null
    );
    const {
        delete: destroy,
        put,
        setData,
        processing,
    } = useForm({
        name: "",
    });

    const handleDelete = (id: number) => {
        destroy(route("admin.company.delete", id));
    };

    const handleUpdateCategory = (
        e: FocusEvent<HTMLFormElement, Element>,
        id: number
    ) => {
        e.preventDefault();
        put(route("admin.category.update", id));
        setEditingCategoryId(null);
    };

    return (
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    კატეგორიების სია
                </h3>
                <table className="min-w-full mt-4 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ID
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                კატეგორია
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
                        {categories.map((category: Category) => (
                            <tr key={category.id}>
                                <td className="px-4 py-2 text-gray-800">
                                    {category.id}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {editingCategoryId === category.id ? (
                                        <form
                                            onBlur={(e) =>
                                                handleUpdateCategory(
                                                    e,
                                                    category.id
                                                )
                                            }
                                            className="w-full"
                                        >
                                            <TextInput
                                                defaultValue={category.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </form>
                                    ) : (
                                        <span
                                            className="cursor-pointer hover:underline"
                                            onClick={() =>
                                                setEditingCategoryId(
                                                    category.id
                                                )
                                            }
                                        >
                                            {category.name}
                                        </span>
                                    )}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {formatDate(category.created_at)}
                                </td>
                                <td className="px-4 py-2 flex items-center justify-center gap-2">
                                    {editingCategoryId === category.id ? (
                                        <button
                                            onClick={() =>
                                                setEditingCategoryId(null)
                                            }
                                            className="text-red-600 hover:text-red-800 transition text-lg"
                                        >
                                            <MdOutlineCancel />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                setEditingCategoryId(
                                                    category.id
                                                )
                                            }
                                            className="text-blue-600 hover:text-blue-800 transition"
                                        >
                                            <FaPen />
                                        </button>
                                    )}

                                    <button
                                        disabled={processing}
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }
                                        className="text-red-600 hover:text-red-800 transition"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesTable;
