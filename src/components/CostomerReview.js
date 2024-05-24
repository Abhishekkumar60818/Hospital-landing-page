import React, { useState, useEffect } from "react";
import axios from "axios";
import customersS from "../styles/customersS.css";
import { LiaQuoteLeftSolid } from "react-icons/lia";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CostomerReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1");
        const shuffledReviews = shuffleArray(response.data.data);
        setReviews(shuffledReviews.slice(0, 2)); // Set only the first two reviews from shuffled array
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>What Our Customers Say</h1>
      </header>
      <div className="testimonials">
        {reviews.map((review, index) => (
          <div className="testimonial" key={index}>
            <p>{review.Reviews}</p>
            <div className="testimonial-info">
              <img
                src={review.image || "default-image.png"} // Use a default image if none is provided
                alt={review.Name}
                className="testimonial-image"
              />
              <div>
                <h2>{review.Name}</h2>
                <p>{review.role || "Patient"}</p> {/* Use "Customer" as default role */}
              </div>
            </div>
            <div className="quote-icon">{<LiaQuoteLeftSolid />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostomerReview;
