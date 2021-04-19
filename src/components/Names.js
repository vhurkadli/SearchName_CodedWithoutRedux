import React from "react";
// import Details from "./Details";
class Names extends React.Component {
  list = [
    { Grade: 1, name: "Emp_1", id: 21 },
    { Grade: 2, name: "Emp_2", id: 22 },
    { Grade: 3, name: "Emp_3", id: 23 },
    { Grade: 4, name: "Emp_4", id: 24 },
    { Grade: 5, name: "Emp_5", id: 25 },
  ];
  getList = (person) => {
    return (
      <div>
        {/* {console.log("5.1: getlist before click button" + `${person.name}`)} */}
        {person.Grade} :{" "}
        <button onClick={() => this.props.userclicked(person)}>CLick </button>
        <p />
      </div>
    );
  };

  a = this.list.map((each) => {
    // console.log("3.1 get each object from Name comp" + `${each.name}`);
    // return this.props.eachName(each);
    return this.getList(each);
  });

  output = this.props.eachbutton;
  // static getDerivedStateFromProps(props, state) {
  //   this.output = props.eachbutton;
  //   return null;
  // }

  componentDidMount() {
    console.log("comp did mount");
  }

  componentDidUpdate() {
    console.log("before  " + this.output);
    console.log("did update executed");
    this.output = this.props.eachbutton;
    console.log("after  " + this.output);
  }

  render() {
    console.log("3:Names");
    return (
      <div>
        {this.a}
        <h2>SO EACH DETAIL:{this.props.eachbutton}</h2>
        {console.log("4:name component output call is exactly below")}
        {console.log(this.output)}
      </div>
    );
  }
}
export default Names;
