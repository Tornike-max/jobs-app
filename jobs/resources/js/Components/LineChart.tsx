import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }: { data: any }) => {
    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
                ახალი ვაკანსიების ზრდა
            </h3>
            <Line data={data} />
        </div>
    );
};

export default LineChart;
