import React, { useCallback, useEffect, useState } from 'react';
import { useUsers } from "../../hooks/use-users";
import { Link } from "react-router-dom";
import { Table } from "../../elements/table";
import descending from "/public/assets/img/sort.png"
import ascending from "/public/assets/img/sort-descending.png"
import posts from "/public/assets/img/post.png"
import albums from "/public/assets/img/gallery.png"
import { StringParam, useQueryParams } from "use-query-params";

export const Home = () => {
  const [list, setList] = useState(null)
  const [query, setQuery] = useQueryParams({
    sort: StringParam,
    user: StringParam
  });
  const {sort, user} = query;
  const [sorted, setSorted] = useState(sort)
  const [username, setUsername] = useState(user)
  
  const {data} = useUsers()
  
  const sortByUser = useCallback((list, user) => {
    return [...list].filter(item => {
      return item.name.toLowerCase().includes(user.toLowerCase())
    })
  }, [])
  
  const sortByOrder = useCallback((list, order) => {
    return [...list].sort((a, b) => {
      return (order === 'asc' ? a.id - b.id : b.id - a.id)
    });
  }, [])
  
  useEffect(() => {
    if (data) {
      let list = [...data]
      if (user) {
        list = sortByUser(list, user)
      }
      if (sort) {
        list = sortByOrder(list, sort)
      }
      setList(list)
    }
  }, [query, data])
  
  const handleSort = useCallback((type) => {
    setQuery({sort: type})
    setSorted(type)
  }, [])
  
  const handleUser = useCallback((val) => {
    setUsername(val)
  }, [])
  
  useEffect(() => {
    setQuery({user: username})
  }, [username])
  
  return <main>
    <nav className={'nav'}>
      <input type="text"
             placeholder={'Search by username'}
             value={user || ''}
             onChange={(e) => {
               handleUser(e.target.value)
             }}
      />
      <div className="sort-wrap ">
        <button className={`sort ${sorted === 'asc' ? 'active' : ''}`}
                title={'Ascending'}
                onClick={() => {
                  handleSort('asc')
                }}><img src={ascending} alt="Ascending"/></button>
        <button className={`sort ${sorted === 'desc' ? 'active' : ''}`}
                title={'Descending'}
                onClick={() => {
                  handleSort('desc')
                }}><img src={descending} alt="Descending"/></button>
      </div>
    </nav>
    <header>
      <h1 className={''}>Users</h1>
    </header>
    <div className="list">
      <Table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {list && list.map(({id, name, email}, i) => {
          return <tr className="item" key={i}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td align={"right"}>
              <div className={'actions'}>
                <Link to={`/posts/?userId=${id}`}>
                  <div className={'action-btn'}><img src={posts} alt="Posts"/></div>
                </Link>
                <Link to={`/albums/?userId=${id}`}>
                  <div className={'action-btn'}><img src={albums} alt="Albums"/></div>
                </Link>
              </div>
            </td>
          </tr>
        })}
        {!list && <tr>
          <td colSpan={4} style={{textAlign: 'center'}}>Nothing found</td>
        </tr>}
        </tbody>
      </Table>
    </div>
  </main>
}
