import React, { Component } from "react";
import Styles from "../../css/Counter.module.css";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 42,
    };
    this.handleClicAdd = this.handleClicAdd.bind(this);
  }

  handleClicAdd = (e) => {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className={Styles.counterContent}>
        <p className={Styles.title}>Counter class component</p>
        <h2 className={Styles.counter}> {counter} </h2>
        <button className={Styles.counterButton} onClick={this.handleClicAdd}>
          Clic
        </button>
      </div>
    );
  }
}
