import React from "react";
import investors from "../images/investors.jpg";
import "./Service.css";

const Services = () => {
  return (
    <section className="service-page-container">
      <h1 className="service-title"> Services for Everyone </h1>
      <p className="service-paragraph">
        We offer services to help you unlock your untapped potential and become
        the person you want to be to achieve your dream.
      </p>

      <div className="service-unordered-list">
        <ul>
          <li>Live classes</li>
          <li>Learn in small groups or 1:1</li>
          <li>Free 3-day trial</li>
        </ul>
      </div>

    </section>
  );
};

export default Services;
