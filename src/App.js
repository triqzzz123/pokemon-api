import React, { Component } from 'react';
import Pokemon from './Pokemon'

const urls=[
    'https://pokeapi.co/api/v2/pokemon/ditto/'
]
  
class App extends Component {

    constructor() {
        super();
        this.state = { //things that can change or affect our app
        }
    }

    getData = async function () {
        const [resp] = await Promise.all(urls.map(async function (ur){
          const fet=await fetch(ur);
          return await fet.json();
        }));
        console.log(resp);
        this.setState({data: resp.name})
      }      

    componentDidMount() {
        this.getData()
        console.log(this.state)
    }

    render() {
        return (<Pokemon name={this.state.data}/>);
    }

};

export default App;
