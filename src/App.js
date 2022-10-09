import "./styles.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {
  Container, Card, CardContent, Typography, Stack, Grid,
  Link, Select, MenuItem, Alert, Button, TextField, Switch, FormControlLabel
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
              <Container fixed>
          <Stack spacing={2}>
            <Typography variant="h4" component="h1" marginTop={5} marginBottom={5} align='center'>
              MQTT client
            </Typography>
          </Stack>
      </Container>
        
    </ThemeProvider>
  );
}
