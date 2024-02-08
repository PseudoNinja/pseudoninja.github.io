import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";

export default function HomePage() {
    return (
        <div
            id="app"
            className="app w-full h-screen flex flex-col content-center overscroll-none sm:flex-row"
        >
            <AppHeader />
            <AppContent />
        </div>
    );
}
