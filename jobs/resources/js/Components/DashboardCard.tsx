import React from "react";

const DashboardCard = ({
    title,
    value,
    textColor,
}: {
    title: string;
    value: string;
    textColor: string;
}) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className={`mt-2 text-3xl font-bold ${textColor}`}>{value}</p>
        </div>
    );
};

export default DashboardCard;
