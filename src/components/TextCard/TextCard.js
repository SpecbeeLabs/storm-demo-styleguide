import "./TextCard.css";

function TextCard() {
  return (
    <section className="section section--text-card">
      <h2 className="section__title">Text Card</h2>
      <div className="section__content d-grid d-grid__4">
        <div className="card card--text">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="link link-cta card__link">
            CTA Link
          </a>
        </div>
        <div className="card card--text card--text-with-bg">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="link link-cta card__link">
            CTA Link
          </a>
        </div>
        <div className="card card--text card--text-with-gray-bg">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="link link-cta card__link">
            CTA Link
          </a>
        </div>
        <div className="card card--text card--text-with-blue-bg">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="link link-cta card__link">
            CTA Link
          </a>
        </div>
      </div>
    </section>
  );
}

export default TextCard;
