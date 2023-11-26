import axios from "axios";
import { createContext } from "react";
import { CartContext } from "./cartContext";
import { useContext } from "react";

export const CategoryContext =createContext();
export function  CategoryContextProvider(props) {
   let{headers}=useContext(CartContext) 
  async function getCategory(id) {
     try{
        let data=axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`,{
            headers:headers
           })
         
        return data 
     }
     catch(err){
        console.log(err);
        return err
     }
  }
  async function getSubCategory(id) {
   try{
      let data=axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,{
          headers:headers
         })
       
      return data 
   }
   catch(err){
      console.log(err);
      return err
   }
}


    return (
        < CategoryContext.Provider value={{getCategory,getSubCategory}}>
         {props.children}
    </ CategoryContext.Provider>
    )
}
