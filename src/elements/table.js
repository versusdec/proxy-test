import React from "react";

export const Table = ({children}) => {
  
  return <div style={{overflowX: 'auto'}}>
    <table style={{width: '100%'}}>{children}</table>
  </div>
}