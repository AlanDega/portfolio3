import React, { Component } from 'react';
import { BrowserRouter, Link, Route  } from 'react-router-dom';
import Nodes from './components/nodes/index'

export default class extends Component {
  state = {
    nodes:[]
  }

  async componentDidMount(){
   const nodes = await (await fetch('http://localhost:4000/nodes')).json()
   this.setState({ nodes })
  }

  render (){

    const { nodes } = this.state 

    return(
            <BrowserRouter>
            <>
            <ul>
              <li>
                <Link to='/'>
                 Home 
                </Link>
              </li>
              <li>
                <Link to='/nodes'>
                 Nodes
                </Link>
              </li>
            </ul>
            <Route exact path="/" render={() => <div>Home</div>}/>
            <Route exact path="/nodes" render={
                props => <Nodes {...props} nodes={nodes} />
            }/>
            </>
            </BrowserRouter>
          )

  }
  ;
}

