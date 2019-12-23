import React, { Fragment} from 'react';

const Alert = ({ alert }) => {
 
  return (
    alert !== null && <Fragment>
      <div className="alert alert-danger" role="alert" style={{fontSize: "1.3rem", letterSpacing: ".1rem"}}>
      <i className="fas fa-exclamation-circle" style={{ marginRight: ".2rem"}}/>{alert}
      </div>
    </Fragment>
    
  );
}

export default Alert;