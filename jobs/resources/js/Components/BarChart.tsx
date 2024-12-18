import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }: { data: any }) => {
    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
                გადახდების სტატისტიკა
            </h3>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
