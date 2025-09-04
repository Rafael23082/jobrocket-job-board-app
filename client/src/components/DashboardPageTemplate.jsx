import { UserContext } from "../context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import DashboardBox from "../components/DashboardBox.jsx";
import {AreaChart, Area, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell} from "recharts";
import ActivtyFeedCard from "../components/ActivityFeedCard.jsx";
import DashboardNavbar from "./DashboardNavbar.jsx";

function DashboardPageTemplate({box1, Box1Icon, box1Value, box2, Box2Icon, box2Value, box3, Box3Icon, box3Value, lineChartInfo, barChartInfo, pieChartInfo}){
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user])

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

    return(
        <>
        <DashboardSideNavbar current={"Dashboard"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex bg-[#fffcfc]" style={{fontFamily: "'Roboto', sans-serif"}}>
            <DashboardSideNavbar placeholder={true} />
            <div className="flex-1 h-fit flex flex-col pb-[3em]">
                <DashboardNavbar />
                <div className="pt-[2em] bg-blue-500 border-t border-white border-t-[0.1px]">
                    <p className="text-white pl-5 text-[1.25rem] font-medium">Dashboard</p>
                    <div className="flex px-5 gap-4 flex-col md:flex-row mt-5">
                        <DashboardBox title={box1} value={box1Value} Icon={Box1Icon} />
                        <DashboardBox title={box2} value={box2Value} Icon={Box2Icon} />
                        <DashboardBox title={box3} value={box3Value} Icon={Box3Icon} />
                    </div>
                </div>

                <div className="px-5 pt-[3em] flex gap-[2em] relative flex-col">
                    <div className="absolute top-0 left-0 h-[130px] bg-blue-500 w-[100%] z-0"></div>
                    <div className="flex pt-[2em] gap-[2em] flex-col lg:flex-row w-[100%]">
                        <div className="w-[100%] lg:w-[50%] bg-white rounded-[5px] p-[1.4em] shadow z-1">
                            <p className=" font-medium text-[1.1rem]">{pieChartInfo?.title}</p>
                            <ResponsiveContainer width="100%" height={350}>
                                <PieChart>
                                    <Pie data={pieChartInfo?.dataset || []} dataKey={pieChartInfo?.dataKey}>
                                    {pieChartInfo?.dataset?.map((entry, index) => {
                                        let fillColor;
                                        switch (entry.name) {
                                            case "Hired":
                                            fillColor = "#22c55e";
                                            break;
                                            case "Interview":
                                            fillColor = "#3b82f6";
                                            break;
                                            case "Pending":
                                            fillColor = "#f97316";
                                            break;
                                            case "Rejected":
                                            fillColor = "#ef4444";
                                            break;
                                        }
                                        return <Cell key={index} fill={fillColor} />;
                                    })}
                                    </Pie>
                                    <Legend wrapperStyle={{fontSize: "0.875rem"}} />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-[100%] lg:w-[50%] rounded-[5px] p-[1.4em] shadow bg-white relative z-1">
                            <p className="font-medium pb-[2em] text-[1.1rem]">{barChartInfo?.title}</p>
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart data={barChartInfo?.dataset}>
                                    {barChartInfo?.dataKeys.map((dataKey) => (
                                        <Bar dataKey={dataKey}>
                                            {barChartInfo?.dataset?.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"][index % 5]} />
                                            ))}
                                        </Bar>
                                    ))}
                                    <YAxis tick={{fontSize: 12}} width={24}      />
                                    <XAxis dataKey="name" tick={{fontSize: 12}} height={24} allowDecimals={false} />
                                    <Tooltip />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="w-[100%] bg-slate-700 shadow rounded-[5px] p-[1.4em] relative z-1">
                        <p className="text-white font-medium pb-[2em] text-[1.1rem]">{lineChartInfo?.title}</p>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={lineChartInfo?.dataset}>
                                {lineChartInfo?.dataKeys.map((dataKey) => (
                                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" strokeWidth={3} dot={false} />
                                ))}
                                <Tooltip />
                                <XAxis dataKey="name" stroke="none" tick={{fontSize: 12, fill: "#9CA3AF"}} height={24} />
                                <YAxis stroke="none" tick={{fontSize: 12, fill: "#9CA3AF"}} width={24} allowDecimals={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardPageTemplate;