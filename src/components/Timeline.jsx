import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline">
      <ul>
        <li>
          <div className="content">
            <h2 className="fw-bold">School Leaving Certificate</h2>
            <p className="text-primary">Mahendra Boudha Higher Secondary School</p>
            <h6 className="fw-bold">2014</h6>
          </div>
        </li>
        <li>
          <div className="content">
            <h2 className="fw-bold">National Education Board</h2>
            <p className="text-primary">Himalaya Model Higher Secondary School</p>
            <h6 className="fw-bold">2014-2016</h6>
          </div>
        </li>
        <li>
          <div className="content">
            <h2 className="fw-bold">Institute Of Engineering</h2>
            <p className="text-primary">Kantipur Engineering College</p>
            <h6 className="fw-bold">2016-2021</h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
