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
            {/* <li>
              <Link href="/#about">
                <a className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="/#resume">
                <a className="nav-link scrollto">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </Link>
            </li>
            {/* <li>
              <a href="/#blog" className="nav-link scrollto">
                <i className="bx bx-book-content" /> <span>Blog</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container row" data-aos="zoom-in" data-aos-delay={100}>
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
        {/* <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Sumary</h2>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>SD Negeri 2 Tegalrejo</h4>
                    <h5>2010 - 2014</h5>
                    <p>
                      <em>Rochester Institute of Technology, Rochester, NY</em>
                    </p>
                    <p>
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>MTs DIPONEGORO TEGALSARI </h4>
                    <h5>2010 - 2014</h5>
                    <p>
                      <em>Rochester Institute of Technology, Rochester, NY</em>
                    </p>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto
                      quae reiciendis et quis Eius vel ratione eius unde vitae
                      rerum voluptates asperiores voluptatem Earum molestiae
                      consequatur neque etlon sader mart dila
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Smk Negeri 2 Tegalsari</h4>
                    <h5>2010 - 2014</h5>
                    <p>
                      <em>Rochester Institute of Technology, Rochester, NY</em>
                    </p>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto
                      quae reiciendis et quis Eius vel ratione eius unde vitae
                      rerum voluptates asperiores voluptatem Earum molestiae
                      consequatur neque etlon sader mart dila
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Sekolah Tinggi Ilmu Komputer Pgri Banyuwangi</h4>
                    <h5>2010 - 2014</h5>
                    <p>
                      <em>Rochester Institute of Technology, Rochester, NY</em>
                    </p>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto
                      quae reiciendis et quis Eius vel ratione eius unde vitae
                      rerum voluptates asperiores voluptatem Earum molestiae
                      consequatur neque etlon sader mart dila
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Work Experience</h3>
                  <div className="resume-item">
                    <h4>Praktek Kerja Lapangan di percetakan Mca.com</h4>
                    <h5>2010 - 2014</h5>
                    <p>
                      <em>Rochester Institute of Technology, Rochester, NY</em>
                    </p>
                    <ul>
                      <li>
                        Lead in the design, development, and implementation of
                        the graphic, layout, and production communication
                        materials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="resume" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Come see my portfolio</h2>
            </div>
            <div className="row justify-content-center">
              {portofolio.result.map((item) => {
                const image = item.image.asset._ref.split("-");
                return (
                  <div className="col-lg-6 col-md-6">
                    <div className="card shadow-sm p-3 mb-5 m-2 bg-body rounded-0">
                      <img
                        src={`https://cdn.sanity.io/images/sbpqwv31/production/${image[1]}-${image[2]}.${image[3]}`}
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      {/* <div className="card-body">
                        <h5 class="card-title text-center font-weight-bold pt-3">
                          {item.name}
                        </h5>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row mt-5">
              <div className="text-center">
                <Link href="/blog">
                  <a href="#">
                    {/* <button type="button" class="btn btn-primary rounded-pill">
                      Show
                    </button> */}
                  </a>
                </Link>
              </div>
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
