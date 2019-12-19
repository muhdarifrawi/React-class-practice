
import React from "react"

export default class Counter extends React.Component
{
    state = {
        count:0
    }
    
    styles = {
        padding:"10px",
        margin:"10px",
        border:"black solid 1px"
    }
    
    constructor(props) {
        super(props);
        
        // binding
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    
    render() {
        return (
            <div>
                <div style={this.styles}>
                 {this.state.count}
                </div>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
    
    increaseCount() {
        this.setState({
            count: this.state.count + 1
        })   
    }
    
    decreaseCount() {
        this.setState({
            count: this.state.count - 1
        })   
    }
    
    resetCount() {
        this.setState({
            count: 0
        })   
    }
}
