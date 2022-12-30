import React from "react";

const FeaturedHouseCard = (props) => {
  return (
    <div className="card rounded-5 my-2 mx-auto" style={{ width: "15rem" }}>
      <img src={props.src} className="card-img-top w-100 h-75" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="fw-light">${props.price}</h5>

        <div className="card_info d-flex">
          <img src={props.avatar} alt="" className="me-2 w-25 " />
          <h6>
            {props.name}
            <br />
            <span className="text-muted fw-semibold">{props.rank}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHouseCard;
