import "./styles.css";

const mqtt = require("mqtt");

const mqtt_client = mqtt.connect("wss://mqtt.linq-it.com", {
  username: "mqtt",
  password: "Mqtt-d0m0tica"
});

mqtt_client.on("connect", function () {
  mqtt_client.subscribe("p1-meter/#", function (err) {
    if (err) {
      console.error(err);
    }
  });
});

mqtt_client.on("message", function (topic, message) {
  console.log(topic, message.toString());
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
