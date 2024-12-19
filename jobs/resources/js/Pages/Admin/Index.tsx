import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
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
import { Announcement, Company } from "@/types";

import AnnouncementsTable from "@/Components/AnnouncementsTable";
import CompaniesTable from "@/Components/CompaniesTable";

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
    companies,
}: {
    announcementsCount: number;
    latestAnnouncementsCount: number;
    activeUsers: number;
    transactionsCount: number;
    announcements: Announcement[];
    dateData: any;
    companies: any;
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

                    <AnnouncementsTable announcements={announcements} />
                    <CompaniesTable companies={companies} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
