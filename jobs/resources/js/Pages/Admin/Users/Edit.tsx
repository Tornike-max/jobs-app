import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa";

const Edit = ({ user }: { user: User }) => {
    const { data, setData, processing, put, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        status: user.status || "",
    });

    const handleUpdate = (e: { preventDefault: () => void }, id: number) => {
        e.preventDefault();

        put(route("admin.users.update", id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ადმინ პანელი - Edit: {user.name}
                </h2>
            }
        >
            <Head title="ადმინ პანელი - Edit" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <form
                        encType="multipart/form-data"
                        onSubmit={(e) => handleUpdate(e, user.id)}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>კომპანიის სახელი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <InputError message={errors.name} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>კომპანიის ელ-ფოსტა</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <InputError message={errors.email} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>სტატუსი</InputLabel>
                            <select
                                value={data.status}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) =>
                                    setData(
                                        "status",
                                        e.target.value as
                                            | "user"
                                            | "editor"
                                            | "admin"
                                    )
                                }
                            >
                                <option value="user">მომხმარებელი</option>
                                <option value="editor">ედიტორი</option>
                                <option value="admin">ადმინი</option>
                            </select>

                            {errors.status && (
                                <InputError message={errors.status} />
                            )}
                        </div>

                        <div className="w-full flex justify-end items-center gap-2">
                            <Link
                                href={route("admin.users.index")}
                                className="flex items-center justify-center gap-1 py-2 px-3 rounded-md border-2 border-slate-200 hover:bg-slate-200"
                            >
                                <FaArrowLeft />
                                <span>უკან დაბრუნება</span>
                            </Link>
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-1 py-2 px-3 rounded-md border-2 text-slate-100 border-slate-200 bg-green-400 hover:bg-green-500"
                            >
                                {processing ? (
                                    "ნახლდება..."
                                ) : (
                                    <>
                                        <FaPen />
                                        <span>განახლება</span>
                                    </>
                                )}
                            </button>{" "}
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
