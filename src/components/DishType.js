const DishType = ({ onChange, value }) => {
  return (
    <div className="field">
        <label htmlFor="dish-type">Dish type: </label>
        <select 
          value={value} 
          onChange={async(e) => await onChange({ type: e.target.value })} 
          name="dish-type" 
          id="dish-type" 
          form="dish-form"
        >
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </select>
    </div>
  );
}

export default DishType;