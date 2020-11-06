const PrepTime = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="prep-time">Preparation time: </label>
        <input 
          value={value}
          onChange={async(e) => await onChange({ preparation_time: e.target.value })} 
          name="prep-time" 
          id="prep-time" 
          type="time" 
          step="1" 
        />
    </div>
  );
}

export default PrepTime;