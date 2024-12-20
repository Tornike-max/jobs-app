import { User } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaArrowLeft, FaArrowRight, FaPen, FaTrash } from "react-icons/fa";

const UsersTable = ({ users }: { users: any }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e: FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        destroy(route("admin.users.delete", id));
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
                                მომხმარებელი
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                ელ-ფოსტა
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                სტატუსი
                            </th>

                            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                                მოქმედება
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y space-y-2 divide-gray-200">
                        {users.data.map((user: User) => (
                            <tr key={user.id}>
                                <td className="px-4 py-2 text-gray-800">
                                    {user.name}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {user.email}
                                </td>
                                <td className="px-4 py-2 text-gray-600">
                                    {user.status}
                                </td>

                                <td className="px-4 py-2 text-right flex items-center justify-center gap-1">
                                    <Link
                                        href={route(
                                            "admin.users.edit",
                                            user.id
                                        )}
                                        className="text-blue-600 hover:underline mr-2"
                                    >
                                        <FaPen />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleDelete(e, user.id)
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
                <div className="flex justify-between items-center mt-4">
                    <div>
                        {users.prev_page_url && (
                            <Link
                                href={users.prev_page_url}
                                className=" py-2 px-3 rounded-lg border-2 bg-blue-500 hover:bg-blue-600 text-slate-100 flex items-center justify-center gap-1"
                            >
                                <FaArrowLeft />
                                <span>უკან</span>
                            </Link>
                        )}
                    </div>
                    <div>
                        {users.next_page_url && (
                            <Link
                                href={users.next_page_url}
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

export default UsersTable;
