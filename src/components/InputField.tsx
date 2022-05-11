import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // void because we don't need this function to return anything.
}

// ANOTHER WAY TO WRITE THIS:
// const InputField: React.FC<Props> = ({todo, setTodo})
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
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
