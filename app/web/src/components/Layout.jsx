import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {

    return (
        <main role="main" className="text-slate-950 bg-gray-200 flex flex-col min-h-[100vh]">
            <Header />
            <main className="container px-2 flex-grow flex-1">
                <Outlet />
            </main>
            <Footer />
        </main>
    )
}
