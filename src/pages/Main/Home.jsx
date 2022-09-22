import React from 'react'
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <div><Outlet/></div>
    </div>
  )
}

export default Home
