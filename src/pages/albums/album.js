import React from "react";
import back from "../../../public/assets/img/back.png";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useAlbum } from "../../hooks/use-album";

export const Album = ()=>{
  const navigate = useNavigate()
  const {id} = useParams()
  
  const {data} = useAlbum(id)
  
  return <main>
    <header>
      <div className="back" onClick={()=>navigate(-1)}><img src={back} alt="Back"/></div>
      <h1>{data && data.title}</h1>
    </header>
  </main>
}