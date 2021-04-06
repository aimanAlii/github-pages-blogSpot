import React from 'react';
import AddPost from './addPost';
import Home from './home';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import SavedPost from './savedPost';
export default function Blog (){
    return(

        <BrowserRouter>
         <div className = "blog">
         <h1>Personal Blog</h1>

         <Link to="/"> Home </Link>

         <Link to="/addpost"> Add New Post </Link>

         <Link to="/savedPost"> Saved Posts </Link>

         <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/addPost">
              <AddPost/>
            </Route>

            <Route exact path="/savedPost">
              <SavedPost/>
            </Route>

         </Switch>

         

         </div>
        </BrowserRouter>
    );
   
}