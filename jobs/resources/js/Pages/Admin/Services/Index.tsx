import NavLink from "@/Components/NavLink";
import ServicesTable from "@/Components/ServicesTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Index = ({ auth, services }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="w-full flex justify-center items-start flex-col gap-4">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        ადმინ პანელი
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
                        <NavLink
                            active={route().current(
                                "admin.regions-cities.index"
                            )}
                            href={route("admin.regions-cities.index")}
                        >
                            რეგიონები და ქალაქები
                        </NavLink>
                    </div>
                </div>
            }
        >
            <Head title="ადმინ პანელი" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <ServicesTable services={services} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
