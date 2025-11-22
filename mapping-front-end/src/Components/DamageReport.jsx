import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Card from "react-bootstrap/Card"
import InputGroup from 'react-bootstrap/InputGroup';
import MapView from "./Mapview"
import Footer from "./Footer"

const DamageReport = () => {
    return (
        <Container className="text-center mt-5">
            <Card className="shadow-lg p-4 w-100">
                <Card.Body>
                    <h2 className="mb-4">Submit Damage Report</h2>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="First name"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="First name"
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Last name"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                    />
                                </FloatingLabel>
                            </Col>

                        </Row>

                        <Row>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Email Address"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col md={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">+63</InputGroup.Text>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Contact Number"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Contact Number"
                                        />
                                    </FloatingLabel>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Damage Type"
                                >
                                    <Form.Select>
                                        <option>Select</option>
                                        <option>Road</option>
                                        <option>Bridge</option>
                                        <option>Home</option>
                                        <option>School</option>
                                        <option>Power Line</option>
                                        <option>Others: Please specify</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>

                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Date of Incident"
                                >
                                    <Form.Control type="Date" />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Time of Incident"
                                >
                                    <Form.Control type="time" />
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Photo/Video"
                                >
                                    <Form.Control type="file" />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3"
                                    label="Severity Level"
                                >
                                    <Form.Select >
                                        <option>Select</option>
                                        <option>Low</option>
                                        <option>Moderate</option>
                                        <option>Severe</option>
                                        <option>Critical</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>

                            <Col md={6}>
                                <FloatingLabel
                                    className="mb-3"
                                    label="Short Description"
                                    controlId="floatingInput"
                                >
                                    <Form.Control as={"textarea"} />
                                </FloatingLabel>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <p className="fw-bold">Location</p>
                                <MapView />
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                        <Button className="mt-3">Submit</Button>
                    </Form>

                </Card.Body>
                <Footer />
            </Card>
        </Container>
    );
}

export default DamageReport;