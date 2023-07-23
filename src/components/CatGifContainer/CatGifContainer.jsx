import "./CatGifContainer.css";

export const CatGifContainer = ({ gif, catFact }) => {
  return (
    <section className="catGifContainer">
      <img src={gif} />
      <div className="factText">
        <p>{catFact}</p>
      </div>
    </section>
  );
};
