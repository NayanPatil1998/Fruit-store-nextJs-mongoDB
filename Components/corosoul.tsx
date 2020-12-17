const Corosoul: React.FunctionComponent = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="corosoul1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="corosoul2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="corosoul3.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corosoul;
