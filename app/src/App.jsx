import { useState } from "react";
import emailjs from "@emailjs/browser";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [sent, setSent] = useState(false);

  var templateParams = {
    from_name: "James 'Lights Out' Toney",
    message: `
  address:hello basters tr\n phone:080187383`,
  };

  const { service_id, template_id, template, private_key } = {
    service_id: "service_z8s87vg",
    template_id: "template_2okmdvb",
    template: templateParams,
    private_key: "l_OwKVRLSN2fd-FgV",
  };

  const sendEmail = () => {
    emailjs.send(service_id, template_id, template, private_key).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setSent(true);
      },
      function (err) {
        console.log("FAILED...", err);
        setSent(false);
      }
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendEmail()}>Send Test EMail</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {sent ? "test email is sent" : "there is an error"}
      </p>
    </>
  );
}

export default App;
