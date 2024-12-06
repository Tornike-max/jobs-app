import { Category, Region } from "@/types";
import { useForm } from "@inertiajs/react";
import { FaSearch } from "react-icons/fa";

const FilterAnnouncements = ({
    regions,
    categories,
}: {
    regions: Region[];
    categories: Category[];
}) => {
    const { data, setData, processing, get } = useForm({
        search: "",
        type: "",
        category: "",
        region: "",
    });
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        get(route("dashboard"));
    };
    return (
        <div className="w-full  px-4">
            <div className="w-full py-4 flex justify-end items-center gap-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2"
                >
                    <select
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                        className="rounded-md"
                    >
                        <option value="all-vacancies">ყველა ვაკანსია</option>
                        <option value="vacancies">ვაკანსიები</option>
                        <option value="scholarships">სტიპენდიები</option>
                        <option value="other">სხვა</option>
                        <option value="tenders">ტენდერები</option>
                        <option value="trainings">ტრენინგები</option>
                    </select>
                    <select
                        value={data.region}
                        onChange={(e) => setData("region", e.target.value)}
                        className="rounded-md"
                    >
                        {regions?.map((region: Region) => (
                            <option key={region.id} value={region.region}>
                                {region.region}
                            </option>
                        ))}
                    </select>

                    <select
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                        className="rounded-md"
                    >
                        {categories?.map((category: Category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <input
                        className="rounded-md"
                        type="search"
                        placeholder="ძიება"
                        value={data.search}
                        onChange={(e) => setData("search", e.target.value)}
                    />
                    <button
                        type="submit"
                        className="border rounded-md hover:scale-105 duration-150 transition-all hover:text-blue-500"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FilterAnnouncements;
