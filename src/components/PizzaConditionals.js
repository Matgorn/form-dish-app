const PizzaConditionals = ({ onChange, value, validator }) => {
  return (
    <div className="field">
      <label htmlFor="slices">Number of slices: </label>
      <input 
        onChange={async(e) => await onChange({ no_of_slices: e.target.valueAsNumber })}
        value={value.no_of_slices}
        name="slices" 
        id="slices" 
        type="number" 
        min="1" 
        max="12" 
      />
      {validator.no_of_slices && validator.no_of_slices !== '' ?
        <p className="ui pointing red basic label">{validator.no_of_slices}</p> : null
      }
      <label htmlFor="diameter">Diameter (in CM): </label>
      <input
        onChange={async(e) => await onChange({ diameter: e.target.valueAsNumber })}
        value={value.diameter} 
        name="diameter" 
        id="diameter" 
        type="number" 
        step="0.01" 
      />
      {validator.diameter && validator.diameter !== '' ?
        <p className="ui pointing red basic label">{validator.diameter}</p> : ''
      }
    </div>
  );
}

export default PizzaConditionals;