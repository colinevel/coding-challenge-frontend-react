import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styles from "./UpdateUsers.module.css";

export default withRouter(class UpdateUsers extends Component {

    state = {
        name: "",
        username: "",
        email: "",
        address: {},
        phone: "",
        website: "",
        company: {}
      };

      componentDidMount () {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                console.log("this is my json", json);
                this.setState(json)
            });
      }

    handleSubmit = e => {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PATCH',
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          email: this.state.email,
          address: this.state.address,
          phone: this.state.phone,
          website: this.state.website,
          company: this.state.company
        })
        })
        .then(res => res.json())
        .then(json => console.log("this is my json", json))
        .then(this.props.history.push({
            pathname: '/',
            }))
    }


    handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
        address: {
          ...this.state.address,
          [e.target.name]: e.target.value,
          geo : {
              ...this.state.address.geo,
              [e.target.name]: e.target.value,
          }
        },
        company: {
            ...this.state.company,
            [e.target.name]: e.target.value
          },
      });
    }


    render(){
        if (!this.state.address.geo) {
            return <p>Loading ...</p>;
          }
      
    return (
        <div>
            <h2>Update User</h2>
            <form className={styles.Form} onSubmit={this.handleSubmit}>
                <div className={styles.InputsForm}>
                    <label>Name</label>
                    <input
                    className="input"
                    name="name"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.name} />
                    <label>Username</label>
                    <input
                    className="input"
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.username} />
                    <label>Email</label>
                    <input
                    className="input"
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    value={this.state.email} />
                    <label>Phone</label>
                    <input
                    className="input"
                    name="phone"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.phone} />
                    <label>Website</label>
                    <input
                    className="input"
                    name="website"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.website} />
                    <h3>Address</h3>
                    <label>Street</label>
                    <input
                    className="input"
                    name="street"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.street} />
                    <label>Suite</label>
                    <input
                    className="input"
                    name="suite"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.suite} />
                    <label>City</label>
                    <input
                    className="input"
                    name="city"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.city} />
                    <label>Zipcode</label>
                    <input
                    className="input"
                    name="zipcode"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.zipcode} />
                    <label>Lat</label>
                    <input
                    className="input"
                    name="lat"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.geo.lat} />
                    <label>Lng</label>
                    <input
                    className="input"
                    name="lng"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.address.geo.lng} />
                    <h3>Company</h3>
                    <label>Name</label>
                    <input
                    className="input"
                    name="companyName"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.company.name} />
                    <label>Catchphrase</label>
                    <input
                    className="input"
                    name="catchPhrase"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.company.catchPhrase} />
                    <label>Bs</label>
                    <input
                    className="input"
                    name="bs"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.company.bs} />
                </div>
                <button className={styles.Button} type="submit">Edit User</button>
            </form>
        </div>
    )
    }
})

