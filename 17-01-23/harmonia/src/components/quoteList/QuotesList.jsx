import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Quote from "../quote/Quote";
import "./index.css";

const QuotesList = () => {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    GET("quotes").then((data) => setQuotesList(data.quotes));
  }, []);

  return (
    <div className="QuotesList">
      {quotesList.map((quote) => (
        <Quote data={quote} key={quote.id} />
      ))}
    </div>
  );
};

export default QuotesList;
