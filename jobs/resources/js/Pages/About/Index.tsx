import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Index = ({ auth, abouts }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ჩვენ შესახებ
                </h2>
            }
        >
            <Head title="ჩვენ შესახებ" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <div className="w-full flex justify-center items-start flex-col gap-8">
                        {abouts.map((about) => (
                            <>
                                <p>{about.headerText}</p>
                                <p>{about.middleText}</p>
                                <p>{about.footerText}</p>
                            </>
                        ))}
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            {abouts.map((founder) => (
                                <div className="w-full flex justify-center items-start flex-col">
                                    <p>დამფუძნებელი: {founder.founder}</p>
                                    <p>
                                        თანა დამფუძნებელი: {founder.co_founder}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
