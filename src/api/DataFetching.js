import React from "react";

class DataFetching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://namegame.willowtreeapps.com/api/v1.0/profiles")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          employees: data,
          DataisLoaded: true,
        });
      });
  }

    randomizeArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  render() {
    const { DataisLoaded, employees } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>
        </div>
      );

    this.randomizeArray(employees);

    const shortenedEmployeeList = employees.splice(0, 6);

    const {firstName, lastName} = shortenedEmployeeList[0];

    return (
      <div className="main__grid--wrapper">
        {shortenedEmployeeList.map((employee) => (
          <img
            width="164px"
            height="164px"
            src={employee.headshot.url}
            alt={employee.headshot.alt}
            key={employee.id}
          />
        ))}
      </div>
    );
  }
}

export default DataFetching;
