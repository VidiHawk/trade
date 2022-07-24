import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { memo } from "react";
import { chartInitData, xaxisInitData } from "../../helpers/charts-config";

class HomeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "fx-chart",
          data: chartInitData,
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
          categories: xaxisInitData,
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

  render() {
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
