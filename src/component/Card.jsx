
import Form from "./Form";
import { useSelector } from 'react-redux';
export const Card = () => {
  const formData = useSelector((state) => state.form.formData);
  return (
    <div className="card">
      <div className="card-images">
        <div className="card-front">
          <div className="card-circle">
            <span className="circle-fill">00</span>
            <span className="circle-outline"></span>
          </div>

          <div className="card-content">
            <p className="card-number">{formData.cardNumber}</p>
            <div className="card-name-container">
              <span className="card-name"> {formData.firstName}</span>
              <span className="card-exp-date"> {formData.cardMonth}/{formData.cardYear}</span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="cvc">{formData.cvc}</div>
        </div>
      </div>

      <div>
        <Form/>
      </div>
    </div>
  );
};
