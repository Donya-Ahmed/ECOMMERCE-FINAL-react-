import React, { useContext, useEffect, useState } from 'react'
import './AllOrders.css'
import { OrderContext } from '../../context/orderContext'

export default function AllOrders() {
  let[ allOrders,setAllOreder]=useState([])
 let { getAllOrder}=useContext(OrderContext)
async function getOrders() {
  let response =await  getAllOrder()
 if(response?.data?.data){
  console.log(response.data.data);
  setAllOreder(response.data.data)
 }
 }
 useEffect(()=>{
  getOrders()
 })
  return<>
   <div id="particle-container">
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>
	<div className="particle"></div>

  
</div>
<div className='container pt-55 d-flex justify-content-center'>
<table className="table table-hover w-50 tableZ">
  {allOrders.length>0?<>
    <thead>
    <tr className='table-success'>
      <th scope="col" className='text-main'>shipping Address</th>
      <th scope="col" className='text-main'>Phone Number</th>
      <th scope="col" className='text-main'>Tax Price</th>
      <th scope="col" className='text-main'>Shipping Price</th>
      <th scope="col" className='text-main'>Total Order Price</th>
      <th scope="col" className='text-main'>Payment Method Type</th>
    </tr>
  </thead>
  <tbody>
    {allOrders.slice(0,5).map((order)=><tr className='py-5'>
      <td>{order.shippingAddress?.details?order.shippingAddress?.details:''}{order.shippingAddress?.details?",":''} {order.shippingAddress?.city?order.shippingAddress?.city:''}</td>
      <td>{order.shippingAddress?.phone}</td>
      <td>{order.taxPrice}</td>
      <td>{order.shippingPrice}</td>
      <td>{order.totalOrderPrice}</td>
      <td>{order.paymentMethodType}</td>
    </tr>)}
 
  </tbody>
  </>:''}
</table>
  </div>
  </>
}
