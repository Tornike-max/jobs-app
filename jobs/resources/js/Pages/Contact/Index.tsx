import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

const Index = ({ csrf }: { csrf: string }) => {
    const [agreed, setAgreed] = useState(false);

    const { post, processing, setData, data, errors } = useForm({
        name: "",
        last_name: "",
        email: "",
        company: "",
        message: "",
        phone: "",
    });

    const handleSendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(
            route("contact.send", {
                _token: csrf,
            })
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    კონტაქტი
                </h2>
            }
        >
            <Head title="კონტაქტი" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                დაგვიკავშირდით
                            </h2>
                            <p className="mt-2 text-lg/8 text-gray-600">
                                ნებისმიერი კითხვის არსებობის შემთხვევაში, გთხოვთ
                                მოგვწეროთ.
                            </p>
                        </div>
                        <form
                            method="POST"
                            onSubmit={(e) => handleSendEmail(e)}
                            className="mx-auto mt-8 max-w-2xl sm:mt-20"
                        >
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        სახელი
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            value={data.name}
                                            autoComplete="given-name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        გვარი
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData(
                                                    "last_name",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        ორგანიზაცია
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="company"
                                            name="company"
                                            value={data.company}
                                            onChange={(e) =>
                                                setData(
                                                    "company",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            autoComplete="organization"
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        ელ-ფოსტა
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            type="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone-number"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        ტელეფონის ნომერი
                                    </label>
                                    <div className="mt-2.5">
                                        <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                            <input
                                                id="phone-number"
                                                name="phone-number"
                                                value={data.phone}
                                                type="text"
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="123-456-7890"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm/6 font-semibold text-gray-900"
                                    >
                                        წერილი
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            rows={4}
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        >
                                            {data.message}
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {processing
                                        ? "დაელოდეთ..."
                                        : "დაგვიკავშირდით"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
