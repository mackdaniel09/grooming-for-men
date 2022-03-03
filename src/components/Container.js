import React from "react";

const Container = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="display-6">Finish</p>
              <p className="display-6">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
