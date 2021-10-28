import React from 'react'
import './UserRoute.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

import {useState} from "react"
import Contact from '../Contacts/Contact'
import Books from '../Books/Books'
import Home from '../Home/Home';
import Header from '../Header/Header';
import HeaderAdmin from '../Header/HeaderAdmin'
import Footer from '../Footer/Footer';
import BooksAdmin from '../Books/BooksAdmin';
import ContactAdmin from '../Contacts/ContactAdmin';
import Notfound from '../NotFound';
import BooksForm from '../Books/BooksForm'
import BooKdetaills from '../Books/BooKdetaills';
import BooksFormUpdate from '../Books/BooksFormUpdate';
import ProtectedRoute from './ProtectedRoute';
import Login from '../Admin/Login/Login'


function UserRoute() {

        if(window.location.pathname==="/Login"){
          
            return(
              <div>
                  <Login/>
                  <Footer/>
              </div>
            )
        }else if(
            (window.location.pathname==="/Admin/Contact")||
            (window.location.pathname==="/Admin/Books")||
            (window.location.pathname==="/Admin/AddBook")
           ){
          console.log(window.location.pathname); 
            return( 
              
                <Router >
                    <div>
                        <HeaderAdmin className="header"/>
                            <Switch>
                                <ProtectedRoute path="/Admin/Books" component={BooksAdmin} />
                                <ProtectedRoute path="/Admin/Contact" component={ContactAdmin} />
                                <ProtectedRoute path="/Admin/AddBook" component={BooksForm} />
                                <ProtectedRoute path="/Admin/EditBook" component={BooksFormUpdate} />
                                <Route  exact path="/Login" component={Login}/> 
                                <Route  component={Notfound}/> 
                            </Switch>  
                        <Footer/>
                    </div>
                </Router>
            )
        }else{
            return(
                <Router>
                <div >
                  <Header  className="header"/>
                    <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/Books" component={Books}/>
                      <Route exact path="/BookDetails/:id" component={BooKdetaills}/>
                      <Route exact path="/Contact" component={Contact}/>
                      <Route  component={Notfound}/>
                    </Switch>  
                  <Footer/>
                </div>
              </Router>
            )
        }
    }



export default UserRoute
