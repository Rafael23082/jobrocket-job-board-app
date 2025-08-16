import { UserContext } from "../context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import DashboardSideNavbar from "../components/DashboardSideNavbar.jsx";
import DashboardBox from "../components/DashboardBox.jsx";
import {AreaChart, Area, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell} from "recharts";
import ActivtyFeedCard from "../components/ActivityFeedCard.jsx";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function DashboardPageTemplate({box1, Box1Icon, box2, Box2Icon, box3, Box3Icon, box4, Box4Icon, lineChartInfo, barChartInfo, pieChartInfo}){
    const [menuOpen, setMenuOpen] = useState(false);
    const productSales = [
        {name: "Q1", product1: 1, product2: 4},
        {name: "Q2", product1: 3, product2: 9},
        {name: "Q3", product1: 8, product2: 4},
        {name: "Q4", product1: 4, product2: 1},
    ]

    const applicationStatus = [
        {name: "Applied", value: 2},
        {name: "Rejected", value: 2},
        {name: "Interview", value: 2}
    ]
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
        <div className="flex bg-[#fffcfc] overflow-hidden" style={{fontFamily: "'Roboto', sans-serif"}}>
            <DashboardSideNavbar placeholder={true} />
            <div className="flex-1 h-fit flex flex-col pb-[3em]">
                <div className="bg-blue-500 py-[1.2em] flex items-center justify-between px-5">
                    <div className="flex-1">
                        {menuOpen ? (
                            <IoClose size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                        ): (
                            <IoMdMenu size={30} className="block lg:hidden cursor-pointer mr-10 margin-right" color="white" onClick={() => {setMenuOpen(!menuOpen)}} />
                        )}
                    </div>
                    <div className="flex items-center">
                        <IoIosNotifications color="white" size={20} className="mr-[1.7em] cursor-pointer hover:brightness-90" />
                        <div className="w-8 h-8 rounded-full border border-white"></div>
                        <p className="text-white font-medium pl-[0.8em] text-[0.9rem]">{user?.name}</p>
                    </div>
                </div>

                <div className="pt-[2em] bg-blue-500 border-t border-white border-t-[0.1px]">
                    <p className="text-white pl-5 text-[1.25rem] font-medium">Dashboard</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[2em] px-5 gap-4">
                        <DashboardBox title={box1} value={10} Icon={Box1Icon} />
                        <DashboardBox title={box2} value={10} Icon={Box2Icon} />
                        <DashboardBox title={box3} value={10} Icon={Box3Icon} />
                        <DashboardBox title={box4} value={10} Icon={Box4Icon} />
                    </div>
                </div>

                <div className="px-5 pt-[3em] flex gap-[2em] relative flex-col lg:flex-row">
                    <div className="absolute top-0 left-0 h-[130px] bg-blue-500 w-[100%] z-0"></div>
                    <div className="w-[100%] lg:w-[60%] bg-slate-700 shadow rounded-[5px] p-[1.4em] relative z-1">
                        <p className="text-white font-medium pb-[2em] text-[1.1rem]">{lineChartInfo.title}</p>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={lineChartInfo.dataset}>
                                {lineChartInfo.dataKeys.map((dataKey) => (
                                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" strokeWidth={3} dot={false} />
                                ))}
                                <Tooltip />
                                <XAxis dataKey="name" stroke="none" tick={{fontSize: 12, fill: "#9CA3AF"}} height={24} />
                                <YAxis stroke="none" tick={{fontSize: 12, fill: "#9CA3AF"}} width={24} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="w-[100%] lg:w-[40%] rounded-[5px] p-[1.4em] shadow bg-white relative z-1">
                        <p className="font-medium pb-[2em] text-[1.1rem]">{barChartInfo.title}</p>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={barChartInfo.dataset}>
                                {barChartInfo.dataKeys.map((dataKey) => (
                                    <Bar dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
                                ))}
                                <YAxis tick={{fontSize: 12}} width={24} />
                                <XAxis dataKey="name" tick={{fontSize: 12}} height={24} />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                
                <div className="flex px-5 pt-[2em] gap-[2em] flex-col lg:flex-row">
                    <div className="w-[100%] lg:w-[60%] bg-white rounded-[5px] shadow p-[1.4em]">
                        <p className=" font-medium text-[1.1rem]">{pieChartInfo.title}</p>
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <Pie data={pieChartInfo.dataset} dataKey={pieChartInfo.dataKey}>
                                    {applicationStatus.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend wrapperStyle={{fontSize: "0.875rem"}} />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="w-[100%] lg:w-[40%] bg-white shadow rounded-[5px] p-[1.4em] overflow-auto">
                        <p className=" font-medium text-[1.1rem]">Activity feed</p>
                        {productSales.map((productSale, index) => (
                            <ActivtyFeedCard title={"Hello"} subtitle={"World"} key={index} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardPageTemplate;