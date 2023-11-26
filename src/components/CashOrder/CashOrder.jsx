import React, { useContext, useState } from "react";
import styles from "./CashOrder.module.css";
import { Formik, useFormik, yupToFormErrors } from "formik";
import * as Yup from 'yup'
import { OrderContext } from "../../context/orderContext";
import { CartContext } from "../../context/cartContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function CashOrder() {
  let {cashOrder}=useContext(OrderContext)
  let [loading,setLoading]=useState(false)
  let {idCart,setNumOfProducts}=useContext(CartContext)
  let navigate =useNavigate()
  const validationSchema=Yup.object({
    details:Yup.string().required('Address needed'),
    phone:Yup.string().required('Phone required').matches(/^[0-9]{11}$/,'Phone is not valid'),
    city:Yup.string().required('City must be selected')
  })
  let formik=useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''

    },
    validationSchema,
    onSubmit:handleCart
    
  })

 async function handleCart(values) {
  setLoading(true)
    let response =await cashOrder(idCart,values)
    if(response?.data?.status=='success')
    { 
      setNumOfProducts(0)
      setLoading(false)
      navigate('/allOrders')

    }
    
  }
  return (
    <div className={styles.bgOrder}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className={`col-md-5 ${styles.colStyle}`}>
            <h3 className="mb-2">Personal Info</h3>
            <p className="mb-5">Make sure that the information you will enter is correct.</p>
            <form onSubmit={formik.handleSubmit} className="">
              <label htmlFor="details" className="fs-4"> Address Details:</label>
              <input className="form-control mb-5" name="details" id="details" type="text" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.details}/>
              {formik.errors.details&& formik.touched.details? <p className="alert alert-danger">{formik.errors.details}</p>:''}
              <label htmlFor="phone" className="fs-4">Phone:</label>
              <input className="form-control mb-5" name="phone" id="phone" type="tel" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.phone} />
              {formik.errors.phone&& formik.touched.phone? <p className="alert alert-danger">{formik.errors.phone}</p>:''}
              <label htmlFor="city" className="fs-4">City:</label>
              <select
                        className="form-select"
                        aria-label="Default select example"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}  onBlur={formik.handleBlur}
                      >
                        <option defaultValue></option>
                        <option value="Cairo">Cairo</option>
                        <option value="alex">Alex</option>
                        <option value="giza">Giza</option>
                      </select>
                      {formik.errors.city&& formik.touched.city? <p className="alert alert-danger">{formik.errors.city}</p>:''}
                     <div className="text-center"> {loading?<button type="submit" className={`btn w-25 fs-5 ${styles.btnCaerSubmit} mt-4`}> <i className="fas fa-spinner fa-spin"></i></button>:<button type="submit" className={`btn w-25 fs-5 ${styles.btnCaerSubmit} mt-4`}>Submit</button>}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
