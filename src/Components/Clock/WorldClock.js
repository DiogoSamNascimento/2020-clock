import React from 'react';
import ReactDOM from 'react-dom';

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    fetch("http://worldtimeapi.org/api/timezone/America/Fortaleza")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            date: new Date(result.datetime)
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    //codigo    
    //this.setState({
    //date: new Date(),
    //isLoaded: true
    //});
    //this.state = { date: new Date };
  }

  render() {
    let { isLoaded, date, error } = this.state;
    if (error) {
      return (
        <div className="main">
          <h2>World clock is :/ ({error})</h2>
        </div>)

    }
    else if (!isLoaded) {
      return (
        <div className="main">
          <h2>World clock is({error})</h2>
        </div>)
    }
    else {
      return (
        <div className="main">
          <h2>World clock is ({error})</h2>
        </div>)
    }
  }
}

export default WorldClock;