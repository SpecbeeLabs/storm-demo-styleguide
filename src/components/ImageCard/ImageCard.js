import "./ImageCard.css";
import card_image_1 from "../../images/card1.jpg";
import card_image_2 from "../../images/card2.jpg";

function ImageCard() {
  return (
    <section className="section section--image-card">
      <h2 className="section__title">Image Card</h2>
      <div className="section__content d-grid d-grid__3">
        <div className="card card--image">
          <div className="card__media">
            <img src={card_image_1} alt="Card one media" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Title of the Card</h3>
            <a href="/" className="card__link">
              <span className="visually-hidden">Link Text</span>
            </a>
          </div>
        </div>
        <div className="card card--image">
          <div className="card__media">
            <img src={card_image_2} alt="Card one media" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Title of the Card</h3>
            <a href="/" className="card__link">
              <span className="visually-hidden">Link Text</span>
            </a>
          </div>
        </div>
        <div className="card card--image">
          <div className="card__media">
            <img src={card_image_1} alt="Card one media" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Title of the Card</h3>
            <a href="/" className="card__link">
              <span className="visually-hidden">Link Text</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCard;
