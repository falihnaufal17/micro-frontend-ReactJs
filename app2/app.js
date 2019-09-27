import React, { Component } from 'react';
import {
  connect
} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    return
  }

  render() {
    return (
      <div>
        Hello App2 World
      <div>
          <p>
            Message from app3: <span>{this.props.txt3}</span>
          </p>
        </div>
        <input
          defaultValue={this.props.text}
          onChange={val => this.props.saveTxt2(val.currentTarget.value)}
        />
      </div>
    )
  }
}

const mapState = s => {
  return {
    txt3: s.appManager.app3Txt,
  };
};

const mapDispatch = d => {
  return {

    saveTxt2: s => d(function () {
      return {
        type: 'SAVE_APP2_TXT',
        payload: s
      };
    }()),

  };
};

export default connect(mapState, mapDispatch)(App);