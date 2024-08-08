import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Threats Detected</Card.Title>
              <Card.Text>
                <strong>25</strong> Threats Detected Today
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Alerts Triggered</Card.Title>
              <Card.Text>
                <strong>5</strong> Alerts Triggered
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Systems Secure</Card.Title>
              <Card.Text>
                <strong>8</strong> Systems Secure
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
