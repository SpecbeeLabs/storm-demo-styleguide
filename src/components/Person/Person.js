import "./Person.css";
import bio from "../../images/bio.jpg";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";

function Person() {
  return (
    <section className="section section--person">
      <h2 className="section__title">Person</h2>
      <div className="section__content">
        <article className="person">
          <div className="person__info">
            <div className="person__picture">
              <img src={bio} alt="John Doe" />
            </div>
            <div className="person__content">
              <header className="person__content-header">
                <span className="person__designation">Technical Architect</span>
                <h1 className="page-title">John Doe</h1>
                <div className="person__links">
                  <ul className="social-links">
                    <li className="social-links__item">
                      <a
                        className="social-links__link"
                        href="http://social.com"
                      >
                        <span className="visually-hidden">
                          John Doe on Twitter
                        </span>
                        <img src={twitter} alt="Twitter logo" />
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a
                        className="social-links__link"
                        href="http://social.com"
                      >
                        <span className="visually-hidden">
                          John Doe on LinkedIn
                        </span>
                        <img src={linkedin} alt="LinkedIn logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </header>
              <div className="person__bio">
                <p>
                  Proident ad enim officia deserunt excepteur anim ipsum
                  voluptate nulla cupidatat minim enim. Ut dolore pariatur sunt
                  minim occaecat occaecat minim ad adipisicing id ipsum aliqua
                  cupidatat in. Eiusmod voluptate in occaecat proident irure.
                  Enim sunt irure qui pariatur veniam nulla ad consectetur
                  labore labore dolore proident in. Culpa quis et et sit ullamco
                  enim magna. In tempor ad veniam aliqua ex velit est eiusmod do
                  proident duis Lorem enim aliquip. Sunt aliquip cupidatat culpa
                  Lorem esse ea et cupidatat laborum sit anim id consequat
                  magna.
                </p>
                <p>
                  Occaecat nisi laboris mollit do fugiat duis. Veniam ea officia
                  tempor enim cillum anim elit irure ex reprehenderit. Officia
                  eiusmod in incididunt id. Qui deserunt veniam ex commodo
                  adipisicing culpa officia ut nisi veniam sunt sint ad non.
                  Minim elit voluptate proident est cupidatat sint consequat est
                  eiusmod deserunt consectetur in eiusmod magna. Nisi commodo
                  ipsum aute reprehenderit qui commodo elit amet laboris magna
                  culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="person__posts">
            <h2 className="person__post-heading">Articles by John Doe</h2>
            <div className="person__post-list">
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
              <ArticleTeaser />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Person;
