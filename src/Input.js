import { Component } from "react";


export class Input extends Component {


    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return <input type="text" onChange={this.handleChange}/>
    }
}