import { formatDate } from "@/helpers/helpers";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const JobsTable = ({ jobs }: { jobs: any }) => {
    const [favorite, setFavorite] = useState(false);
    console.log(jobs);
    const toggleFavorite = () => {
        setFavorite((fav) => !fav);
    };
    return (
        <>
            <div className="w-full flex justify-center items-center"></div>
            <div className="overflow-x-auto">
                <table className="min-w-full  rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="text-left px-6 py-3 text-gray-700 font-medium"></th>
                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                VIP განცხადებები
                            </th>
                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                მომწოდებელი
                            </th>
                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                გამოქვეყნდა
                            </th>
                            <th className="text-left px-6 py-3 text-gray-700 font-medium">
                                ბოლო ვადა
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.data.map(
                            (job: {
                                title: string;
                                company: {
                                    logo: string | undefined;
                                    name: string;
                                };
                                created_at: string;
                                end_date: string;
                            }) => (
                                <tr className="text-blue-500 hover:bg-gray-50">
                                    <td className="px-6 py-4 border-t hover:">
                                        <button onClick={toggleFavorite}>
                                            {favorite ? (
                                                <FaStar />
                                            ) : (
                                                <FaRegStar />
                                            )}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 border-t">
                                        <Link href="#">{job.title}</Link>
                                    </td>
                                    <td className="px-6 py-4 border-t">
                                        {job.company.logo ? (
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-14"
                                                    alt="title"
                                                    src={job.company.logo}
                                                />
                                                <Link href="#">
                                                    {job.company.name}
                                                </Link>
                                            </div>
                                        ) : (
                                            <Link href="#">
                                                {job.company.name}
                                            </Link>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 border-t">
                                        {formatDate(job.created_at)}
                                    </td>
                                    <td className="px-6 py-4 border-t">
                                        {formatDate(job.end_date)}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default JobsTable;
