import { Link } from "@inertiajs/react";
import React from "react";

const Success = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-green-50">
            <div className="text-center flex justify-center items-center flex-col gap-2">
                <h1 className="text-4xl font-bold text-green-600">
                    გილოცავთ🚀!
                </h1>
                <p className="text-lg text-green-500 mt-4">
                    ტრანზაქცია წარმატებით განხორციელდა.
                </p>
                <Link
                    href={route("dashboard")}
                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                >
                    ნახე შენი ვაკანსია ჩამონათვალში
                </Link>
            </div>
        </div>
    );
};

export default Success;
