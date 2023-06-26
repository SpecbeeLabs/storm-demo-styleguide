import "./ArticleCard.css";
import card_image_1 from "../../images/card1.jpg";
import card_image_2 from "../../images/card2.jpg";

function ArticleCard() {
  return (
    <section className="section section--article-teaser">
      <h2 className="section__title">Article Card</h2>
      <div className="section__content d-grid d-grid__3">
        <article className="card card--article article article--card">
          <a href="/" className="article__link">
            <span className="visually-hidden">Read more link</span>
          </a>
          <div className="article__media">
            <img src={card_image_1} alt="Card one media" />
          </div>
          <div className="article__content">
            <header className="article__header">
              <span className="article__tag">Category</span>
              <h3 className="article__title">Title of the Article</h3>
            </header>
            <div className="article__teaser">
              <p>
                Enthusiastically synergize sustainable e-services without
                world-class supply chains. Phosfluorescently strategize
                competitive schemas with enterprise synergy.
              </p>
            </div>
            <footer className="article__footer">
              <div className="article__postdate">June 26, 2023</div>
              <div className="article__author">John Doe</div>
            </footer>
          </div>
        </article>
        <article className="card card--article article article--card">
          <a href="/" className="article__link">
            <span className="visually-hidden">Read more link</span>
          </a>
          <div className="article__media">
            <img src={card_image_2} alt="Card one media" />
          </div>
          <div className="article__content">
            <header className="article__header">
              <span className="article__tag">Category</span>
              <h3 className="article__title">Title of the Article</h3>
            </header>
            <div className="article__teaser">
              <p>
                Enthusiastically synergize sustainable e-services without
                world-class supply chains. Phosfluorescently strategize
                competitive schemas with enterprise synergy.
              </p>
            </div>
            <footer className="article__footer">
              <div className="article__postdate">June 26, 2023</div>
              <div className="article__author">John Doe</div>
            </footer>
          </div>
        </article>
        <article className="card card--article article article--card">
          <a href="/" className="article__link">
            <span className="visually-hidden">Read more link</span>
          </a>
          <div className="article__media">
            <img src={card_image_1} alt="Card one media" />
          </div>
          <div className="article__content">
            <header className="article__header">
              <span className="article__tag">Category</span>
              <h3 className="article__title">Title of the Article</h3>
            </header>
            <div className="article__teaser">
              <p>
                Enthusiastically synergize sustainable e-services without
                world-class supply chains. Phosfluorescently strategize
                competitive schemas with enterprise synergy.
              </p>
            </div>
            <footer className="article__footer">
              <div className="article__postdate">June 26, 2023</div>
              <div className="article__author">John Doe</div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleCard;
