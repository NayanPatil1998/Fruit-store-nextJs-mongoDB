const Corosoul: React.FunctionComponent = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="overlay-image"
              style={{ backgroundImage: "url('/corosoul1.jpg')" }}
            ></div>
            <div className="container corosoul-title">
              <h1>Fresh fruits</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Suspendisse vitae fringilla mauris, id tempor quam
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="overlay-image"
              style={{ backgroundImage: "url('/corosoul2.jpg')" }}
            ></div>
            <div className="container corosoul-title">
              <h1>Fresh fruits</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Suspendisse vitae fringilla mauris, id tempor quam
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="overlay-image"
              style={{ backgroundImage: "url('/corosoul3.jpg')" }}
            ></div>
            <div className="container corosoul-title">
              <h1>Fresh fruits</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Suspendisse vitae fringilla mauris, id tempor quam
              </h5>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Corosoul;
