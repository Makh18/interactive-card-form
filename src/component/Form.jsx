
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { updateFormData } from '../store/formSlice'
const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Required"),
      cardNumber: Yup.number()
        .typeError("wrong format, number only")
        .required("Required"),
      cardMonth: Yup.number().required("can't be blank"),
      cardYear: Yup.number().required("can't be blank"),
      cvc: Yup.string()
      .max(3, "must be 3 number")
      .required("can't be blank")
    }),
    onSubmit:(values) => {
      dispatch(updateFormData(values));
    },
    })
    /* onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }, */

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">cardholder name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className={`${formik.errors.firstName && formik.touched.firstName ? 'input-error' : ''}`}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="cardNumber">Card Number</label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="text"
        pattern="[0-9]*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cardNumber}
        className={`${formik.errors.cardNumber && formik.touched.cardNumber ? 'input-error' : ''}`}
      />
      {formik.touched.cardNumber && formik.errors.cardNumber ? (
        <div className="error">{formik.errors.cardNumber}</div>
      ) : null}
      <div className="exp-date-cvc">
        <div  className="exp-date">
          <div>
          <label htmlFor="cardMonth">exp date</label>
          <input
            id="cardMonth"
            name="cardMonth"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardMonth}
            className={`${formik.errors.cardMonth && formik.touched.cardMonth ? 'input-error' : ''}`}

          />
          {formik.touched.cardMonth && formik.errors.cardMonth ? (
            <div className="error">{formik.errors.cardMonth}</div>
          ) : null}
          </div>
          <div>
          <label htmlFor="cardYear">(mm/yy)</label>
          <input
            id="cardYear"
            name="cardYear"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardYear}
            className={`${formik.errors.cardYear && formik.touched.cardYear ? 'input-error' : ''}`}
          />
          {formik.touched.cardYear && formik.errors.cardYear ? (
            <div className="error">{formik.errors.cardYear}</div>
          ) : null}
          </div>
          
        </div>

        <div>
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            name="cvc"
            type="text"
            maxLength="3"
            pattern="[0-9]*"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cvc} 
            className={`${formik.errors.cvc && formik.touched.cvc ? 'input-error' : ''}`}
           
          />
          {formik.touched.cvc && formik.errors.cvc ? (
            <div className="error">{formik.errors.cvc}</div>
          ) : null}
        </div>
      </div>

      <button className="btn" type="submit" >Confirm</button>
    </form>
  );
};

export default Form;
