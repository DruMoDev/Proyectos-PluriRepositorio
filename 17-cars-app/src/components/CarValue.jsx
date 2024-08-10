import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector((state) => {
   return state.cars.data
      .filter(car => {
        return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className='car-value'>Total Cost: ${totalCost}</div>;
};

export default CarValue;
