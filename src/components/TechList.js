import React, { Component } from 'react';

// import { Container } from './styles';

 class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node',
      'React',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }
  
  handleSubimit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
    

  }

  render() {
    return (
      <form onSubmit={this.handleSubimit}>
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>
      <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default TechList;
