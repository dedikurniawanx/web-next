import Script from "next/script";

export default function Home(props) {
  console.log(props.dataWeb.website.about.subtitle);
  console.log(props.dataWeb.website.project.image[0].alt);
  return (
    <>
      <div>
        {/* Navigation*/}
        <a className="menu-toggle rounded" href="">
          <i className="fas fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#page-top">{props.dataWeb.website.navbar.title}</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#page-top">Home</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#about">About</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#portfolio">Project</a>
            </li>
          </ul>
        </nav>
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            <h1 className="mb-1 text-white">
              Hello,{props.dataWeb.website.header.nama}
            </h1>
            <h3 className="mb-5 text-white">
              <em>Front-End Developer</em>
            </h3>
          </div>
        </header>
        <section id="about" className="about py-4">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h2>About Me</h2>
                <div className="row justify-content-center">
                  <div className="col mt-5 mb-4">
                    <img
                      src={`assets/img/${props.dataWeb.website.about.image.url}`}
                      alt
                      width="200px"
                      height="200px"
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <p className="puisi px-5 mt-5">
                  {props.dataWeb.website.about.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section" id="portfolio">
          <div className="container px-4 px-lg-4">
            <div className="content-section-heading text-center">
              <h2 className="project mb-5">Project</h2>
            </div>
            <div className="row g-2">
              <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                  <div className="caption">
                    <div className="caption-content"></div>
                  </div>
                  <img
                    className="img-fluid"
                    src={`assets/img/${props.dataWeb.website.project.image[0].url}`}
                    alt={props.dataWeb.website.project.image[0].alt}
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                  <div className="caption">
                    <div className="caption-content"></div>
                  </div>
                  <img
                    className="img-fluid"
                    src={`assets/img/${props.dataWeb.website.project.image[1].url}`}
                    alt={props.dataWeb.website.project.image[1].alt}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="footer text-center bg-dark">
          <div className="container">
            <ul className="list-inline mb-5">
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#!"
                >
                  <i className="icon-social-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#!"
                >
                  <i className="icon-social-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white"
                  href="https://github.com/dedikurniawanx"
                >
                  <i className="icon-social-github" />
                </a>
              </li>
            </ul>
          </div>
        </footer>

        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
      <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}

export async function getServerSideProps() {
  const dataResponse = await fetch("http://localhost:3000/api/website");
  const dataJson = await dataResponse.json();
  return {
    props: {
      dataWeb: dataJson,
    },
  };
}
