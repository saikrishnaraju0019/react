import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Caursol = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel"style={{ height: '400px',width:'500px' }}>
      <div className="carousel-inner" style={{height:'100%'}}>
        <div className="carousel-item active" style={{height:'100%'}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png"
            className="d-block w-100"
            alt="Rajasthan Royals" 
            style={{height:'100%'}}
          />
        </div>
        <div className="carousel-item" style={{height:'100%'}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bengaluru_Logo.png"
            className="d-block w-100"
            alt="Royal Challengers Bangalore"
            style={{height:'100%'}}
          />
        </div>
        <div className="carousel-item" style={{height:'100%'}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png"
            className="d-block w-100"
            alt="Other Team"
            style={{height:'100%'}}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Caursol;
