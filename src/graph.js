import React from "react";
import Plot from "react-plotly.js";

export class Graph extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            y: this.props.y,
            type: "bar"
          },
          {
            x: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            y: this.props.p,
            title: "test",
            type: "bar"
          }
        ]}
        layout={{
          width: 300,
          height: 300,
          title: "Year flow",
          margin: { l: 50, t: 40, r: 10, b: 50 },
          legend: {
            x: 0,
            y: 1
          }
        }}
      />
    );
  }
}
