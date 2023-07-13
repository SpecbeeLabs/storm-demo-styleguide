import "./Footer.css";
import logo from "../../images/logo.svg";
import rss from "../../images/rss.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";

function Footer() {
  return (
    <section className="section section--site-footer">
      <h2 className="section__title">Site Footer</h2>
      <div className="section__content">
        <footer id="footer" className="site-footer">
          <div className="site-footer__branding">
            <div className="branding">
              <a href="/" className="branding__logo-link">
                <img src={logo} alt="Card one media" />
              </a>
            </div>
            <div className="copyright">&copy; Storm CMS 2023</div>
          </div>
          <div className="site-footer__navigation">
            <nav className="link-list">
              <ul className="menu menu--links">
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Contact
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Privacy Policy
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-footer__social">
            <ul className="social-links">
              <li className="social-links__item">
                <a href="http://example.com" className="social-links__link">
                  <span className="visually-hidden">Storm CMS RSS Feed</span>
                  <img src={rss} alt="RSS Feed" />
                </a>
              </li>
              <li className="social-links__item">
                <a href="http://example.com" className="social-links__link">
                  <span className="visually-hidden">Storm CMS on Twitter</span>
                  <img src={twitter} alt="Twitter logo" />
                </a>
              </li>
              <li className="social-links__item">
                <a href="http://example.com" className="social-links__link">
                  <span className="visually-hidden">Storm CMS on LinkedIn</span>
                  <img src={linkedin} alt="LinkedIn Logo" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
