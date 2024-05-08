export default function Filters() {
  return (
    <>
      <div className="flex mt-12 gap-x-3 items-center justify-end">
        <p className="filters-text">Cuisine:</p>
        <select className="filters-select">
          <option
            defaultValue="All countries and regions"
            className="filters-option"
          >
            All countries and regions
          </option>
          <option className="filters-option">Italian</option>
          <option className="filters-option">Asian</option>
          <option className="filters-option">American</option>
          <option className="filters-option">Mexican</option>
          <option className="filters-option">Mediterranean</option>
          <option className="filters-option">Pakistani</option>
          <option className="filters-option">Japanese</option>
          <option className="filters-option">Moroccan</option>
          <option className="filters-option">Korean</option>
          <option className="filters-option">Greek</option>
          <option className="filters-option">Thai</option>
          <option className="filters-option">Indian</option>
          <option className="filters-option">Turkish</option>
          <option className="filters-option">Smoothie</option>
          <option className="filters-option">Russian</option>
          <option className="filters-option">Lebanese</option>
          <option className="filters-option">Brazilian</option>
        </select>
      </div>
      <div className="flex my-[17px] gap-x-3 items-center justify-end">
        <p className="filters-text">Type of dish:</p>
        <select className="filters-select">
          <option defaultValue="All types" className="filters-option">
            All types
          </option>
          <option className="filters-option">Breakfast</option>
          <option className="filters-option">Lunch</option>
          <option className="filters-option">Dinner</option>
          <option className="filters-option">Side Dish</option>
          <option className="filters-option">Snack</option>
          <option className="filters-option">Beverage</option>
          <option className="filters-option">Dessert</option>
        </select>
      </div>
      <div className="flex mb-[17px] gap-x-3 items-center justify-end">
        <p className="filters-text tablet:text-left">
          Difficulty of preparation:
        </p>
        <div className="join menu-vertical lg:menu-horizontal">
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Any"
            defaultChecked
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Easy"
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Medium"
          />
          <input
            className="join-item btn radio-button"
            type="radio"
            name="options"
            aria-label="Hard"
          />
        </div>
      </div>
      <button
        type="button"
        disabled
        className="font-roboto text-sm leading-[22px] font-normal text-left text-blue
        transition-opacity ease-out duration-300 hover:opacity-80 disabled:opacity-60"
      >
        Reset all filters
      </button>
    </>
  );
}
