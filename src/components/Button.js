import React from "react";
import InputField from "./InputField";

class Button extends React.Component {
  //   constructor() {
  //     state = { name: "CLICK" };
  //   }
  state = { name: "CLICK" };
  getText = (a) => {
    this.setState({ name: a });
    console.log(this.state.name);
  };

  render() {
    return (
      <>
        {/* <button onClick={<InputField userEnteredText={this.getText} />} /> */}
        <button>{this.state.name}</button>
        <InputField
          userEnteredText={this.getText}
          inputLabel="vinayak"
          //   showText={false}
          //   userEnteredText={this.getText}
        />
      </>
    );
  }
}

export default Button;
