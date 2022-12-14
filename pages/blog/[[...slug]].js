import axios from "axios";
import Link from "next/link";
export default function Blogs({ blog }) {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-lg-none" />
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link href="/">
                <a href="#hero" className="nav-link scrolltop">
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
            <li>
              <a href="/#blog" className="nav-link scrollto active">
                <i className="bx bx-book-content" /> <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <section id="#blog" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Blog</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              {blog.result.map((item) => {
                const image = item.poster.asset._ref.split("-");
                // console.log(`${image[1]}-${image[2]}.${image[3]}`);

                return (
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-6 align-items-center">
                      <div className="card shadow-sm p-3 mb-5 m-2 bg-body rounded">
                        <img
                          src={`https://cdn.sanity.io/images/sbpqwv31/production/${image[1]}-${image[2]}.${image[3]}`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 class="card-title">{item.name}</h5>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
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
