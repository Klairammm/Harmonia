import "./index.css";

const Quote = ({ data }) => {
  const { id, quote, author } = data;

  return (
    <div className="Quote">
      <p>{`#${id}`}</p>
      <div className="Quote__text">
        <h3>{author}</h3>
        <h4>{quote}</h4>
      </div>
    </div>
  );
};

export default Quote;
