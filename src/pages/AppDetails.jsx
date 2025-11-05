import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import downloadImg from '../assets/icon-downloads.png';
import reviewImg from '../assets/icon-review.png';
import ratingImg from '../assets/icon-ratings.png';


const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useOutletContext();

    const [installed, setInstalled] = useState(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        return installedApps.some(a => a.id === parseInt(id));
    });

    const app = apps.find(app => app.id === parseInt(id));

    const handleInstall = () => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!installedApps.some(a => a.id === app.id)) {
            installedApps.push({ id: app.id });
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
            setInstalled(true);

            toast.success("App Installed Successfully");
        }
    };

    return (
        
        <div className="bg-base-200 min-h-screen py-10 px-10 md:px-40 max-w-full mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-10">
               
                <img src={app.image} alt={app.name} className="w-full md:w-60 h-auto md:h-60 object-contain rounded-lg shadow p-5 bg-white" />

                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{app.name}</h2>
                    <p className="text-gray-500 mb-4">Develop By: {app.companyName}</p>

                    <hr />

                    <div className="flex justify-start gap-10 my-5">

                        <div>

                            <img src={downloadImg} alt="download" />

                            <p className="my-2 font-semibold text-gray-500">Downloads</p>

                            <p className="text-3xl font-extrabold">{app.downloads ? app.downloads.toLocaleString() : 0}M</p>

                       </div>

                        <div>
                            <img src={ratingImg} alt="rating" />
                            <p className="my-2 font-semibold text-gray-500">Average Rating</p>
                            <p className="text-3xl font-extrabold"> {app.ratingAvg ? app.ratingAvg.toFixed(1) : 0}</p>
                        </div>
                        
                        <div>
                            <img src={reviewImg} alt="review" />
                            <p className="my-2 font-semibold text-gray-500">Reviews</p>
                            <p className="text-3xl font-extrabold"> {app.reviews || 0}K</p>
                       </div>

                        

                    </div>

                    <button
                        className={`btn btn-wide ${installed ? "btn-disabled" : "btn bg-sky-600 text-white"}`}
                        onClick={handleInstall}
                        disabled={installed}
                    >
                        {installed ? "Installed" : "Install Now"}
                    </button>
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4">App Reviews</h3>
               
                <ResponsiveContainer width="100%" height={250}>
                   
                    <BarChart data={app.ratings || []}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                    
                </ResponsiveContainer>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
