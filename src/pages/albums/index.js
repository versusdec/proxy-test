import React  from 'react';
import { Link, useNavigate } from "react-router-dom";
import { NumberParam, useQueryParams } from "use-query-params";
import { useAlbums } from "../../hooks/use-albums";
import back from "/public/assets/img/back.png"

export const Albums = () => {
  const [query] = useQueryParams({
    userId: NumberParam
  });
  const {userId} = query
  let navigate = useNavigate();
  
  const {data} = useAlbums(userId)
  
  return <main>
    <header>
      <div className="back" onClick={()=>navigate(-1)}><img src={back} alt="Back"/></div>
      <h1>albums</h1>
    </header>
    <section className="list posts albums">
      {data && data.map(({id, title, body}, i) => {
        
        return <Link to={`/albums/${id}`} key={i}>
          <div className="item">
            <h3 className={''}>{title}</h3>
          </div>
          <hr/>
        </Link>
      })}
    </section>
  </main>
}
