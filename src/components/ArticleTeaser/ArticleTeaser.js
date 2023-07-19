import "./ArticleTeaser.css";
import card_image_1 from "../../images/card1.jpg";
import card_image_2 from "../../images/card2.jpg";

function ArticleTeaser() {
  return (
    <article className="article article--teaser">
      <div className="article__media">
        <img src={card_image_1} />
      </div>
      <div className="article__content">
        <header className="article__header">
          <div class="article__author-date">
            <time datetime="2023-04-18T09:55:05+0000">18 April, 2023</time>
          </div>
          <h2 className="article__title">
            <a href="/article" className="link">
              Component-based theming with Drupal’s Single Directory Component
            </a>
          </h2>
        </header>
        <div className="article__link">
          <a href="/article" className="link">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}

export default ArticleTeaser;
