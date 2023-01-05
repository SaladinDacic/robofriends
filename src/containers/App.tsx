import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

interface IState {
  robots: any[];
  searchfield: string;
}
class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    } as IState;
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event: InputEvent) => {
    const { target } = event;
    this.setState({ searchfield: (target as HTMLInputElement).value });
  };

  render() {
    const { robots, searchfield } = this.state as IState;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
