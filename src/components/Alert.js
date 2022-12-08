import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div
            class="alert alert-primary alert-dismissible fade show "
            role="alert"
          >
            <strong>hey! </strong>
            {props.alert}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
