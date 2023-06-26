import "./HeroCard.css";
import card_image_1 from "../../images/card1.jpg";
import card_image_2 from "../../images/card2.jpg";

function HeroCard() {
  return (
    <section className="section section--image-card">
      <h2 className="section__title">Image text card</h2>
      <div className="section__content">
        <div className="card card--hero">
          <div className="card__media">
            <img src={card_image_1} alt="Card one media" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Title of the Card</h3>
            <div className="card__excerpt">
              <p>
                Enthusiastically synergize sustainable e-services without
                world-class supply chains. Phosfluorescently strategize
                competitive schemas with enterprise synergy.
              </p>
            </div>
            <a href="/" className="button button--primary card__link">
              Read More
            </a>
          </div>
        </div>
        <div className="card card--hero card--hero-media-right">
          <div className="card__media">
            <img src={card_image_2} alt="Card one media" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Title of the Card</h3>
            <div className="card__excerpt">
              <p>
                Enthusiastically synergize sustainable e-services without
                world-class supply chains. Phosfluorescently strategize
                competitive schemas with enterprise synergy.
              </p>
            </div>
            <a href="/" className="button button--primary card__link">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
