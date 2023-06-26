import "./Typography.css";

function Typography() {
  return (
    <section className="typography section">
      <h2 className="section__title">Typography</h2>
      <div className="d-grid d-grid__2 section__content">
        <div className="typography__left-rail">
          <h1 className="page-title">Page title</h1>
          <div className="typography__spec">
            <span>Font size: 42px</span>
            <span>Line height: 1.15</span>
            <span>Margin bottom: 36px</span>
            <span>Font: Metropolis</span>
          </div>
        </div>
        <div className="typography__right-rail">
          <h1 className="page-title">
            Hi, I am a Page title. Use me for the title of the page.
          </h1>
        </div>
        <div className="typography__left-rail">
          <h1>H1</h1>
          <div className="typography__spec">
            <span>Font size: 36px</span>
            <span>Line height: 1.15</span>
            <span>Margin bottom: 36px</span>
            <span>Font: Metropolis</span>
          </div>
        </div>
        <div className="typography__right-rail">
          <h1>Hi, I am a H1. Use me for the main heading of a page.</h1>
        </div>
        <div className="typography__left-rail">
          <h2>H2</h2>
          <div className="typography__spec">
            <span>Font size: 32px</span>
            <span>Line height: 1.15</span>
            <span>Margin bottom: 27px</span>
            <span>Font: Metropolis</span>
          </div>
        </div>
        <div className="typography__right-rail">
          <h2>Hi, I am a H2. Use me as a title for a section in a page.</h2>
        </div>
        <div className="typography__left-rail">
          <h3>H3</h3>
          <div className="typography__spec">
            <span>Font size: 28px</span>
            <span>Line height: 1.25</span>
            <span>Margin bottom: 27px</span>
            <span>Font: Metropolis</span>
          </div>
        </div>
        <div className="typography__right-rail">
          <h3>Hi, I am a H2. Use me as a title for a section in a page.</h3>
        </div>
        <div className="typography__left-rail">
          <p>Paragraph</p>
          <div className="typography__spec">
            <span>Font size: 18px</span>
            <span>Line height: 1.5</span>
            <span>Margin bottom: 18px</span>
            <span>Font: Lora</span>
          </div>
        </div>
        <div className="typography__right-rail">
          <p>Hi, I am a paragraph.</p>
          <p>
            Authoritatively impact cross-media architectures rather than
            value-added markets. Phosfluorescently coordinate 2.0 opportunities
            with flexible architectures. Assertively streamline customized
            solutions rather than global imperatives. Intrinsicly enable
            multidisciplinary e-services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Typography;
