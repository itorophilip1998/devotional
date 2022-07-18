import React from "react";

function IsOffline() { 
  if (!navigator.onLine) 
    return (
      <div>
        <div class="alert alert-warning" role="alert">
          <strong>warning</strong>
        </div>
      </div>
    );
}

export default IsOffline;
