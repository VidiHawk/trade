import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { memo } from "react";

class HomeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "fx-chart",
          data: [
            "8",
            "7",
            "5",
            "6",
            "8",
            "9",
            "7",
            "5",
            "5",
            "7",
            "8",
            "7",
            "5",
            "6",
            "7",
            "5",
            "8",
            "6",
            "5",
            "7",
            "8",
            "7",
            "5",
            "6",
            "8",
            "9",
            "8",
            "6",
            "5",
            "7",
          ],
        },
      ],
      options: {
        chart: {
          height: 100,
          type: "line",
          zoom: {
            enabled: false,
          },

          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
          colors: this.props.color,
        },
        grid: {
          show: false,
        },
        tooltip: {
          enabled: false,
          x: {
            format: "dd MMM yyyy",
          },
        },
        xaxis: {
          categories: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D",
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D",
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
          ],
          axisBorder: {
            show: false,
          },

          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      series: [
        {
          data: props.historicalData,
        },
      ],
    };
  }
  //   static getDerivedStateFromProps(props) {
  //   return {
  //     series: [
  //       {
  //         data: [ "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1" ,"1", "1", "1", "1", "8", "9", "8", "6", "5", "7" ],
  //       },
  //     ],
  //   };
  // }

  render() {
    // console.log("data: ", this.props.historicalData)

    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height={100}
      />
    );
  }
}

export default memo(HomeChart);
