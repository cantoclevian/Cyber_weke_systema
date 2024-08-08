import React from "react";
import { ListGroup } from "react-bootstrap";

function Alerts() {
  const alerts = [
    { id: 1, message: "Suspicious login detected from IP 192.168.1.1" },
    { id: 2, message: "Malware signature detected in incoming traffic" },
    { id: 3, message: "Brute force attack blocked on server X" },
  ];

  return (
    <div>
      <h2 className="mb-4">Alerts</h2>
      <ListGroup>
        {alerts.map((alert) => (
          <ListGroup.Item key={alert.id}>{alert.message}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Alerts;
