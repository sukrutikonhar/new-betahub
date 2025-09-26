import { Link, useLocation } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../router/routes";
import { useState, useEffect } from "react";

export default function Header() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomePage = location.pathname === ROUTES.HOME;

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine header styling based on page and scroll state
    const getHeaderClasses = () => {
        let baseClasses = "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300";

        if (isHomePage) {
            if (isScrolled) {
                // Sticky header on home page - white background with backdrop blur
                baseClasses += " bg-white/95 backdrop-blur-md shadow-lg";
            } else {
                // Completely transparent header on home page
                baseClasses += " bg-transparent";
            }
        } else {
            // Other pages - always white background
            baseClasses += " bg-white shadow-sm";
        }

        return baseClasses;
    };


    const getNavLinkClasses = (path: string) => {
        const baseClasses = "font-medium transition-colors duration-300";
        const activeClasses = isActive(path) ? "text-muted-purple" : "";

        if (isHomePage && !isScrolled) {
            return `${baseClasses} ${activeClasses || "text-white hover:text-bright-pink"}`;
        }

        return `${baseClasses} ${activeClasses || "text-dark-gray hover:text-core-purple"}`;
    };

    const getNavLinkStyle = (path: string) => {
        if (isHomePage && !isScrolled && !isActive(path)) {
            return {
                textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.3)'
            };
        }
        return {};
    };

    return (
        <header className={getHeaderClasses()}>
            <div className="section-container">
                <div className="flex justify-between items-center py-4">
                    <Link
                        to={ROUTES.HOME}
                        className="transition-all duration-300"
                    >
                        <img
                            src={isHomePage && !isScrolled ? "/logos/logo-white.webp" : "/logos/logo-dark.webp"}
                            alt="BetaHub Logo"
                            className="w-auto h-12 object-contain"
                        />
                    </Link>
                    <nav className="flex gap-6">
                        {navigationItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={getNavLinkClasses(path)}
                                style={getNavLinkStyle(path)}
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
