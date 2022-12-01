import Script from "next/script";

export default function Home({ dataWeb }) {
  return (
    <>
      <div>
        <a className="menu-toggle rounded" href="">
          <i className="fas fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#page-top">{dataWeb.dataWeb[2].title}</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#page-top">{dataWeb.dataWeb[2].list[0].name}</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#about">{dataWeb.dataWeb[2].list[1].name}</a>
            </li>
          </ul>
        </nav>
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            <h1 className="mb-1 text-white">Hello,{dataWeb.dataWeb[1].nama}</h1>
            <p className="text-white fs-5">{dataWeb.dataWeb[1].subnama}</p>
          </div>
        </header>
        <section id="about" className="about py-4">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h2 className="pb-5">{dataWeb.dataWeb[4].title}</h2>
                <div className="row justify-content-center">
                  <div className="col pb-5">
                    <img
                      src={`assets/img/${dataWeb.dataWeb[4].image.url}`}
                      alt
                      width="200px"
                      height="200px"
                      className="rounded-circle"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum gravida interdum enim id malesuada. Vestibulum
                    pharetra sapien id justo rhoncus tempor. Aliquam quis
                    elementum est. Phasellus libero diam, bibendum ut eros
                    condimentum, vestibulum sagittis leo. Nulla facilisi. Etiam
                    lectus ligula, facilisis et pulvinar vel, mollis ac odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <p className="captabout pt-5">{dataWeb.dataWeb[2].subtitle}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="footer text-center">
          <div className="container">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href={dataWeb.dataWeb[3].icon[0].url}
                >
                  <i className="icon-social-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href={dataWeb.dataWeb[3].icon[1].url}
                >
                  <i className="icon-social-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white"
                  href={dataWeb.dataWeb[3].icon[2].url}
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
  const dataResponse = await fetch("https://backend-gweh.herokuapp.com/");
  const dataJson = await dataResponse.json();
  return {
    props: {
      dataWeb: dataJson,
    },
  };
}
