import { formatDate, showImage } from "@/helpers/helpers";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaRegStar, FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const JobsTable = ({ jobs, user }: { jobs: any; user: User }) => {
    const [favorite, setFavorite] = useState(false);
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
                        {jobs?.data
                            ? jobs?.data?.map(
                                  (job: {
                                      id: number;
                                      title: string;
                                      company: {
                                          logo: string | undefined;
                                          name: string;
                                          id: number;
                                      };
                                      author: {
                                          id: number;
                                          name: string;
                                      };
                                      created_at: string;
                                      end_date: string;
                                  }) => (
                                      <tr
                                          key={job.id}
                                          className="text-blue-500 hover:bg-gray-50"
                                      >
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
                                              <Link
                                                  className="flex items-center gap-2"
                                                  href={route(
                                                      "announcements.show",
                                                      job.id
                                                  )}
                                              >
                                                  {job.author.id ===
                                                      user.id && <FaUser />}
                                                  {job.title}
                                              </Link>
                                          </td>
                                          <td className="px-6 py-4 border-t">
                                              {job.company.logo ? (
                                                  <div className="flex items-center gap-2">
                                                      <img
                                                          className="w-14"
                                                          alt="title"
                                                          src={showImage(
                                                              job.company.logo
                                                          )}
                                                      />
                                                      <Link
                                                          href={route(
                                                              "currentCompany.show",
                                                              job.company.id
                                                          )}
                                                      >
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
                              )
                            : jobs?.map(
                                  (job: {
                                      company_id: number;
                                      id: number;
                                      title: string;
                                      company: {
                                          logo: string | undefined;
                                          name: string;
                                      };
                                      author: {
                                          id: number;
                                          name: string;
                                      };
                                      created_at: string;
                                      end_date: string;
                                  }) => (
                                      <tr
                                          key={job.id}
                                          className="text-blue-500 hover:bg-gray-50"
                                      >
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
                                              <Link
                                                  href={route(
                                                      "announcements.show",
                                                      job.id
                                                  )}
                                              >
                                                  {job.title}
                                              </Link>
                                          </td>
                                          <td className="px-6 py-4 border-t">
                                              <Link
                                                  href={route(
                                                      "currentCompany.show",
                                                      job.company_id
                                                  )}
                                              >
                                                  {job.title}
                                              </Link>
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
