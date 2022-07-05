import axios from "axios"
import {useEffect, useState} from "react"

const useAxios = () => {
    const [products,setProducts] = useState()
    async function requestApi() {
      const response = await axios.get("http://dummyjson.com/products")
      setProducts(response.data)
    }

    useEffect(()=>{

      requestApi()
      },[])
   
  return {products}
}

export default useAxios
