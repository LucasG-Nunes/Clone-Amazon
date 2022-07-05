import axios from "axios"
import {useEffect, useState} from "react"

const useAxios = () => {
    const [personagens,setPersonagens] = useState()

    const fetchApi = async ()=>{
        const response = await axios.get("https://naruto-api.herokuapp.com/")

        setPersonagens(response.data)
    }
    useEffect(()=>{
        fetchApi()
    })
  return (
    {personagens}
  )
}

export default useAxios
