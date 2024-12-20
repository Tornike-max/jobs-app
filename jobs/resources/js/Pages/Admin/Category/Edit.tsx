import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa";

const Edit = ({ auth, announcement }: PageProps) => {
    const { data, setData, processing, put, errors } = useForm({
        name: announcement.title || "",
        description: announcement.description || "",
    });

    const handleUpdate = (id: number) => {
        put(route("admin.announcement.update", id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ადმინ პანელი - Edit: {announcement.title}
                </h2>
            }
        >
            <Head title="ადმინ პანელი - Edit" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <form
                        onSubmit={() => handleUpdate(announcement.id)}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>დასახელება</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <InputError message={errors.title} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>ხელფასი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.salary}
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                            />
                            {errors.salary && (
                                <InputError message={errors.salary} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>დასაქმების ტიპი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.employment_type}
                                onChange={(e) =>
                                    setData("employment_type", e.target.value)
                                }
                            />
                            {errors.employment_type && (
                                <InputError message={errors.employment_type} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>ვაკანსიის ტიპი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.vacancy_type}
                                onChange={(e) =>
                                    setData("vacancy_type", e.target.value)
                                }
                            />
                            {errors.vacancy_type && (
                                <InputError message={errors.vacancy_type} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>დასრულების დრო</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.end_date}
                                onChange={(e) =>
                                    setData("end_date", e.target.value)
                                }
                            />
                            {errors.end_date && (
                                <InputError message={errors.end_date} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>ვაკანსიის აღწერა</InputLabel>
                            <textarea
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            >
                                {data.description}
                            </textarea>
                            {errors.description && (
                                <InputError message={errors.description} />
                            )}
                        </div>
                        <div className="w-full flex justify-end items-center gap-2">
                            <Link
                                href={route("admin.index")}
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
