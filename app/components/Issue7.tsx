import { useState } from "react";
import Imagen1 from  "public/img/issue7_01.jpg";
import Imagen2 from  "public/img/issue7_02.jpg";
import Imagen3 from  "public/img/issue7_03.jpg";

export default function Issue7() {
    const [activeTab, setActiveTab] = useState("collaborative");

    const tabs = [
        { id: "collaborative", label: "Collaborative documents", image: Imagen1 },
        { id: "inline", label: "Inline comments", image: Imagen2 },
        { id: "commands", label: "Text-to-issue commands", image: Imagen3 },
    ];

    return (
        <div className="h-screen bg-[#08090A] text-white flex mx-auto justify-center">
            <div className="flex w-full max-w-6xl">
                {/* Sidebar */}
                <div className="w-1/3 p-8 mt-20">
                    <h1 className="text-2xl font-bold mb-6 leading-tight">
                        Ideate and specify<br />what to build next
                    </h1>
                    <ul className="space-y-4">
                        {tabs.map((tab) => (
                            <li
                                key={tab.id}
                                className={`cursor-pointer pl-2 border-l-4 transition-all duration-200 ${
                                    activeTab === tab.id
                                        ? "border-green-500 text-white font-semibold"
                                        : "border-[#28282C] text-gray-400"
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="w-2/3 p-8 flex justify-center">
                    <div className="p-6 rounded-xl transition-opacity duration-300 max-w-[600px] w-full">
                        <img
                            src={tabs.find((tab) => tab.id === activeTab)?.image}
                            alt="Preview"
                            className="rounded-lg w-full h-auto shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
