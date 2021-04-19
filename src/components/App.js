import React from "react";
import Button from "./Button";
import { DeleteAfter } from "./DeleteAfter";
import Details from "./Details";
import InputField from "./InputField";
import Names from "./Names";
class App extends React.Component {
  state = { n: "", i: "" };
  // whatUserEntered = (val) => {
  //   console.log(val);
  //   console.log("above is what user enterred");
  // };
  // whatUserEntered2 = (val) => {
  //   console.log(val);
  //   console.log("above is what user enterred2");
  // };

  render() {
    console.log("1:render is called");
    // this.getList = (person) => {
    //   return (
    //     <div>
    //       {/* {console.log("5.1: getlist before click button" + `${person.name}`)} */}
    //       {person.Grade} :{" "}
    //       <button onClick={() => this.userclicked(person)}>CLick </button>
    //       <p />
    //     </div>
    //   );
    // };
    //============================
    this.userclicked = (person) => {
      console.log("6:after button click");
      return this.setState({ n: person.name, i: person.id });
      // return console.log(person.name);
    };̥
    return (
      <div>
        <h2>Application 1 of 2: Built without using Redux</h2>
        <h4>Click Button Against Each S NO to know Employee details</h4>
        {/* <InputField
          userEnteredText={this.whatUserEntered}
          showText={true}
          inputLabel="THoughtclan"
          // sendTextToButton={this.whatUserEntered2}
        /> */}
        {/* <Button /> */}
        {/* ========================== */}
        {/* <Names eachName={this.getList} /> */}
        {/* {this.state.de} */}
        {console.log("2: now Names is exactly bellow")}
        <Names eachbutton={this.state.n} userclicked={this.userclicked} />
        {/* <Details eachbutton={this.state.n} /> */}
        {/* <Details eachdetail={this.Detail} /> */}
        {/* <Details /> */}
        Name of the staff: {this.state.n}
        <p />
        ID of the Staff: {this.state.i}
      </div>
    );
  }
}

export default App;
