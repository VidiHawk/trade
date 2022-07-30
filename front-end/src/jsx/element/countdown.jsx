import React from "react";

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: Number(this.props.initial),
    };

    this.intervalRef = React.createRef();
  }

  componentDidMount() {
    this.intervalRef.current = setInterval(() => {
      if (this.state.count > 0) {
        this.props.fxCallBack(this.state.count);
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer = () => {
    clearInterval(this.intervalRef.current);
  };

  render() {
    return (
      <div className="d-flex justify-content-between form-label">
        <div className="text-body">
          <div>Your exchange rate:</div>
          <div>Settlement date:</div>
          <div>Conversion date:</div>
          <div>
            <div>
              Quote expires in{" "}
              <span style={{ color: "red", fontSize: "18px" }}>
                {this.state.count}
              </span>{" "}
              seconds
            </div>
            <button onClick={this.stopTimer}>STOP</button>
          </div>
        </div>
        <div className="text-body">
          <div>1.0434 -inverse 0.9845-</div>
          <div>2 August 2022 @ 13:00</div>
          <div>2 August 2022 </div>
          <div>I am happy with this quote</div>
        </div>
      </div>
    );
  }
}
