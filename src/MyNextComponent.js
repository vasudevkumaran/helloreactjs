import React from 'react';


export class MyNextComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {inputFieldValue:'Hello'}
        // this.onTextInputChange = this.onTextInputChange.bind(this);
    }
    /*
    onTextInputChange(event){
        this.setState({inputFieldValue:event.target.value});
        console.log(event.target.value); 
    }
    */

    
    
    onTextInputChange = (event) => {
        this.setState({inputFieldValue:event.target.value});
    }
    
    

    render(){
        return <div>
            <input type="text" value={this.state.inputFieldValue} onChange={this.onTextInputChange}/>
            <p>{this.state.inputFieldValue}</p>
        </div>
    }
}