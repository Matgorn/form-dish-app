const DishName = ({ onChange, value, validator }) => {
  return (
    <div className="field">
        <label htmlFor="name">Dish name: </label>
        <input
          value={value}
          onChange={async(e) => await onChange({ name: e.target.value })} 
          name="name" 
          id="name" 
          type="text" 
        />
        {validator && validator !== '' ?
          <p className="ui pointing red basic label">{validator}</p> : ''
        }
    </div>
  );
}

export default DishName;