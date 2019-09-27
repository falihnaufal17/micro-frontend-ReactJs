import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    return
  }
  render() {
    console.log('this is props: ', this.props)
    return (
      <div>
        Hello App3 World
       <div>
          <p>
            Message from app2: <span>{this.props.txt2}</span>
          </p>
        </div>
        <input
          defaultValue={this.props.text}
          onChange={v => this.props.saveTxt3(v.currentTarget.value)}
        />
      </div>
    )
  }
}

const mapStateToProps = s => {
  return {
    txt2: s.appManager.app2Txt,
  };
};

const mapDispatchToProps = d => {
  return {

    saveTxt3: s => d(function () {
      return { type: 'SAVE_APP3_TXT', payload: s };
    }()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
