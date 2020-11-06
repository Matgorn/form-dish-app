const SoupConditionals = ({ onChange, value, validator }) => {
  return(
    <div className="field">
    <label htmlFor="spiceness">Spiceness scale: </label>
    <input 
      onChange={async(e) => await onChange({ spiciness_scale: e.target.valueAsNumber })}
      value={value}
      name="spiceness" 
      id="spiceness" 
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

export default SoupConditionals;