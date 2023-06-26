import "./Banner.css";
import logo from "../../images/banner.jpg";

function Banner() {
  return (
    <section className="section banner-section">
      <h2 className="section__title">Banner</h2>
      <section className="banner">
        <div className="banner__media">
          <img src={logo} alt="Banner"/>
        </div>
        <div className="banner__content">
          <div className="banner__content-inner">
            <h1 className="page-title banner__title">Banner title</h1>
            <div className="banner__text">
              <p>
                Competently empower multifunctional materials vis-a-vis
                customized strategic theme areas.
              </p>
            </div>
            <div className="banner__links">
              <a href="/" className="button button--primary">
                Primary CTA
              </a>
              <a href="/" className="link link-cta">
                Secondary CTA
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Banner;
