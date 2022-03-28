import React from "react";
import ModalMovement from "./ModalMovement";

function EditMovement({ list }) {
  const onSubmitForm = async (e, movement) => {
    // Handle the form submitted

    // Prevent from refresh
    e.preventDefault();
    try {
      // const body = { amount, concept, typeM, dateM };
      const response = await fetch(
        `http://localhost:5000/movements/${list.movement_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(movement),
        }
      );
      //  Once the response has been sent, itś going to refresh and show the changes
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <ModalMovement
        btnLabel="Edit"
        title="Edit movement"
        onSubmitForm={onSubmitForm}
        disableMovementType={true}
        list={list}
      />
    </React.Fragment>
  );
}

export default EditMovement;
