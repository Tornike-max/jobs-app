import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, post, processing, setData, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        website: "",
        location: "",
        description: "",
        logo: "",
    });

    function handleSubmit() {
        post(route("company.store"));
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    შექმენი კომპანია
                </h2>
            }
        >
            <Head title="შექმენი კომპანია" />

            <div className="py-12">
                <div className="mx-auto w-full ">
                    <div className="p-6 text-gray-900">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="w-full flex justify-center items-center gap-4 flex-col bg-slate-100 rounded-md  px-4 py-4"
                        >
                            <h1 className="text-lg md:text-2xl text-slate-700 font-semibold py-4">
                                დაარეგისტრირე კომპანია
                            </h1>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>კომპანიის სახელი *</InputLabel>
                                <TextInput
                                    placeholder="კომპანიის სახელი"
                                    className="w-full"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>კომპანიის ელ-ფოსტა *</InputLabel>
                                <TextInput
                                    placeholder="ელ-ფოსტა"
                                    className="w-full"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type="text"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>კომპანიის ტელეფონი *</InputLabel>
                                <TextInput
                                    placeholder="ტელეფონი"
                                    className="w-full"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    type="text"
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-sm">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>ვებსაიტი *</InputLabel>
                                <TextInput
                                    placeholder="ვებსაიტი"
                                    className="w-full"
                                    value={data.website}
                                    onChange={(e) =>
                                        setData("website", e.target.value)
                                    }
                                    type="url"
                                />
                                {errors.website && (
                                    <span className="text-red-500 text-sm">
                                        {errors.website}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>ლოკაცია *</InputLabel>
                                <TextInput
                                    placeholder="ლოკაცია"
                                    className="w-full"
                                    value={data.location}
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                    type="text"
                                />
                                {errors.location && (
                                    <span className="text-red-500 text-sm">
                                        {errors.location}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>ლოგო *</InputLabel>
                                <TextInput
                                    placeholder="ლოგო"
                                    className="w-full"
                                    value={data.logo}
                                    onChange={(e) =>
                                        setData("logo", e.target.files[0])
                                    }
                                    type="file"
                                />
                                {errors.logo && (
                                    <span className="text-red-500 text-sm">
                                        {errors.logo}
                                    </span>
                                )}
                            </div>
                            <div className="w-full flex justify-center items-start flex-col gap-1">
                                <InputLabel>აღწერა *</InputLabel>
                                <textarea
                                    placeholder="აღწერა"
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                >
                                    {data.description}
                                </textarea>
                                {errors.description && (
                                    <span className="text-red-500 text-sm">
                                        {errors.description}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-3 flex justify-center items-center rounded-md bg-blue-500 text-slate-100 hover:bg-blue-600 transition-all duration-150"
                            >
                                {processing ? "დაელოდეთ..." : "შექმნა"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
