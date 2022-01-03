const HeadShot = ({ id, url, alt, handleGuess }) => (
  <img
    onClick={() => handleGuess(id)}
    key={id}
    width="164px"
    height="164px"
    src={url}
    alt={alt}
  />
);

export default HeadShot;
