
import React from 'react';

const ProductReview = ({ reviews }) => {
  return (
    <div>
      <h2>Product Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>Rating: {review.rating}</div>
            <div>Reviewer: {review.reviewer}</div>
            <div>Comment: {review.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReview;
