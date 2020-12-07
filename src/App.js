import React from "react";
import NavBar from "./NavBar.jsx";
import Counters from "./Counters.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }
  handleDelete = counterId => {
    const countersUpdated = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: countersUpdated });
  };

  handleIncrement = counter => {
    const countersUpdated = [...this.state.counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index].value++;
    this.setState({ counters: countersUpdated });
  };

  handleReset = () => {
    const countersUpdated = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: countersUpdated });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
