import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { Home } from './pages/home';
import { Posts } from "./pages/posts";
import { Post } from "./pages/posts/post";
import { Albums } from "./pages/albums";
import { Album } from "./pages/albums/album";


import "./global.css"

function App() {
  return (<>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/albums/" element={<Albums/>}/>
        <Route path="/albums/:id" element={<Album/>}/>
      </Routes>
    </QueryParamProvider>
  </>);
}

export default App;

