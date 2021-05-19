import React, { useState } from 'react';

interface ITodoForm {
  onAdd(text: string): void;
}

const TodoForm: React.FC<ITodoForm> = ({ onAdd }) => {
  const [input, setInput] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPres = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onAdd(input);
      setInput('')
    }
  };

  return (
    <div className="container input-field col s12 form">
      <i className="material-icons prefix">mode_edit</i>
      <input
        type="text"
        id="autocomplete-input"
        className="autocomplete"
        value={input}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPres}
      />
      <label htmlFor="autocomplete-input" className="label">
        Task
      </label>
    </div>
  );
};

export default TodoForm;
