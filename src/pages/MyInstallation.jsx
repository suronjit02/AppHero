import React from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useOutletContext } from "react-router";
import { toast } from "react-toastify";



const MyInstallation = () => {

    const { apps } = useOutletContext();
    const [sortOrder, setSortOrder] = React.useState(() => localStorage.getItem("installedSortOrder") || "high");

    const [installedApps, setInstalledApps] = React.useState(() => {
        const installedIds = JSON.parse(localStorage.getItem("installedApps"))?.map(a => a.id) || [];
        let appsToShow = apps.filter(app => installedIds.includes(app.id));

        return appsToShow.sort((a, b) => sortOrder === "high" ? b.downloads - a.downloads : a.downloads - b.downloads);
    });


    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);

        const updatedLocalStorage = updatedApps.map(app => ({ id: app.id }));
        localStorage.setItem("installedApps", JSON.stringify(updatedLocalStorage));

        toast.success("App Uninstalled Successfully");
    };


    const handleSort = (order) => {
        const sorted = [...installedApps].sort((a, b) =>
            order === "high" ? b.downloads - a.downloads : a.downloads - b.downloads
        );
        setInstalledApps(sorted);
        setSortOrder(order);
        localStorage.setItem("installedSortOrder", order);
    };




    return (

        <div className="bg-base-200 min-h-screen py-10 px-4">
            <h3 className="text-3xl font-bold text-center mb-4">Your Installed Apps</h3>

            <p className="text-md font-semibold text-center mb-8">Explore All Trending Apps on the Market developed by us</p>

            {installedApps.length === 0 ? (

                <div className="flex justify-center items-center h-[60vh]">
                    <p className="text-center text-gray-500 text-xl">No Apps Installed</p>
                </div>

            ) : (
                <div className=" max-full md:px-20 py-10 mx-auto">

                    <div className="flex flex-col md:flex-row md:justify-between justify-end mb-5">

                        <p className="text-sm text-blue-500 font-semibold">( {installedApps.length} ) Apps Installed</p>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1">
                                Sort by Size <MdKeyboardArrowDown />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <button onClick={() => handleSort("high")}> High → Low </button>
                                </li>

                                <li>
                                    <button onClick={() => handleSort("low")}> Low → High </button>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {installedApps.map((app) => (

                        <div key={app.id} className="card bg-base-100 shadow-md hover:shadow-xl transition duration-200 flex justify-between mb-2 ">

                            <div className=" flex flex-col md:flex-row justify-between p-2 px-5 items-center">

                                <div className="flex gap-4">

                                    <figure>
                                        <img src={app.image} alt={app.name} className="h-15 w-15" />
                                    </figure>

                                    <div>
                                        <h2 className="card-title">{app.name}</h2>

                                        <p className="text-sm text-green-400 font-bold flex gap-2 items-center py-1"> < AiOutlineDownload /> {app.downloads.toLocaleString()}M </p>

                                        <p className="text-sm text-gray-500 flex gap-2 items-center">Rating: <FaStar /> {app.ratingAvg.toFixed(1)}</p>
                                    </div>
                                </div>

                                <button className="btn btn-error btn-wide" onClick={() => handleUninstall(app.id)}>
                                    Uninstall
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyInstallation;
