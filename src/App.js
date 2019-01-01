import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
    state = {
        city: "",
        zipcode: null
    };

    handleZipcodeSearch = event => {
        this.setState({
            zipcode: event.target.value
        });
    };
    apiRequest = zipcode => {
        console.log(zipcode);
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/forecast?zip=10016,us&APPID=5ff3c2d31df65ddb5baf09addb40c4d7`
            )
            .then(data => {
                console.log(data.data.city.name);
                this.setState({
                    city: data.data.city.name
                });
            });
    };

    // componentDidMount() {}
    render() {
        return (
            <div className="App">
                <Header
                    handleZipcodeSearch={this.handleZipcodeSearch}
                    apiRequest={this.apiRequest}
                />
                <Main city={this.state.city} />
            </div>
        );
    }
}

export default App;

// 5ff3c2d31df65ddb5baf09addb40c4d7
