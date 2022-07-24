import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleDelete = (objId) => {
    let newObj = {};
    newObj.counters = this.state.counters.filter(
      (counterObj) => counterObj.id !== objId
    );
    this.setState(newObj);
  };

  handleIncrement = (thing) => {
    // Cloning the state
    const newArr = [...this.state.counters];

    const index = newArr.indexOf(thing);

    // Cloning the obj in the state we wish to change (bcs the obj in new arr still refrences its old state obj)
    newArr[index] = { ...thing };

    // Changing this new objects value (obj located in newArr no longer refrences old obj from state)
    newArr[index].value++;

    // Actually modyfing the state
    this.setState({ counters: newArr });
  };

  handleReset = () => {
    const newArr = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters: newArr });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((obj) => {
              return obj.value > 0;
            }).length
          }
        />
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
