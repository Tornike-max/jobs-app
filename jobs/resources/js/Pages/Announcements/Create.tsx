import ApplicationLogo from "@/Components/ApplicationLogo";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, PricingOption, PricingPlan } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Create = ({
    pricing,
    categories,
}: {
    pricing: PricingOption[];
    categories: Category[];
}) => {
    const { post, processing, data, setData, errors, reset } = useForm({
        identicalCode: "",
        fullname: "",
        phone: "",
        email: "",
        announcementName: "",
        salary: "",
        employement_type: "",
        category: "",
        vacancy_type: "",
        comment: "",
        description: "",
        product: "",
        file: null,
        logo: null,
    });
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (data.product) {
            setPrice(+data.product);
        }
        if (data.logo) {
            setPrice((price) => (price += 10));
        }
    }, [data.product, data.logo]);

    console.log(price);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(data);
        post(route("announcements.store"));
    };

    return (
        <div className="max-w-8xl w-full flex justify-center items-center py-12">
            <div className="mx-auto w-full sm:px-6 lg:px-8">
                <form
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto w-full flex flex-col justify-center items-center gap-4"
                >
                    <ApplicationLogo className="w-40" />
                    <div className="w-full flex justify-center items-center gap-4 flex-col bg-slate-100 rounded-md  px-4 py-4">
                        <h1 className="text-lg md:text-2xl text-slate-700 font-semibold py-4">
                            განცხადება განთავსდება ჩვენს ვებ საიტზე
                        </h1>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>პირადი ნომერი *</InputLabel>
                            <TextInput
                                placeholder="პირადი ნომერი"
                                className="w-full"
                                value={data.identicalCode}
                                onChange={(e) =>
                                    setData("identicalCode", e.target.value)
                                }
                                type="text"
                            />
                            {errors.identicalCode && (
                                <span className="text-red-500 text-sm">
                                    {errors.identicalCode}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>სახელი/გვარი *</InputLabel>
                            <TextInput
                                placeholder="სახელი/გვარი"
                                className="w-full"
                                value={data.fullname}
                                onChange={(e) =>
                                    setData("fullname", e.target.value)
                                }
                                type="text"
                            />
                            {errors.fullname && (
                                <span className="text-red-500 text-sm">
                                    {errors.fullname}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>ტელეფონი *</InputLabel>
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
                            <InputLabel>ელ-ფოსტა *</InputLabel>
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
                    </div>
                    <div className="w-full flex justify-center items-center gap-4 flex-col bg-slate-100 rounded-md  px-4 py-4">
                        <h1 className="text-lg md:text-2xl text-slate-700 font-semibold py-4">
                            განცხადების ტიპის დასახელება
                        </h1>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>განცხადების დასახელება *</InputLabel>
                            <TextInput
                                placeholder="განცხადების დასახელება"
                                className="w-full"
                                value={data.announcementName}
                                onChange={(e) =>
                                    setData("announcementName", e.target.value)
                                }
                                type="text"
                            />
                            {errors.announcementName && (
                                <span className="text-red-500 text-sm">
                                    {errors.announcementName}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>ხელფასი</InputLabel>
                            <TextInput
                                placeholder="ხელფასი"
                                className="w-full"
                                value={data.salary}
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                                type="text"
                            />
                            {errors.salary && (
                                <span className="text-red-500 text-sm">
                                    {errors.salary}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>სამსახურის ტიპი</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                value={data.employement_type}
                                onChange={(e) =>
                                    setData("employement_type", e.target.value)
                                }
                            >
                                <option value={"part"}>
                                    ნახევარი განაკვეთი/Part Time
                                </option>
                                <option value={"full"}>
                                    სრული განაკვეთი/Full Time
                                </option>
                            </select>
                            {errors.employement_type && (
                                <span className="text-red-500 text-sm">
                                    {errors.employement_type}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>კატეგორია</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                            >
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <span className="text-red-500 text-sm">
                                    {errors.category}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>ვაკანსიის ტიპი</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                value={data.vacancy_type}
                                onChange={(e) =>
                                    setData("vacancy_type", e.target.value)
                                }
                            >
                                <option value={"vacancy"}>ვაკანსია</option>
                                <option value={"stipend"}>სტიპენდიები</option>
                                <option value={"trainings"}>ტრენინგები</option>
                            </select>
                            {errors.vacancy_type && (
                                <span className="text-red-500 text-sm">
                                    {errors.vacancy_type}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>კომენტარი</InputLabel>
                            <textarea
                                placeholder="კომენტარი"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                            >
                                {data.comment}
                            </textarea>
                            {errors.comment && (
                                <span className="text-red-500 text-sm">
                                    {errors.comment}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>ვაკანსიის აღწერა</InputLabel>
                            <textarea
                                placeholder="ვაკანსიის აღწერა"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
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
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>განცხადების დასახელება *</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                value={data.product}
                                onChange={(e) =>
                                    setData("product", e.target.value)
                                }
                            >
                                <option value={""}>გაუქმება</option>
                                {pricing.map((price) => (
                                    <option
                                        key={price.id}
                                        value={price.price}
                                        className="w-full flex justify-between items-center"
                                    >
                                        {`${
                                            price.plan.is_vip === 0
                                                ? `${price.max_vacancies} ვაკანსია ერთ
                                        განცხადებაში - ${price.price} ლარი`
                                                : `ვიპ - ${price.max_vacancies} ვაკანსია ერთ
                                        განცხადებაში - ${price.price} ლარი`
                                        }`}
                                    </option>
                                ))}
                            </select>
                            {errors.product && (
                                <span className="text-red-500 text-sm">
                                    {errors.product}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>დოკუმენტის მიბმა </InputLabel>
                            <TextInput
                                placeholder="დოკუმენტის მიბმა"
                                className="w-full"
                                onChange={(e) =>
                                    setData("file", e.target.files[0])
                                }
                                type="file"
                            />
                            {errors.file && (
                                <span className="text-red-500 text-sm">
                                    {errors.file}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel>კომპანიის ლოგო</InputLabel>
                            <div className="w-full flex justify-between items-center">
                                <TextInput
                                    placeholder="კომპანიის ლოგო"
                                    className="w-full"
                                    onChange={(e) =>
                                        setData("logo", e.target.files[0])
                                    }
                                    type="file"
                                />
                                {data.logo && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            reset("logo");
                                            setPrice((price) => price - 10);
                                        }}
                                        className="text-red-500"
                                    >
                                        X
                                    </button>
                                )}
                            </div>
                            {errors.logo && (
                                <span className="text-red-500 text-sm">
                                    {errors.logo}
                                </span>
                            )}
                        </div>
                        <div className="w-full flex justify-end items-center border border-blue-500 rounded-lg px-3 py-2">
                            <p>ჯამი {price}₾</p>
                        </div>

                        <button className="w-full flex justify-center items-center py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 duration-100 transition-all text-slate-100 ">
                            გაგზავნა
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
