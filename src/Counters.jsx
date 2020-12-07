import React from "react";
import Counter from "./Counter.jsx";

export default class Counters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.props.counters.map(counterobj => (
          <Counter
            key={counterobj.id}
            counter={counterobj}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}
