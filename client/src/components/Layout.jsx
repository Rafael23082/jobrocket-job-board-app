import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
            <header>
                <div className="mx-auto max-w-[1300px]">
                <Navbar current={"Jobs"} />  
                </div>
            </header>

            <Outlet />

            <footer className="bg-slate-700">
                <Footer />
            </footer>
        </>
    )
}

export default Layout;