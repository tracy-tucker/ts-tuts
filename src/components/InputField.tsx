import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a Task" className="input__box" />
      <button className="input__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
