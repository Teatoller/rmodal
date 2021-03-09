import React, { Component } from "react";
import "./App.css";
import DemoModal from "./components/modals/DemoModal";
import ModalForm from "./components/modals/ModalForm";
import SuperModal from "./components/modals/SuperModal";

class App extends Component {
  state = {
    isOpen: true,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleSubmit=(name) => {}

  render() {
    return (
      <>
      <div className="App">
      <SuperModal/>
      <DemoModal/>
        <button onClick={this.openModal}>Display Modal Form</button>

        {this.state.isOpen ? (
          <ModalForm
            closeModal={this.closeModal}
            isOpen={this.state.isOpen}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        
      </div>
      </>
    );
  }
}

export default App;
