import { Link } from "@inertiajs/react";
import React from "react";

const Cancel = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-red-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600">შეცდომა😥</h1>
                <p className="text-lg text-red-500 mt-4">
                    როგორც ჩანს, თქვენი ტრანზაქცია წარუმატებელი გამოდგა.
                </p>
                <Link
                    href={route("announcements.create")}
                    className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                >
                    თავიდან სცადეთ
                </Link>
            </div>
        </div>
    );
};

export default Cancel;
