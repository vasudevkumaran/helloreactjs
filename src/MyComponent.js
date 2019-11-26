import React from 'react';

export class MyComponent extends React.Component{

    render(){
        return <div>
            <h3>{this.props.inputValue}</h3>
            <h4>{this.props.nextValue}</h4>
        </div>
        
        
    }
}