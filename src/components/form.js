import React from "react";
import "../styles/form.scss";
const Form = ({}) => (
  <div className="contentForm">
    <div className="title">
      <h2>Schedule your appointment</h2>
    </div>
    <form>
      <div className="colTwo">
        <div>
          <label>Name:</label>
          <input />
        </div>
        <div>
          <label>Last Name:</label>
          <input />
        </div>
      </div>
      <div>
        <label>Phone:</label>
        <input />
      </div>
      <div>
        <label>Email:</label>
        <input />
      </div>
      <div className="checkInput">
        <span>
          <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
          </div>

          <p>
            He leído y acepto el{" "}
            <a className="noticePrivacy" href="#open-modal">
              Aviso de privacidad
            </a>
          </p>
        </span>
      </div>
      <div className="contentButton">
        <button>SEND</button>
      </div>
    </form>
  </div>
);

Form.defaultProps = {};

export default Form;
