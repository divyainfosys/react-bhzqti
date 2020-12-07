import React from "react";
import styles from "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount = () => {
    const counter = this.props.counter.value;
    return counter === 0 ? "Zero" : counter;
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}
