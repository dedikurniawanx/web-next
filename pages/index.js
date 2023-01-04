import axios from "axios";
import Link from "next/link";
export default function Home({ blog }) {
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
              <Link href="/#about">
                <a className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </Link>
            </li>
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
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Dedi Kurniawan</h1>
          <p>
            I'm
            <span
              className="typed"
              data-typed-items="Designer, Developer, Photographer"
            />
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/xdkurniawn/"
              target="_blank"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/dedi-kurniawan-724094259/"
              target="_blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a
              href="https://github.com/dedikurniawanx"
              target="_blank"
              className="github"
            >
              <i className="bx bxl-github" />
            </a>

            <a
              href="https://twitter.com/xdkurniawn"
              target="_blank"
              className="twitter"
            >
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/ultramen.webp" className="img-fluid" alt />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Designer &amp; Web Developer</h3>
                <p className="">
                  Halo perkenalkan saya Dedi Kurniawan, Saya adalah mahasiswa
                  Teknik Informatka tahun 2020
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Birthday:</strong> <span>June 2001</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>City:</strong>
                        <span>Banyuwangi, Jawatimur, Indonesia</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong>
                        <span>21</span>
                      </li>

                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Freelance:</strong> <span>-</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Degree:</strong> <span>Junior</span>
                      </li>

                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Website:</strong>{" "}
                        <span>www.dedikurniawan.xyz</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Phone:</strong> <span>+6234567890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Email:</strong>
                        <span>dedikurniawanx@gmail.com</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vulputate sem felis, a ullamcorper odio blandit sit amet.
                Vestibulum fermentum risus lorem, ullamcorper luctus metus
                sollicitudin luctus. Cras sed risus.
              </p>
            </div>
            <div className="row skills-content justify-content-center">
              <div className="col-md-9 row">
                <div className="col-md-3 d-flex justify-content-center align-items-center  flex-column ">
                  <img
                    className="m-img"
                    src="/assets/img/html_icon.webp"
                    height={80}
                    width={80}
                  ></img>
                  <p className="text-center">HTML</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center flex-column ">
                  <img
                    className="m-img"
                    src="/assets/img/css_icon.webp"
                    height={80}
                    width={80}
                  ></img>
                  <p className="text-center">Css</p>
                </div>

                <div className="col-md-3 d-flex justify-content-center align-items-center  flex-column ">
                  <img
                    className="m-img"
                    src="/assets/img/boostrap.webp"
                    height={80}
                    width={80}
                  ></img>
                  <p className="text-center">Bootstrap</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center  flex-column ">
                  <img
                    className="m-img"
                    src="/assets/img/javascript_icon.webp"
                    height={80}
                    width={80}
                  ></img>
                  <p className="text-center">Javascript</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              <h2>Portofolio</h2>
              <p>Ini Adalah Tugas Desain Yang Pernah Saya Buat</p>
            </div>
            <div className="row justify-content-center">
              {blog.result.map((item) => {
                const image = item.poster.asset._ref.split("-");
                console.log(`${image[1]}-${image[2]}.${image[3]}`);

                return (
                  <div className="col-lg-6 col-md-6">
                    <div className="card shadow-sm p-3 mb-5 m-2 bg-body rounded-0">
                      <img
                        src={`https://cdn.sanity.io/images/sbpqwv31/production/${image[1]}-${image[2]}.${image[3]}`}
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
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
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Blog</h2>
              <p>Artikel Terbaru Saya</p>
            </div>
            <div className="row justify-content-center">
              {blog.result.map((item) => {
                const image = item.poster.asset._ref.split("-");
                console.log(`${image[1]}-${image[2]}.${image[3]}`);

                return (
                  <div className="col-lg-6 col-md-6">
                    <div className="card shadow-sm p-3 mb-5 m-2 bg-body rounded-0">
                      <img
                        src={`https://cdn.sanity.io/images/sbpqwv31/production/${image[1]}-${image[2]}.${image[3]}`}
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
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
        <div className="container mt-5">
          <div className="copyright text-center">
            © Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div className="credits text-center">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://sbpqwv31.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%20%5D%7B%0A%20%20_id%2C%0A%20%20name%2C%0A%20%20%20%20description%2C%0A%20%20poster%2C%0A%20%20%0A%7D"
  );
  const blog = await response.data;
  return {
    props: { blog }, // will be passed to the page component as props
  };
}
