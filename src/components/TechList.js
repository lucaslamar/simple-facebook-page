import React, { Component } from 'react';

import TechItem from './TechItem';

// import { Container } from './styles';

 class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  componentDidMount() {
    // exexuta assim que o component aparece em tela
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    // executado sempre que houver uma alteração nas props ou estado
   // this.props || this.state
   if (prevState.techs !== this.state.techs ) {
     localStorage.setItem('techs', JSON.stringify(this.state.techs))
   }
  }

  componentWillMount() {
    // quando componente deixa de existir

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      
      <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech}
      />
      <button type="submit">Adicionar</button>
      <ul>
        {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
      </ul>
      </form>
    );
  }
}

export default TechList;
