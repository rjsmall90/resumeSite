import React from "react";
import { Route } from "react-router-dom";


import Home from './component/home/Home'


const AppRouter = () => (
  <div>
    <Route exact path="/" render={()=>( <Home /> )} />
    <Route exact path="/resume" render={()=>( <Resume />)} />   
  </div>
);

export default AppRouter;
