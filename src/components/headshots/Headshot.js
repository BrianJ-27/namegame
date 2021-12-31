const HeadShot = ( { id, url, alt } ) => (
  <img
    key={id}
    width="164px"
    height="164px"
    src={url}
    alt={alt}
  />
);

export default HeadShot;