import axios from "axios";
import Link from "next/link";
export default function Home({ blog, portofolio }) {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-lg-none" />
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link href="/">
                <a href="#hero" className="nav-link scrollto">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <a href="/#portofolio" className="nav-link scrollto">
                <i className="bx bx-book-content" /> <span>Portofolio</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-md-8 align-self-center">
              <h1>Dedi Kurniawan</h1>
              <h2>
                <span
                  className="typed"
                  data-typed-items="Front-End Developer,Designer"
                />
              </h2>
              <button type="button" class="btn btn-primary rounded-pill">
                Contact Me
              </button>
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/saya.webp"
                className="img-fluid profile"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="portofolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 className="resume-title">Come see my portfolio</h2>
            </div>
            <div className="row justify-content-center">
              {portofolio.result.map((item) => {
                const image = item.image.asset._ref.split("-");
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm p-2 bg-body rounded-0 shadow-sm">
                      <img
                        src={`https://cdn.sanity.io/images/sbpqwv31/production/${image[1]}-${image[2]}.${image[3]}`}
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        {/* <div className="container mt-5">
          <div className="copyright text-center">
            © Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits text-center">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://sbpqwv31.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%20%5D%7B%0A%20%20_id%2C%0A%20%20name%2C%0A%20%20%20%20description%2C%0A%20%20poster%2C%0A%20%20%0A%7D"
  );
  const responses = await axios.get(
    "https://sbpqwv31.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22portofolio%22%5D"
  );
  const portofolio = await responses.data;
  const blog = await response.data;
  return {
    props: { blog, portofolio }, // will be passed to the page component as props
  };
}
