import "./Article.css";
import banner from "../../images/banner.png";
import bio from "../../images/bio.jpg";

function Article() {
  return (
    <section className="section section--article-header">
      <h2 className="section__title">Article Content</h2>
      <div className="section__content">
        <article className="article">
          <header className="article__header">
            <div className="article__header-content">
              <span className="article__category">Drupal Development</span>
              <h1 className="page-title">
                Data Security Matters: Marketers' Guide to Securing Your CMS
              </h1>
              <div class="article__author-date">
                <time datetime="2023-04-18T09:55:05+0000">18 April, 2023</time>
                <span>|</span>
                <a href="/blogs/john-doe">John Doe</a>
              </div>
            </div>
            <div className="article__header-hero">
              <img src={banner} alt="Hero banner" />
            </div>
          </header>
          <div className="article__content">
            <div className="article__body">
              <p>
                Cillum deserunt tempor id laborum reprehenderit ut nostrud
                proident veniam. Non adipisicing sit labore officia voluptate
                enim Lorem. Exercitation sit et do est do. Deserunt deserunt
                dolore non sint commodo exercitation ullamco sint dolor
                exercitation ad. Pariatur reprehenderit amet officia ad ex
                labore pariatur laboris in do labore ad minim eu. Irure ex
                cillum labore nostrud nisi mollit.
              </p>
              <h2>Pariatur exercitation officia sit est labore</h2>
              <p>
                Eu occaecat officia officia eu enim ad deserunt nostrud id non
                sit. In minim dolore id excepteur. Excepteur quis est anim
                proident. Pariatur exercitation officia sit est labore commodo
                Lorem minim nostrud cillum sunt exercitation est. Sint est duis
                elit qui adipisicing anim amet laboris. Labore ex ex elit fugiat
                eu non est adipisicing commodo do ipsum culpa eiusmod dolor.
                Excepteur tempor est occaecat ut sunt id ea.
              </p>
              <p>
                Dolor esse esse do laborum voluptate eu ex ex consectetur amet
                voluptate. Amet excepteur reprehenderit do eiusmod adipisicing
                enim do est et sunt cupidatat nostrud pariatur. Aute voluptate
                commodo ad sint exercitation non occaecat duis laboris sit sit
                proident ut Lorem. Nisi est anim consequat anim amet. Esse
                labore est eu occaecat. Fugiat in mollit qui adipisicing
                reprehenderit deserunt do. Proident et ad consectetur nisi
                cupidatat fugiat.
              </p>
              <h2>Deserunt tempor nostrud commodo fugiat</h2>
              <p>
                Ipsum ad deserunt adipisicing cillum amet. Deserunt tempor
                nostrud commodo fugiat in non elit velit occaecat enim
                exercitation incididunt Lorem.
                <ul>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                </ul>
                Velit pariatur in id sit nostrud. Dolore cupidatat ad irure
                proident ea nulla et laboris dolor aliquip fugiat quis fugiat.
                Nostrud eiusmod in officia et voluptate Lorem Lorem elit culpa
                voluptate amet adipisicing culpa.
              </p>
              <p>
                Ut reprehenderit ea aliquip est irure labore. Exercitation
                consectetur voluptate anim aliqua ea. Eu enim deserunt
                exercitation labore. Deserunt nulla proident consectetur nisi
                incididunt laboris ea ex ullamco dolore veniam consectetur ad
                cillum. Occaecat id dolor quis in proident proident consectetur
                voluptate do minim aute.
                <ol>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                  <li>
                    Sit commodo nulla sint in irure sunt officia aliquip esse
                    commodo elit sit qui consectetur.
                  </li>
                </ol>{" "}
                Magna enim consectetur nulla pariatur. Mollit labore proident
                qui in veniam ut duis anim. Veniam consectetur proident aliqua
                reprehenderit occaecat. Proident labore exercitation esse
                aliquip. Nisi culpa quis ea non ut minim anim irure sit minim.
                Do enim amet dolor aliquip nisi reprehenderit enim esse sit
                labore qui eu ut. Dolor incididunt sit ea dolore enim nulla
                laboris nulla. Velit velit dolore Lorem excepteur. Dolor anim in
                cillum nisi sit Lorem culpa mollit culpa ex nulla exercitation.
                In aliquip sit ut excepteur dolore reprehenderit id velit
                occaecat eiusmod eu. Anim dolore fugiat esse culpa anim tempor.
                Cillum non sit ea minim Lorem sit laborum aliqua ullamco ex
                nostrud deserunt cillum ipsum. Non velit et ut aliquip anim nisi
                do commodo.
              </p>
            </div>
            <div className="article__tags">
              <div className="field field--tags">
                <h3 className="field__label">Tags:</h3>
                <ul className="field__items">
                  <li className="field__item">
                    <a href="/tag/1" className="tag-link">
                      Drupal
                    </a>
                  </li>
                  <li className="field__item">
                    <a href="/tag/2" className="tag-link">
                      Security
                    </a>
                  </li>
                  <li className="field__item">
                    <a href="/tag/3" className="tag-link">
                      Data
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="article__author">
              <article className="bio-teaser">
                <div className="bio-teaser__picture">
                  <img src={bio} alt="Article author name" />
                </div>
                <header className="bio-teaser__header">
                  <h5 className="bio-teaser__name">John Doe</h5>
                  <div className="bio-teaser__designation">
                    Technical Architect
                  </div>
                </header>
                <div className="bio-teaser__content">
                  <p>
                    Efficiently enhance reliable e-tailers via state of the art
                    partnerships. Intrinsicly enhance client-based supply chains
                    without.
                  </p>
                </div>
                <div className="bio-teaser__link">
                  <a href="/" className="button ">
                    More about John Doe
                  </a>
                </div>
              </article>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Article;
