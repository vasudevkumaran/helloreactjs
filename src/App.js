import React from 'react';
import { MyComponent } from './MyComponent';
import { MyNextComponent } from './MyNextComponent';

export default class App extends React.Component{

  render(){
    return <div>
      <h1>Hello world</h1>
      <MyComponent inputValue="Value passed from App Component" nextValue="It works"/>
      <MyNextComponent/>
    </div>
  }

}
