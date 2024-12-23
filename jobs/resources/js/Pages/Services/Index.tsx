import NavLink from "@/Components/NavLink";
import PricingComponent from "@/Components/PricingComponent";
import Publish from "@/Components/Publish";
import WhyUs from "@/Components/WhyUs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, pricing, forWhat }: PageProps) => {
    console.log(pricing);
    return (
        <AuthenticatedLayout
            header={
                <div className="w-full flex justify-start items-center gap-2">
                    <div className="flex h-16 justify-between gap-8">
                        <NavLink
                            href={route("services.index")}
                            active={route().current("services.index")}
                        >
                            ტარიფები
                        </NavLink>
                        <NavLink
                            href={route("services.publish")}
                            active={route().current("services.publish")}
                        >
                            გამოაქვეყნე
                        </NavLink>
                        <NavLink
                            href={route("services.whyUs")}
                            active={route().current("services.whyUs")}
                        >
                            რატომ ჩვენ?
                        </NavLink>
                    </div>
                </div>
            }
        >
            <Head title="ტარიფები" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <div className="w-full flex justify-center items-start flex-col gap-8">
                        {forWhat === "pricing" && (
                            <PricingComponent pricing={pricing} />
                        )}
                        {forWhat === "publish" && <Publish user={auth.user} />}
                        {forWhat === "us" && <WhyUs />}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
