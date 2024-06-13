import React from "react";
import Project from "../Project";

const styles = `
{
.card-container {
  display: flex;
  align-items: center;
}

.card {
  width: 300px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
}

.card-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.username {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 14px;
  color: #fff;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 10px;
}

.card-content {
  padding: 20px;
}

.project-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  margin-bottom: 20px;
}

.goal {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.donate-btn {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.stat {
  margin: 0 10px;
}

.stat p {
  font-size: 14px;
  margin: 0;
}

.stat span {
  font-weight: bold;
}
}`
function ProjectDetail() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img src="rafah.jpg" alt="Project Image" />
          <span className="username">rafahdonor</span>
        </div>
        <div className="card-content">
          <h2 className="project-name">Fund For Gaza</h2>
          <p className="description">The primary aim of the Fund for Gaza Project is to provide immediate and sustainable relief and development assistance to the people of Gaza, 
            addressing urgent humanitarian needs and fostering long-term socio-economic growth. This initiative seeks to support various sectors, including healthcare, education, 
            infrastructure, and economic development, thereby improving the overall quality of life for the residents of Gaza.</p>
          <p className="goal">Goal: $10,000</p>
          <button className="donate-btn">Donate Now</button>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <p>Days Left: <span>30</span></p>
        </div>
        <div className="stat">
          <p>Donors: <span>20</span></p>
        </div>
      </div>
    </div>
  );
}


export default ProjectDetail;