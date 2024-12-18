import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scrolling
        });

    }, [pathname]);

    return children;
}