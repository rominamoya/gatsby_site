import React, { Component } from "react";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        this.setState({
          results: data.results,
        });
      });
  }

  render() {
    return (
      <div className="about-container">
        <p>Pokemon names</p>
        {
          this.state.results.length ?
            <ul>
            {
              this.state.results.map((result) => {
                return <li>
                  <a href={result.url} >{result.name}</a>
                </li>
              })
            }
            </ul>
            :
            <div>Loading...</div>
        }
      </div>
    );
  }
}

export default Data;