import React from "react";
class InputField extends React.Component {
  state = { enter: "" };

  inputfieldM1 = (e) => {
    this.setState({ enter: e.target.value });
    this.props.userEnteredText(this.state.enter);
    // this.props.sendTextToButton(this.state.enter);
    // this.props.sendTextToButton(e.target.value);
  };

  render() {
    return (
      <div>
        {/* {this.props.showText ? "hjdhfjdh Text" : "no text"} */}
        {this.props.inputLabel}
        <input
          value={this.state.enter}
          // onChange={((e) => this.inputfieldM1(e); this.m2(e))}
          onChange={this.inputfieldM1}
        />
        {/* <button onClick={this.buttonClicked} /> */}
      </div>
    );
  }
}

export default InputField;
