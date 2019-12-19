import React from "react"
import Counter from './Counter.js'
import BmiCounter from './BMI.js'

const styles = {
  box: {
    height:'150px',
    width:'150px',
    border:'black solid 1px',
    margin:'10px'
  }
}

export default class Box extends React.Component
{
     state = {
     colour:'red'
   }
   
   constructor(props) {
     super(props);
     this.toggleBox = this.toggleBox.bind(this);
   }
  
   render() {
     return (
    <div>
    <div>
      <div
        style={{...styles.box, backgroundColor:this.state.colour}}
        onMouseOver={this.toggleBox} onMouseOut={this.toggleBox}/>
    </div>
    <Counter/>
    <BmiCounter/>
    </div>
    );
  }
  
  toggleBox(){
      
      if (this.state.colour == 'blue'){
        this.setState({
          colour:'red'
        })
        
      }
      else {
        this.setState({
          colour:'blue'
        })
      
      }
  }
  
}