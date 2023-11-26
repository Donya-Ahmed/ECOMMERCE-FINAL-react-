import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";
import { CartContext } from "./cartContext";
export const OrderContext=createContext()
export function OrderContextProvider(props) {
    let [orders,setOrders]=useState([])
    let{headers}=useContext(CartContext) 
   async function cashOrder(idCart,shippingAddress) {
        try{
            let data =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${idCart}`,{
                shippingAddress:shippingAddress
            },{
                headers:headers  
            })
            return data
        }
        catch (err){
            return err
        }
      
    }
    async function getAllOrder() {
        try{
            let data =await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
            if(data?.data){
                setOrders(data.data.data)
            }
            return data
        }
        catch (err){
            return err
        }
    }
    return <OrderContext.Provider value={{cashOrder , getAllOrder,orders}}>
       {props.children}
    </OrderContext.Provider>
}