import React from "react";

export default function CountDown() {
  const [timer, setTimer] = React.useState(20);
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <div className="countdown" value={timer}>
      <div>
        Quote expires in{" "}
        <span style={{ color: "red", fontSize: "18px" }}>{timer}</span> seconds
      </div>
    </div>
  );
}
