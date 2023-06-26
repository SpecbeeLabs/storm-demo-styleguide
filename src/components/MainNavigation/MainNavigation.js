import "./MainNavigation.css";

function MainNavigation() {
  return (
    <section className="section main-nav">
      <h2 className="section__title">Main Navigation</h2>
      <div className="section__content">
        <nav className="site-navigation">
          <ul className="menu menu__main">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About Us
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Articles
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default MainNavigation;
