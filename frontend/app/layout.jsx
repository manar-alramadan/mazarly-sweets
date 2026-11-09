import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata = {
    title: "حلويات المازرلي",
    description: "حلويات المازرلي - مذاق يجمع الفخامة والأصالة",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="ar"
            dir="rtl"
            className={`${cairo.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}
