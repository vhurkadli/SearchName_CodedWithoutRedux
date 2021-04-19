import React from "react";

class Details extends React.Component {
  output = this.props.eachbutton;

  render() {
    return (
      <div>
        <h2>SO EACH DETAIL:{this.output}</h2>
        {console.log(this.output)}
      </div>
    );
  }
}

export default Details;
