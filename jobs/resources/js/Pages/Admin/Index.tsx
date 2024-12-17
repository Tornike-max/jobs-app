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

const Index = () => {
    const barData = {
        labels: ["React დეველოპერი", "UI/UX დიზაინერი", "Laravel დეველოპერი"],
        datasets: [
            {
                label: "გადახდების ოდენობა ($)",
                data: [50, 30, 70],
                backgroundColor: ["#4CAF50", "#2196F3", "#FF5722"],
            },
        ],
    };

    const lineData = {
        labels: ["2024-05-28", "2024-05-30", "2024-06-01"],
        datasets: [
            {
                label: "ახალი ვაკანსიები",
                data: [5, 10, 24],
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
                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">
                                ჯამური ვაკანსიები
                            </h3>
                            <p className="mt-2 text-3xl font-bold text-blue-600">
                                320
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">
                                ახალი ვაკანსიები
                            </h3>
                            <p className="mt-2 text-3xl font-bold text-green-600">
                                24
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">
                                აქტიური მომხმარებლები
                            </h3>
                            <p className="mt-2 text-3xl font-bold text-yellow-600">
                                1,560
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">
                                გადახდების ოდენობა
                            </h3>
                            <p className="mt-2 text-3xl font-bold text-red-600">
                                $4,240
                            </p>
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h3 className="mb-4 text-lg font-semibold text-gray-800">
                                გადახდების სტატისტიკა
                            </h3>
                            <Bar data={barData} />
                        </div>
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h3 className="mb-4 text-lg font-semibold text-gray-800">
                                ახალი ვაკანსიების ზრდა
                            </h3>
                            <Line data={lineData} />
                        </div>
                    </div>

                    {/* Latest Vacancies */}
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
                                    <tr>
                                        <td className="px-4 py-2 text-gray-800">
                                            React დეველოპერი
                                        </td>
                                        <td className="px-4 py-2 text-gray-600">
                                            პროგრამირება
                                        </td>
                                        <td className="px-4 py-2 text-gray-600">
                                            5 წუთის წინ
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
