import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    this.getMessage();
  }
  getMessage = () => {
    let url = "http://localhost:9000/test";
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ message: data.message }));
  };
  render() {
    return <div className="App">{this.state.message}</div>;
  }
}
export default App;
