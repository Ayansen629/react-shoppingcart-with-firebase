import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fullname:"",
            phone:"",
            email:"",
            message:""
             
        }
    }
    inputEventHandler=(event)=>{
        this.setState({
            fullname:event.target.value,
        
        })
    }
    messageEventHandler=(event)=>{
        this.setState({
            
        message:event.target.value,

        })
    }
    phoneEventHandler=(event)=>{
        this.setState({
            
        phone:event.target.value,
       

        })
    }
    emailEventHandler=(event)=>{
        this.setState({
            
        email:event.target.value,
        

        })
    }
    fromSubmitHandler=(event)=>{

        event.preventDefault();
        alert(`My name is ${this.state.fullname} .My mobile number is ${this.state.phone} and email is ${this.state.email}, Here is what I watn to say ${this.state.message}`);



    }
    render() {
        return (
            <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={this.fromSubmitHandler}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={this.state.fullname}
                  onChange={this.inputEventHandler}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.phoneEventHandler}
                  placeholder="Enter your mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={this.state.email }
                  onChange={this.emailEventHandler}
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={this.state.message}
                  onChange={this.messageEventHandler}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
        )
    }
}

export default Contact
