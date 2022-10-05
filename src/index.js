import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
    document.getElementById('root')
  );



class Form_Regex extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {result: '', regex: '', borderColor: 'grey'};
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange = (prop) => (event) => {
      this.setState({ [prop]: event.target.value })
      if (prop == 'result'){
        const aux = new RegExp(this.state.regex);
        console.log(aux.test(event.target.value));
        if(aux.test(event.target.value)){
            this.setState({borderColor: 'green'});
        }
        else{
            this.setState({borderColor: 'red'});
        };
      }
    }
  

  
    render() {
      return (
        <div className="regex"> 
        <label className="row lb-title" > Testador REGEXP </label>
        <label className="row item-label lb-input">Expressão Regular</label>
        <div className="row iten-input">
            <input className="input-box" type="text" value={this.state.regex} onChange={this.handleChange('regex')} />
        </div>
        <label className="row item-label lb-input">String Input</label>
        <div className="row iten-input">
            <input type="text" class={this.state.borderColor} onChange={this.handleChange('result')}></input>
        </div>
        <label className="row lb-title2"> Feito por :  </label>
        <label className="row lb-names">Gabriel Mantovani | Hariã Othon | Rafael Rosseto</label>
        
        </div>
      );
    }
  }
  
    root.render(<Form_Regex />);
    