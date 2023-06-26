import "./Breadcrumb.css";

function Breadcrumb() {
  return (
    <section className="section section--breadcrumb">
      <h2 className="section__title">Breadcrumbs</h2>
      <div className="section__content">
        <nav className="breadcrumb">
          <ul className="menu menu--breadcrumb">
            <li className="menu__item">
              <a href="/" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Storm CMS
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Style Guide
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Breadcrumb;
