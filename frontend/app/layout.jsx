
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export const metadata = {
    title: "حلويات المازرلي",
    description: "حلويات المازرلي - مذاق يجمع الفخامة والأصالة",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl" className="h-full antialiased">
        <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}
