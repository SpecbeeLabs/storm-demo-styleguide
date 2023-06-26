import "./LinkList.css";

function LinkList() {
  return (
    <section className="section link-list">
      <h2 className="section__title">Link List/Menu</h2>
      <div className="section__content">
        <p>This is a default menu link list. Use it for Footer menu links</p>
        <nav className="link-list">
          <ul className="menu menu--links">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Privacy Policy
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
        <div className="sp4"></div>
        <h3>Column Menu</h3>
        <p>Column menu to show a menu in a block.</p>
        <nav className="link-list link-list--block">
          <ul className="menu">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Privacy Policy
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default LinkList;
