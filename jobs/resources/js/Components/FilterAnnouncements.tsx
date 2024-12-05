import { Region } from "@/types";

const FilterAnnouncements = ({ regions }: { regions: Region[] }) => {
    // console.log(regions);
    return (
        <div className="w-full flex justify-end items-center">
            <div className="max-w-4xl py-4 w-full flex justify-start items-center gap-4">
                <select className="rounded-md">
                    <option value="all-vacancies">ყველა ვაკანსია</option>
                    <option value="vacancies">ვაკანსიები</option>
                    <option value="scholarships">სტიპენდიები</option>
                    <option value="other">სხვა</option>
                    <option value="tenders">ტენდერები</option>
                    <option value="trainings">ტრენინგები</option>
                </select>
                <select className="rounded-md">
                    {regions?.map((region: Region) => (
                        <option key={region.id} value={region.region}>
                            {region.region}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterAnnouncements;
