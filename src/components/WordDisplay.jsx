const WordDisplay = (props) => {

  return (
    <>
      <h1>Word Display</h1>
      <p>{props.currentWord ? props.currentWord : "Loading..."}</p>
    </>
  );
};

export default WordDisplay;
