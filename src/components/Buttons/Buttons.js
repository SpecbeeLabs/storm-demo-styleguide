import "./Buttons.css";

function Buttons() {
  return (
    <section className="section buttons">
      <h2 className="section__title">Buttons</h2>
      <div className="section__content">
        <h3>Default Buttons</h3>
        <div className="buttons__default d-grid d-grid__4">
          <div className="buttons__item">
            <a href="/" className="button button--default">
              Default button
            </a>
          </div>
          <div className="buttons__item">
            <button>Default Button</button>
          </div>
        </div>
        <div className="sp4"></div>
        <h3>Primary Buttons</h3>
        <div className="buttons__primary d-grid d-grid__4">
          <div className="buttons__item">
            <a href="/" className="button button--primary">
              Primary button
            </a>
          </div>
          <div className="buttons__item">
            <button className="button button--primary">Primary Button</button>
          </div>
        </div>
        <div className="sp4"></div>
        <h3>Secondary Buttons</h3>
        <div className="buttons__secondary d-grid d-grid__4">
          <div className="buttons__item">
            <a href="/" className="button button--secondary">
              Secondary button
            </a>
          </div>
          <div className="buttons__item">
            <button className="button button--secondary">
              Secondary Button
            </button>
          </div>
        </div>
        <div className="sp4"></div>
        <h3>Text Buttons</h3>
        <div className="buttons__text d-grid d-grid__4">
          <div className="buttons__item">
            <a href="/" className="button button--text">
              Text button
            </a>
          </div>
          <div className="buttons__item">
            <button className="button button--text">
              Text Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buttons;
