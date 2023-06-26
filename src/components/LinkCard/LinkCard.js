import "./LinkCard.css";

function LinkCard() {
  return (
    <section className="section section--link-card">
      <h2 className="section__title">Link Text Card</h2>
      <div className="section__content d-grid d-grid__2">
        <div className="card card--link-text">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="card__link">
            <span className="visually-hidden">Link Text</span>
          </a>
        </div>
        <div className="card card--link-text card--link-text--red">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="card__link">
            <span className="visually-hidden">Link Text</span>
          </a>
        </div>
        <div className="card card--link-text card--link-text--green">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="card__link">
            <span className="visually-hidden">Link Text</span>
          </a>
        </div>
        <div className="card card--link-text card--link-text--gold">
          <h3 className="card__title">Title of the Card</h3>
          <div className="card__content">
            <p>
              Enthusiastically synergize sustainable e-services without
              world-class supply chains. Phosfluorescently strategize
              competitive schemas with enterprise synergy.
            </p>
          </div>
          <a href="/" className="card__link">
            <span className="visually-hidden">Link Text</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LinkCard;
