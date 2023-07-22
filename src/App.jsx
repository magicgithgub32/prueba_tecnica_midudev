import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [catFact, setCatFact] = useState("");
  const [gif, setGif] = useState("");

  const GIPHI_API_KEY = "ePjhJ6oxJijWM5OtKCssAaNGNnTSkfa4";

  const getCatFact = async () => {
    const result = await fetch("https://catfact.ninja/fact");

    const res = await result.json();
    setCatFact(res.fact);
  };

  const stringForGif = catFact.split(" ").slice(0, 3).join(" ");

  const getGif = async () => {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHI_API_KEY}&q=${stringForGif}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );

    const res = await result.json();
    setGif(res.data[0]?.images.original.url);
    console.log("gif", gif);
  };

  useEffect(() => {
    if (catFact) {
      getGif();
    }
  }, [catFact]);

  const handleClick = () => {
    getCatFact();
  };

  return (
    <>
      <div className="buttonContainer">
        <h1>CLICK</h1>
        <button onClick={() => handleClick()}>HERE</button>
        <h1>AND GET A CATFACT AND A GIF!</h1>
      </div>

      <section className="catGifContainer">
        <img src={gif} />
        <div className="factText">
          <p>{catFact}</p>
        </div>
      </section>
    </>
  );
};

export default App;
