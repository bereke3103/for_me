function InputFiles({ text, handleInput, handleSublit }) {
  return (
    <label>
      <input
        className="input_text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSublit}>Add todo</button>
    </label>
  );
}

export default InputFiles;
