import Link from "next/link";
import Monogram from "@/components/monogram";

const EMAIL = "mshivam019@gmail.com";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="act-section-kicker">Contact</p>
        <h2 className="footer-heading">
          Building something that has to actually work?
          <br />
          <a href={`mailto:${EMAIL}`}>Tell me about it.</a>
        </h2>
      </div>

      <div className="footer-row">
        <span className="footer-mark">
          <Monogram size={28} />
          <span>Shivam Mishra · Hyderabad, India</span>
        </span>

        <nav className="footer-links" aria-label="Elsewhere">
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href="https://github.com/mshivam019">GitHub</a>
          <a href="https://linkedin.com/in/mshivam019">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view">Résumé</a>
          <Link href="/writing">Writing</Link>
        </nav>

        <a href="#top" className="footer-top-link">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
