const SandwichConditionals = ({ onChange, value, validator }) => {
  return(
    <div className="field">
      <label htmlFor="bread-slices">Number of slices: </label>
      <input
        onChange={async(e) => await onChange({ slices_of_bread: e.target.valueAsNumber })}
        value={value} 
        name="bread-slices" 
        id="bread-slices" 
        type="number" 
        min="1" 
        max="10" 
      />
      {validator && validator !== '' ?
        <p className="ui pointing red basic label">{validator}</p> : ''
      }
    </div>
  );
}

export default SandwichConditionals;