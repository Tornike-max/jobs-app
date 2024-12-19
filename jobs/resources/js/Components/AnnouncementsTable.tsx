import { formatDate } from "@/helpers/helpers";
import { Announcement } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const AnnouncementsTable = ({
    announcements,
}: {
    announcements: Announcement[];
}) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        destroy(route("admin.announcement.delete", id));
    };
    return (
        <div className="mt-8 bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    უახლესი ვაკანსიები
                </h3>
                <table className="min-w-full mt-4 divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ვაკანსიის დასახელება
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                კატეგორია
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                დამატების დრო
                            </th>
                            <th className="px-4 py-2 text-right text-sm font-semibold text-gray-600">
                                მოქმედება
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y space-y-2 divide-gray-200">
                        {announcements.map((announcement) => (
                            <tr>
                                <td className="px-4 py-2 text-gray-800">
                                    {announcement.title}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {announcement.category.name}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {formatDate(announcement.created_at)}
                                </td>
                                <td className="px-4 py-2 text-right flex items-center justify-center gap-1">
                                    <Link
                                        href={route(
                                            "admin.announcement.edit",
                                            announcement.id
                                        )}
                                        className="text-blue-600 hover:underline mr-2"
                                    >
                                        <FaPen />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleDelete(e, announcement.id)
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnnouncementsTable;
