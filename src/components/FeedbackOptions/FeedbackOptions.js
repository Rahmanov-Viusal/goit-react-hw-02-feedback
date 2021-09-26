import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      key={option}
      type="button"
      data-feedback={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));

export default FeedbackOptions;
