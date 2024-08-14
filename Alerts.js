import React from "react";
import { Table, Badge } from "react-bootstrap";

function Alerts() {
  const alerts = [
    { id: 1, message: "Suspicious login detected from IP 192.168.1.1", severity: "High", type: "Intrusion Detection" },
    { id: 2, message: "Malware signature detected in incoming traffic", severity: "Severe", type: "Malware" },
    { id: 3, message: "Brute force attack blocked on server X", severity: "Medium", type: "DDoS" },
    { id: 4, message: "Unusual outbound traffic detected", severity: "Low", type: "Virus" },
  ];

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "Low":
        return <Badge bg="success">Low</Badge>;
      case "Medium":
        return <Badge bg="warning">Medium</Badge>;
      case "High":
        return <Badge bg="danger">High</Badge>;
      case "Severe":
        return <Badge bg="dark">Severe</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <div>
      <h2 className="mb-4">Alerts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Alert Message</th>
            <th>Severity</th>
            <th>Type of Attack</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.message}</td>
              <td>{getSeverityBadge(alert.severity)}</td>
              <td>{alert.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Alerts;
