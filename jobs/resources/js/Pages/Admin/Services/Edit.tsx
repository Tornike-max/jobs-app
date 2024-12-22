import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import NavLink from "@/Components/NavLink";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PricingOption } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";

const Edit = ({ service }: { service: PricingOption }) => {
    const { data, setData, errors, processing, put } = useForm({
        name: service?.plan?.name || "",
        price: service?.price || "",
        max_vacancies: service.max_vacancies || "",
        description: service.plan.description || "",
        base_duration_days: service.plan.base_duration_days || "",
    });
    console.log(service);

    const onSubmit = () => {
        put(route("admin.services.update", service.id));
    };
    return (
        <AuthenticatedLayout
            header={
                <div className="w-full flex justify-center items-start flex-col gap-4">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        ადმინ პანელი - {service?.plan?.name}
                    </h2>
                    <div className="w-full flex justify-start items-center gap-4 h-10">
                        <NavLink
                            active={route().current("admin.index")}
                            href={route("admin.index")}
                        >
                            მთავარი
                        </NavLink>
                        <NavLink
                            active={route().current("admin.users.index")}
                            href={route("admin.users.index")}
                        >
                            მომხმარებლები
                        </NavLink>
                        <NavLink
                            active={route().current("admin.services.index")}
                            href={route("admin.services.index")}
                        >
                            სერვისები
                        </NavLink>
                    </div>
                </div>
            }
        >
            <Head title={`ადმინ პანელი - ${service?.plan?.name}`} />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <form
                        onSubmit={onSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="გეგმა" />
                            <TextInput
                                type="text"
                                className="w-full"
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
                            <InputLabel children="ფასი" />
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                            />
                            {errors.price && (
                                <InputError message={errors.price} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="მაქსიმალური რაოდენობა" />
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.max_vacancies}
                                onChange={(e) =>
                                    setData("max_vacancies", e.target.value)
                                }
                            />
                            {errors.max_vacancies && (
                                <InputError message={errors.max_vacancies} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="აქტიური პერიოდი" />
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.base_duration_days}
                                onChange={(e) =>
                                    setData(
                                        "base_duration_days",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.base_duration_days && (
                                <InputError
                                    message={errors.base_duration_days}
                                />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="მაქსიმალური რაოდენობა" />
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
                                href={route("admin.services.index")}
                                className="border-2 border-slate-200 py-2 px-3 rounded-md hover:bg-slate-200 duration-150 transition-all"
                            >
                                უკან დაბრუნება
                            </Link>
                            <button
                                type="submit"
                                className="border-2 border-slate-200 py-2 px-3 rounded-md hover:bg-slate-200 duration-150 transition-all"
                            >
                                {processing ? "დაელოდეთ" : "განახლება"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
