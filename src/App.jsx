import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button/Button";
import { CatGifContainer } from "./components/CatGifContainer/CatGifContainer";
import { GIPHI_API_KEY } from "./utils/GIPHY_API_KEY";
import { getCatFact } from "./services/getCatFact";

const App = () => {
  const [catFact, setCatFact] = useState("");
  const [gif, setGif] = useState("");

  useEffect(() => {
    const fetchCatFact = async () => {
      const fact = await getCatFact();
      setCatFact(fact);
    };
    fetchCatFact();
  }, []);

  const stringForGif = catFact?.split(" ").slice(0, 3).join(" ");

  const getGif = async () => {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHI_API_KEY}&q=${stringForGif}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const res = await result.json();
    setGif(res.data[0]?.images.original.url);
  };

  useEffect(() => {
    if (catFact) {
      getGif();
    }
  }, [catFact]);

  const handleClick = async () => {
    const fact = await getCatFact();
    setCatFact(fact);
  };

  return (
    <>
      <div className="buttonContainer">
        <h1>CLICK</h1>
        <Button handleClick={handleClick} />
        <h1>AND GET A CATFACT AND A GIF!</h1>
      </div>
      <CatGifContainer gif={gif} catFact={catFact} />
    </>
  );
};

export default App;
