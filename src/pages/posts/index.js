import React  from 'react';
import { Link, useNavigate } from "react-router-dom";
import { NumberParam, useQueryParams } from "use-query-params";
import { usePosts } from "../../hooks/use-posts";
import back from "/public/assets/img/back.png"

export const Posts = () => {
  const [query] = useQueryParams({
    userId: NumberParam
  });
  const {userId} = query
  let navigate = useNavigate();
  
  const {data} = usePosts(userId)
  
  return <main>
    <header>
        <div className="back" onClick={()=>navigate(-1)}><img src={back} alt="Back"/></div>
      <h1>posts</h1>
    </header>
    <section className="list posts">
      {data && data.map(({id, title, body}, i) => {
        
        return <Link to={`/posts/${id}`} key={i}>
          <div className="item">
            <h3 className={''}>{title}</h3>
            <p>{body}</p>
          </div>
          <hr/>
        </Link>
      })}
    </section>
  </main>
}
