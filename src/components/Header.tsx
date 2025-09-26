import { Link, useLocation } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../router/routes";

export default function Header() {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { path: ROUTES.HOME, label: ROUTE_LABELS[ROUTES.HOME] },
        { path: ROUTES.ABOUT, label: ROUTE_LABELS[ROUTES.ABOUT] },
        { path: ROUTES.AGENTS, label: ROUTE_LABELS[ROUTES.AGENTS] },
        { path: ROUTES.SERVICES, label: ROUTE_LABELS[ROUTES.SERVICES] },
        { path: ROUTES.PRICING, label: ROUTE_LABELS[ROUTES.PRICING] },
        { path: ROUTES.RESOURCES, label: ROUTE_LABELS[ROUTES.RESOURCES] },
        { path: ROUTES.GET_STARTED, label: ROUTE_LABELS[ROUTES.GET_STARTED] },
    ];

    return (
        <header className="nav-bar w-full">
            <div className="section-container">
                <div className="flex justify-between items-center">
                    <Link to={ROUTES.HOME} className="text-core-purple text-2xl font-bold">
                        BetaHub
                    </Link>
                    <nav className="flex gap-6">
                        {navigationItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`nav-link ${isActive(path) ? 'active' : ''}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
