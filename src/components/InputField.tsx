import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// ANOTHER WAY TO WRITE THIS:
// const InputField: React.FC<Props> = ({todo, setTodo})
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button className="input__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
