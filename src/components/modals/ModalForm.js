import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ModalForm extends Component {
  state = { name: null };

  handleChange = (e) => this.setState({ name: e.target.value });

  render() {
    return (
      <Modal
        show={this.props.isOpen}
        onHide={this.props.closeModal}
        onSubmit={this.props.handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Form Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name input"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.handleSubmit(this.state.name)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ModalForm;
