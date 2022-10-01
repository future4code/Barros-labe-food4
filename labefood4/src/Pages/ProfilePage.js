import React from "react";
import { ProfilePageVazia } from "../Style/GlobalStyle";
import { useEffect, useState } from "react";
import axios from "axios";



export default function ProfilePage(url, token) {

   const [perfilAtualizado, setPerfilAtualizado] = useState([])
    const [data, setData] = useState([])
    const [err, setErr] = useState([])

   useEffect(()=>{
    setPerfilAtualizado()
    axios.get(url,{
        herders:{
            auth:token
        }
    } )

   .then((results)=>{
    setPerfilAtualizado()
  
    setData(results.data)
   })
   .cath((err)=>{
    setPerfilAtualizado()
    setErr(err.response.data)
   },[])

   })


    return (
     
      <ProfilePageVazia>
              [perfilAtualizado, err, ]

      </ProfilePageVazia>

    )
}
