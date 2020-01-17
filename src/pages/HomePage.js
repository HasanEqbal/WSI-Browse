import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
      <div className="grid-x">
        <div className="cell small-6">Hello</div>
        <div className="cell small-6">Foundation hello</div>
      </div>

    </div>
  );
};

export default {
  component: Home
};
