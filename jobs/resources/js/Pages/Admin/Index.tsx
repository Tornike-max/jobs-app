import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import DashboardCard from "@/Components/DashboardCard";
import BarChart from "@/Components/BarChart";
import LineChart from "@/Components/LineChart";
import { Announcement } from "@/types";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Index = ({
    announcementsCount,
    latestAnnouncementsCount,
    activeUsers,
    transactionsCount,
    announcements,
    dateData,
}: {
    announcementsCount: number;
    latestAnnouncementsCount: number;
    activeUsers: number;
    transactionsCount: number;
    announcements: Announcement[];
    dateData: any;
}) => {
    const labelsData = announcements.map((announcement) => announcement.title);
    const priceData = announcements.map((announcement) =>
        announcement?.transaction?.amount
            ? +announcement?.transaction?.amount
            : 0
    );

    const barData = {
        labels: labelsData,
        datasets: [
            {
                label: "გადახდების ოდენობა ($)",
                data: priceData,
                backgroundColor: ["#4CAF50", "#2196F3", "#FF5722"],
            },
        ],
    };

    const lineData = {
        labels: Object.keys(dateData),
        datasets: [
            {
                label: "ახალი ვაკანსიები",
                data: Object.values(dateData),
                borderColor: "#42A5F5",
                backgroundColor: "rgba(66, 165, 245, 0.2)",
                pointBackgroundColor: "#42A5F5",
                fill: true,
            },
        ],
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ადმინ პანელი
                </h2>
            }
        >
            <Head title="ადმინ პანელი" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <DashboardCard
                            title="ჯამური ვაკანსიები"
                            value={String(announcementsCount)}
                            textColor="text-blue-600"
                        />
                        <DashboardCard
                            title="ახალი ვაკანსიები"
                            value={String(latestAnnouncementsCount)}
                            textColor="text-green-600"
                        />
                        <DashboardCard
                            title="აქტიური მომხმარებლები"
                            value={String(activeUsers)}
                            textColor="text-yellow-600"
                        />
                        <DashboardCard
                            title="გადახდების ოდენობა"
                            value={`$${String(transactionsCount)}`}
                            textColor="text-red-600"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <BarChart data={barData} />
                        <LineChart data={lineData} />
                    </div>

                    <div className="mt-8 bg-white shadow rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800">
                                უახლესი ვაკანსიები
                            </h3>
                            <table className="min-w-full mt-4 divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                            ვაკანსიის დასახელება
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                            კატეგორია
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                            დამატების დრო
                                        </th>
                                        <th className="px-4 py-2 text-right text-sm font-semibold text-gray-600">
                                            მოქმედება
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {announcements.map((announcement) => (
                                        <tr>
                                            <td className="px-4 py-2 text-gray-800">
                                                {announcement.title}
                                            </td>
                                            <td className="px-4 py-2 text-gray-600">
                                                {announcement.category.name}
                                            </td>
                                            <td className="px-4 py-2 text-gray-600">
                                                {announcement.created_at}
                                            </td>
                                            <td className="px-4 py-2 text-right">
                                                <button className="text-blue-600 hover:underline mr-2">
                                                    რედაქტირება
                                                </button>
                                                <button className="text-red-600 hover:underline">
                                                    წაშლა
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
