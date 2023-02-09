import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input-field">
      <form
        onSubmit={(e) => {
          handleAdd(e);
          // inputRef.current?.blur();  // if not used, the input element still remains in the focus state after pressing enter
        }}
      >
        <input
          value={todo}
          ref={inputRef}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter a task"
        />
        <button type="submit" className="plus-icon">
          <AddIcon className="plus" />
        </button>
      </form>
    </div>
  );
};

export default InputField;
