
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-brand">
                    <h2>حلويات المازرلي</h2>
                    <span>MAZARLY SWEETS</span>
                    <p>
                        نقدم لكم أشهى الحلويات الشرقية والغربية
                        بمذاق يجمع الفخامة والأصالة.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>روابط سريعة</h3>
                    <Link href="/">الرئيسية</Link>
                    <Link href="/products">منتجاتنا</Link>
                    <Link href="/about">من نحن</Link>
                    <Link href="/contact">تواصل معنا</Link>
                </div>

                <div className="footer-contact">
                    <h3>تواصل معنا</h3>
                    <p>الموقع: منبج</p>
                    <p>يسعدنا استقبال استفساراتكم وطلباتكم.</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 حلويات المازرلي. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
}
