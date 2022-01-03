import RandomName from "../../components/random-name/RandomName";
const NameContainer = ({ randomEmployee, isLoading, error }) => {
  isLoading && <h1>Loading</h1>;
  error && <h1>Uh oh Spaghettio's!</h1>;
  if (randomEmployee == null) {
    return <h3> Loading... </h3>;
  }
  // const { firstName, lastName } = randomEmployee;

  return (
    <div className="flex__container--column">
      <RandomName
        firstName={randomEmployee.firstName}
        lastName={randomEmployee.lastName}
      />
    </div>
  );
};

export default NameContainer;
