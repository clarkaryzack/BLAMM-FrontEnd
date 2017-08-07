import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserTypeDropdown extends Component {

  render() {
    console.log(this.props);
    const match = this.props.match;
    return (
      <select>

        <option>
          <Link to={"/admin/productsList"}>
          Admin
          </Link>
        </option>


        <option>
          <Link to={"/user/productsList"}>
          User
          </Link>
        </option>

      </select>
    )
  }
};

export default UserTypeDropdown;
