import { useState } from "react";

const GuessForm = (props) => {

  const guessHandler = (e) => {
    e.preventDefault();
    console.log(props);
    alert(props.guessedLetter);
  };

  return (
    <>
      <form onSubmit={guessHandler}>
        <label>
          <input
            type="text"
            value={props.guessedLetter}
            onChange={(e) => {props.setGuessedLetter(e.target.value);}}
            pattern="[A-Za-z]"
            size={1}
            maxLength={1}
          />
        </label>
        <button>Guess!!</button>
      </form>
    </>
  );
};

export default GuessForm;
