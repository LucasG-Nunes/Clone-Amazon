import axios from "axios"
import {useEffect, useState, useContext} from "react"
import { ContextInput } from "../Context/ContextInput"
export const useAxios = () => {
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

export const useAxiosCEP = ()=>{
  const [cep,setCEP] = useState()
  const {input} = useContext(ContextInput)
  if(!input){
    console.log('Está vazio')
  }
  async function requestCEP(){
    const response = await axios.get(`https://viacep.com.br/ws/${input}/json`)  
    setCEP(response.data)
  }
  useEffect(()=>{
    requestCEP()
    })

    return {cep}
}

