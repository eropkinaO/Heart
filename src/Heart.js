import { Component } from "react";
import heartone from './heart1-1.jpg';
import hearttwo from './heart2-2.jpg'

export class Heart extends Component {
    state = {
        CTA: "LIKE US",
        love: heartone
    }

   changePicture(){
        this.setState({CTA: "Thank you. We love you too!", love: hearttwo})
    }

    render() {
        return  <div>
            <h1>{this.state.CTA}</h1>
            <img onClick={() => this.changePicture()} src={this.state.love} alt="heartone" width="70px"/>
        </div>
        
    }
}