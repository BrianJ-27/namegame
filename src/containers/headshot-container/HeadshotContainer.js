import HeadShot from "../../components/headshots/Headshot";
import Overlay from "../../components/overlay/Overlay";

const HeadshotContainer = ({ employeeData, isLoading, error, handleGuess }) => {
  isLoading && <h1>Loading</h1>;
  error && <h1>Something Went Wrong</h1>;

  return (
    <figure className="main__grid--wrapper">
      {employeeData.map((data) => (
        <div style={{ position: "relative" }} key={data.headshot.id}>
          <HeadShot
            handleGuess={handleGuess}
            id={data.id}
            url={data.headshot.url}
            alt={data.headshot.alt}
          />
          {data.showOverlay && <Overlay isCorrect={data.isCorrect} />}
        </div>
      ))}
    </figure>
  );
};
export default HeadshotContainer;
