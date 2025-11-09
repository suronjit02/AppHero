import { useRouteLoaderData, useNavigate, } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const AllApps = () => {

    const [searching, setSearching] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const apps = useRouteLoaderData("apps");

    const filteredApps = apps.filter((app) =>
        app.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="bg-base-200 min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-20">

            <h3 className="text-3xl font-bold text-center pb-3">
                Our All Applications
            </h3>

            <p className="text-md font-semibold text-center mb-8">
                Explore All Apps on the Market developed by us. We code for Millions.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-8 gap-4 ">
                <p className="text-lg font-medium">
                    (<span className="text-primary font-bold">{filteredApps.length}</span>)
                    Apps Found
                </p>

                <input
                    type="text"
                    placeholder="Search apps by name..."
                    className="input input-bordered w-full md:w-80 focus:border-accent focus:outline-none"
                    value={search}

                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSearching(true);

                        setTimeout(() => {
                            setSearching(false);
                        }, 400);
                    }}

                />
            </div>

            {searching ? (
                <p className="font-semibold text-2xl text-gray-500 flex justify-center mt-20">Searching...</p>
            ) : filteredApps.length > 0 ? (

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    {filteredApps.map((app) => (

                        <div
                            key={app.id}
                            onClick={() => navigate(`/app/${app.id}`)}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-200 cursor-pointer">
                            <figure>
                                <img src={app.image} alt={app.name} className="h-40 mt-5 object-cover" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{app.name}</h2>

                                <div className="flex justify-between gap-10">
                                    <p className="text-lg font-semibold text-green-400 flex gap-2 items-center justify-center bg-amber-50 rounded-md">
                                        <AiOutlineDownload /> {app.downloads?.toLocaleString() ?? 0}M
                                    </p>
                                    <p className="text-lg font-semibold text-amber-600 flex gap-2 items-center justify-center bg-amber-50 rounded-md">
                                        <FaStar /> {app.ratingAvg?.toFixed(1) ?? 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-xl mt-10 font-semibold">No App Found.</p>
            )}
        </div>
    );
};

export default AllApps;
