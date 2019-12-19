import React from "react"

export default class BmiCounter extends React.Component
{
    
state = {
    BMI:"",
    Weight:"",
    Height:""
    
}
    
    
constructor(props){
    super(props);
    this.calculateBmi = this.calculateBmi.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    
}
    
render(){
    return(
        <div>
            <h1>BMI Calculator</h1>
            <h5>Your BMI:{this.state.BMI} </h5>
            <div>
                <label>Weight (Kg):</label><br/>
                <input type="text" value={this.state.weight} onChange={this.updateWeight}/><br/>
                <label>Height (Meters):</label><br/>
                <input type="text" value={this.state.height} onChange={this.updateHeight}/><br/>
                <button onClick={this.calculateBmi}>Submit</button>
            </div>
        </div>
    )
}

updateWeight(event) {
    let newWeight = event.target.value;
    this.setState({
        weight:newWeight
    })
    
}

updateHeight(event) {
        let newHeight = event.target.value;
        this.setState({
            height:newHeight
        })
    }

calculateBmi(event){
    
    this.setState({
        BMI: this.state.weight/(this.state.height*this.state.height)
    })
    
}

    
}