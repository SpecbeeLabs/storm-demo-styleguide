import "./Form.css";

function Form() {
  return (
    <section className="section section--form">
      <h2 className="section__title">Form elements</h2>
      <div className="section__content">
        <form className="form">
          <div className="form__flex-wrapper">
            <div className="form__item">
              <label className="form__label">Name</label>
              <input
                type="text"
                name="name"
                size="60"
                maxlength="255"
                placeholder="Enter Your Name"
                class="form__text required"
                required="required"
              />
            </div>
            <div className="form__item">
              <label className="form__label">Email</label>
              <input
                type="email"
                name="email"
                size="60"
                maxlength="255"
                placeholder="Enter Your Email"
                class="form__email required"
                required="required"
              />
            </div>
          </div>
          <div className="form__flex-wrapper">
            <div className="form__item">
              <label className="form__label">Website URL</label>
              <input
                name="website"
                required="required"
                placeholder="Enter your Website URL"
                type="url"
                class="form__url"
              />
            </div>
            <div className="form__item">
              <label className="form__label">Phone number</label>
              <input
                name="phone"
                placeholder="Enter your Phone number"
                type="tel"
                class="form__tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>
          <div className="form__flex-wrapper">
            <div className="form__item">
              <label for="quantity" className="form__label">
                Quantity (between 1 and 5):
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
                class="form__number"
              ></input>
            </div>
            <div className="form__item">
              <label for="cars" className="form__label">Choose a car:</label>
              <select name="cars" id="cars" className="form__select">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="form__item-wrapper">
            <label className="form__label">Checkboxes</label>
            <div className="form__item">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                class="form__checkbox"
              />
              <label for="vehicle1" className="form__item-label">
                {" "}
                I have a bike
              </label>
            </div>
            <div className="form__item">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                class="form__checkbox"
              />
              <label for="vehicle2" className="form__item-label">
                {" "}
                I have a car
              </label>
            </div>
            <div className="form__item">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                class="form__checkbox"
              />
              <label for="vehicle3" className="form__item-label">
                {" "}
                I have a boat
              </label>
            </div>
          </div>
          <div className="form__item-wrapper">
            <label className="form__label">Radios</label>
            <div className="form__item">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="form__radio"
              />
              <label for="html">HTML</label>
            </div>
            <div className="form__item">
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
                className="form__radio"
              />
              <label for="css">CSS</label>
            </div>
            <div className="form__item">
              <input
                className="form__radio"
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">JavaScript</label>
            </div>
          </div>
          <div className="form__action">
            <input type="submit" className="button" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
