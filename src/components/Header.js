import React, { Component } from "react";

class Header extends Component {
    handleSubmit = zipcode => {
        // zipcode.then()
    };

    render() {
        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    this.props.apiRequest(this.state.zipcode);
                }}
            >
                <h1>Search by Zipcode</h1>
                <input
                    type="number"
                    onChange={this.props.handleZipcodeSearch}
                />
                <button>Search</button>
            </form>
        );
    }
}

export default Header;
