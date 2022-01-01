
import HeadShot from "../../components/headshots/Headshot";

const HeadshotContainer = ({employeeData, isLoading, error, handleGuess}) => {
  isLoading && <h1>Loading</h1> 
  error && <h1>Something Went Wrong</h1> 
  
  return (
     <figure className="main__grid--wrapper">
        {employeeData.map((data) => (
          <HeadShot handleGuess={handleGuess} key={data.headshot.id} url={data.headshot.url} alt={data.headshot.alt} />
        ))}
      </figure>
  );
};
export default HeadshotContainer;