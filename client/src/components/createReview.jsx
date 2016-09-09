import React, {Component} from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import axios from 'axios';

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //do these keys need to be the same name as the attribute within the database?
      userEmail: '',
      description:''
    };
    this.submitReview = this.submitReview.bind(this);
  }

  submitReview(e){
    e.preventDefault()
    this.makeReview(this.state);
  }

  makeReview(revObj) {
    console.log('revObj', revObj);
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
    <div className="container">
      <form onSubmit={this.submitReview}>
        <h1>Write a Review</h1>
          <div id='CreateReview'>
            <input placeholder = "Enter User's E-mail" className="form-control" value={this.state.userEmail} onChange = {this.handleChange.bind(this, 'userEmail')}/>
            <input placeholder = "Review User" className="form-control" value={this.state.description}  onChange = {this.handleChange.bind(this, 'description')}/>
            <input type = 'submit' value = 'Create' className='btn btn-primary' onSubmit={this.submitReview}/>
          </div>
      </form>
    </div>
    )
  };

}


export default CreateReview;
