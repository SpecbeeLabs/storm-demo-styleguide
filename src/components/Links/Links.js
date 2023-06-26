import "./Links.css";

function Links() {
  return (
    <section className="links section">
      <h2 className="section__title">Links</h2>
      <div className="section__content">
        <div className="links__link">
          <div className="links__link-item">
            <a href="/">This is default link</a>
          </div>
          <div className="links__link-item">
            <a href="/" className="link">
              Add "link" also makes a link
            </a>
          </div>
          <div className="links__link-item">
            <a href="/" className="link-cta">
              This is a CTA Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Links;
