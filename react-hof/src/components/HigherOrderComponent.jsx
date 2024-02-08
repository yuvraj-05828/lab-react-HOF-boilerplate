import React, { Component } from "react";
import "../App.css";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByUserType = (userType) => {
    const data = this.state.userData.filter(
      (item) => item.user_type === userType
    );
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsStartWithJ = () => {
    const data = this.state.userData.filter(
      (item) => item.name.charAt(0) === "J"
    );
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByAgeRange = () => {
    const data = this.state.userData.filter(
      (item) => item.age > 28 && item.age <= 50
    );
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  calculateTotalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter(
      (item) => item.user_type === "Developer"
    );
    const totalExperience = designers.reduce(
      (total, item) => total + item.years,
      0
    );
    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
        <div className="sub">
          <h2>Display all items</h2>
          <div className="display-box">
            <ul>{this.renderItems()}</ul>
          </div>
        </div>

        <div className="sub">
          <h2>Data based on UserType(Designer) </h2>
          <div className="display-box">
            <ul>{this.renderItemsByUserType("Developer")}</ul>
          </div>
        </div>

        <div className="sub">
          <h2>Filter all data starting with J </h2>
          <div className="display-box">
            <ul>{this.renderItemsStartWithJ()}</ul>
          </div>
        </div>

        <div className="sub">
          <h2>
            Filter all data based on age greater than 28 and age less than or
            equal to 50
          </h2>
          <div className="display-box">
            <ul>{this.renderItemsByAgeRange()}</ul>
          </div>
        </div>

        <div className="sub">
          <h2>Total experience of Designers</h2>
          <div className="display-box">
            <p>Total Years: {this.calculateTotalExperienceOfDesigners()}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;