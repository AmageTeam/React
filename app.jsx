import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={header:'this is header from props',
            value:'', content:'this is content from props', data: 0}
            this.setNewNumber = this.setNewNumber.bind(this);
            this.decrementNumber = this.decrementNumber.bind(this);

    }

 setNewNumber() {
      this.setState({data: this.state.data + 1});
      this.state.data =1;
   }

decrementNumber(){
 this.setState({data: this.state.data - 1})
   	
}

    render (){
        return(
          <div>
              <h1> hello world</h1>
             <Header headerProp={this.state.header}/>
             <Content contentProp={this.state.content}/>

             <button onClick = {this.setNewNumber}>INCREMENT</button>
             <button onClick = {this.decrementNumber}>DECREMENT</button>
           	 <Content1 myNumber = {this.state.data}></Content1>
          </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>{this.props.headerProp}</div>
        );
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>this is content</div>
        );
    }
}

class Content1 extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
   if (newProps.myNumber >=5){
   console.log(" component should not update ", newState, newProps);
     return false;
   }
   else {
   		console.log(" component  should update ", newState, newProps);
     	return true;
    }
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;
