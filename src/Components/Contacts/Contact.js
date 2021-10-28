import './Contact.css'
import axios  from 'axios';
import { Component, useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';


class Contact extends Component{
   
    state = {
        username:'',
        email:'',
        subject:'',
        message:'',
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
       
    
        const Contact = {
            username: this.state.username,
            email:this.state.email,
            subject: this.state.subject,
            message: this.state.message
          };
        

        axios.post("http://localhost:5000/Contacts/AddContact/", Contact)
        .then(res=>{
            console.log(res);
            console.log(Contact)
            //console.log(res.data);
        })
        this.props.history.push("/Books");
      
    }

render(){
    return(
        <div id="container__form">
           
            <div class="container__contact">
                <div class="row">
                    <div class="text-center">                        
                    <h2>CONTACT</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <form id="contact-form" class="form"  onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label class="form-label" for="name">Your Name</label>
                                <input type="text" class="form-control" id="name" name="username" placeholder="Your name" tabindex="1" required  onChange={this.handleChange}/>
                            </div>                            
                            <div class="form-group">
                                <label class="form-label" for="email">Your Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required  onChange={this.handleChange}/>
                            </div>                            
                            <div class="form-group">
                                <label class="form-label" for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3" onChange={this.handleChange}/>
                            </div>                            
                            <div class="form-group">
                                <label class="form-label" for="message">Message</label>
                                <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required onChange={this.handleChange}></textarea>                                 
                            </div>
                            <div class="text-center">
                                <button type="submit" id="btnSubmit" class="btn btn-start-order">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          
            
        </div>
    )
}
   
}
export default Contact;