import React from 'react'; // Import the React library.
import { Spinner, Modal } from 'react-bootstrap'; // Import the Spinner and Modal components from the react-bootstrap library.

const BackdropLoader = ({ show }) => {
  console.log // This is a comment placeholder and does not provide any meaningful information.

  return (
    <Modal
      show={show} // A prop to control whether the modal is shown or hidden.
      backdrop="static" // Make the backdrop unclickable.
      keyboard={false} // Disable closing the modal using the keyboard.
      centered // Center the modal on the screen.
      dialogClassName="backdrop-loader" // Apply the "backdrop-loader" class to the modal.
    >
   {/* Display a Spinner with border animation and a white color. */}
      <Spinner animation="border" variant="white" /> 
    </Modal>
  );
};

export default BackdropLoader; // Export the BackdropLoader component so it can be used in other parts of the application.
