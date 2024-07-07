const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
    </div>
  );
};

export default Feedback;
