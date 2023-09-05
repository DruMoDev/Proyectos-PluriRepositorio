import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(state => {
    const filteredCars = state.cars.data.filter(car => {
      return car.name
        .toLowerCase()
        .includes(state.cars.searchTerm.toLowerCase());
    });
    return {
      cars: filteredCars,
      name: state.form.name,
    };
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id));
  };

  const renderedCards = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && ""}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            handleCarDelete(car);
          }}
          className='button is-danger'
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className='car-list'>
      {renderedCards}
      <hr></hr>
    </div>
  );
};

export default CarList;
