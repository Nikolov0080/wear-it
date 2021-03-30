import React, { Component } from 'react';
import Context from './context/Context';

class PageRouter extends Component {

  componentDidMount() {
    console.log(this.context)

  }

  render() {
    return (
      <div className="App" >
        <button onClick={() => this.s()}>asd</button>
      </div>
    );
  }
}

PageRouter.contextType = Context;

export default PageRouter;