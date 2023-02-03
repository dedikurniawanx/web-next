import axios from "axios";
export default function Home({ blog, portofolio }) {
  return (
    <>
      <div>
        {/* ======= Mobile nav toggle button ======= */}
        {/* <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
        <i className="bi bi-list mobile-nav-toggle d-lg-none" />
        {/* ======= Header ======= */}
        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
        >
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row d-flex align-items-center">
              <div className="col-lg-7">
                <h1>Dedi Kurniawan</h1>
                <h3 className="text">
                  <span
                    className="typed"
                    data-typed-items="Designer,Front-End Developer"
                  />
                </h3>
                <p>
                  I can help everyone build their business. It's such a
                  happiness for me. so, let me help you!
                </p>
              </div>
              <div className="col-lg-5">
                <img src="/assets/img/nobitha.png" alt srcSet />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= Resume Section ======= */}
          <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Working Experience</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>
          </section>
          {/* End Resume Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>
          </section>
          {/* End Portfolio Section */}
          {/* ======= Services Section ======= */}
          <section id="contact" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Let's Connect with Me</h2>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-md-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <img src="/assets/img/Dribbble.png" alt srcSet />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <img src="/assets/img/Instagram.png" alt srcSet />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <img src="/assets/img/LinkedIn.png" alt srcSet />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <img src="/assets/img/Tiktod.png" alt srcSet />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
        </main>
        {/* End #main */}
        {/* credits */}
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: [license-url] */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
        <div id="preloader" />
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
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
