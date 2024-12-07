import { Category, FilterTypes, Region } from "@/types";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const FilterAnnouncements = ({
    regions,
    categories,
    filters,
}: {
    regions: Region[];
    categories: Category[];
    filters: FilterTypes;
}) => {
    const { data, setData, processing, get } = useForm({
        search: filters?.search || "",
        type: filters?.type || "",
        region: filters?.region || "",
        category: filters?.category || "",
    });

    const handleFilterChange = (
        field: "search" | "type" | "region" | "category",
        value: string
    ) => {
        setData(field, value);
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        get(route("dashboard", data));
    };

    return (
        <div className="w-full px-4">
            <div className="w-full py-4 flex justify-end items-center gap-4">
                <select
                    value={data.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-500"
                >
                    <option value="">ყველა ვაკანსია</option>
                    <option value="vacancy">ვაკანსიები</option>
                    <option value="scholarships">სტიპენდიები</option>
                    <option value="other">სხვა</option>
                    <option value="tenders">ტენდერები</option>
                    <option value="trainings">ტრენინგები</option>
                </select>
                <select
                    value={data.region}
                    onChange={(e) =>
                        handleFilterChange("region", e.target.value)
                    }
                    className="rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-500"
                >
                    <option value="">ყველა რეგიონი</option>
                    {regions.map((region) => (
                        <option key={region.id} value={region.region}>
                            {region.region}
                        </option>
                    ))}
                </select>
                <select
                    value={data.category}
                    onChange={(e) =>
                        handleFilterChange("category", e.target.value)
                    }
                    className="rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-500"
                >
                    <option value="">ყველა კატეგორია</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex items-center gap-2"
                >
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
                        disabled={processing}
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FilterAnnouncements;
