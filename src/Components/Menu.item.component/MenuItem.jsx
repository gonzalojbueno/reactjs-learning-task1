import React from 'react';
import { withRouter } from "react-router-dom";

const MenuItem = ({ name, image, desc, price, linkUrl, history, match }) => (
  <div className= "d-flex flex-row">
   
      <div className="card" border="primary" style={{ width: "18rem" }}>
        <img src={`${image}`} className="card-img-top" alt="..."></img>
        <div className="card-body">
          {`${name}`}
          <p className="card-text">{`${desc}`}</p>
          <h3 className="card-text">Price $ {`${price}`}</h3>
          <a href="#" className="btn btn-primary" onClick={() => history.push(`${match.url}${linkUrl}`)} >Comprar</a>
        </div>
      </div>
  </div>

// falta el history , match.

);

export default withRouter(MenuItem);
