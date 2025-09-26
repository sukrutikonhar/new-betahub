import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ROUTES } from "../router/routes";

export default function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === ROUTES.HOME;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className={`main-content-wrapper ${isHomePage ? '' : 'pt-20'}`}>
                <main className="flex-1">
                    <Outlet key={location.pathname} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
