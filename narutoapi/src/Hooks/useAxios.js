import axios from "axios"
import {useEffect, useState} from "react"


export const useAxios = () => {
    const [products,setProducts] = useState()
    useEffect(()=>{
      async function fetchProducts(){
        const res = await axios.get("http://dummyjson.com/products")
        const data = await res.data
        setProducts(data)
      }
      fetchProducts()
      },[])
  return {products}
}

export const useAxiosCategories = ()=>{
  const [categories,setCategories] = useState()
  useEffect( ()=>{
    async function fetchCategories(){

      const res = await axios.get('http://dummyjson.com/products/categories')
      const data = await res.data
      setCategories(data)
    } 
    fetchCategories()
  },[])
return{categories}
}   

