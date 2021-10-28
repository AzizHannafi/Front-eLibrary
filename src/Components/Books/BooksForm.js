import React from 'react'
import './BooksForm.css'
import { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';

class BooksForm extends React.Component {
    
    state = {
        title:'',
        description:'',
        author:'',
        image:'',
        price:'',
    }
    
    
    handleChange = event =>{
        this.setState(
               {
                [event.target.name] : event.target.value
               }
            );
    }


    handleSubmit = event => {
      
        event.preventDefault();
       
    
        const Book = {
            title: this.state.title,
            description:this.state.description,
            author: this.state.author,
            image: this.state.image,
            price: this.state.price,
          };
        

        axios.post("http://localhost:5000/Books/AddBook", Book,
                   { headers:{
                        "x-access-token": localStorage.getItem("token")
                    }})
        .then(res=>{
            console.log(res);
            console.log(Book)
          
        })
        this.props.history.push("/Admin/Books");
      
    }

   render(){
       return(
        <div className="form__container">
        <div className="col">
                <div className="text-center">                        
                    <h2>ADD BOOK</h2>
                </div>
        </div>
      <form onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="col">
            <input type="text" id="inpute" className="form-control" placeholder="Title"  name="title" onChange={this.handleChange} required/>
            </div>
            <div className="col">
            <input type="text"  id="inpute" className="form-control" placeholder="Image URL" name="image" onChange={this.handleChange} required/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <input type="text" id="inpute" className="form-control" placeholder="Author" name="author" onChange={this.handleChange} required/>
            </div>
            <div className="col">
            <input type="text" id="inpute" type="number"  min="0" className="form-control" placeholder="Price"  name="price" onChange={this.handleChange} required/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <textarea type="text" id="inpute" className="form-control" placeholder="Description" name="description" onChange={this.handleChange} required/>
            </div>
            
        </div>

        <div className="row">
            <div className="col">
            <button type="submit" id="btn" className="btn btn-success" >Add</button>
            </div>
            <div className="col">
            <button type="reset" id="btn" className="btn btn-danger">Cancel</button>
            </div>
        </div>
       </form>
    </div>
       )
   }
}

export default withRouter(BooksForm) 
