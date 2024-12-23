import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import NavLink from "@/Components/NavLink";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { City, PricingOption, Region } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";

const Edit = ({
    city,
    cities,
    regions,
}: {
    city: City;
    cities: City[];
    regions: Region[];
}) => {
    const { data, setData, errors, processing, put } = useForm({
        name: city?.name || "",
        region_id: city?.region?.id || "",
    });

    const onSubmit = () => {
        put(route("admin.regions-cities.update", city.id));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ადმინ პანელი - {city?.name} - {city?.region.region}
                </h2>
            }
        >
            <Head title={`ადმინ პანელი - ${city?.name}`} />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <form
                        onBlur={onSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="გეგმა" />
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            >
                                {cities.map((city) => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            {errors.name && (
                                <InputError message={errors.name} />
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel children="რეგიონი" />
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.region_id}
                                onChange={(e) =>
                                    setData("region_id", e.target.value)
                                }
                            >
                                {regions.map((region) => (
                                    <option key={region.id} value={region.id}>
                                        {region.region}
                                    </option>
                                ))}
                            </select>
                            {errors.region_id && (
                                <InputError message={errors.region_id} />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
