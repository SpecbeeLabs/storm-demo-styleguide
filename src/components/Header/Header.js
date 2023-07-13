import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <section className="section section--site-header">
      <h2 className="section__title">Site header</h2>
      <div className="section__content">
        <header id="header" className="site-header">
          <div className="site-header__branding">
            <a href="/" className="logo-link">
              <img src={logo} alt="Card one media" />
            </a>
          </div>
          <div className="site-header__navigation">
            <nav className="site-navigation">
              <ul className="menu menu__main">
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    About Us
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Articles
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
