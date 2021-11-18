import Link from "next/link";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-1 border-top  container text-white">
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-white">Developed by Samuel Claudino © 2021</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link href="https://www.linkedin.com/in/samuelcs131">
            <a target="_blank" className="text-muted" aria-label="icone linkedin">
              <i aria-hidden className="text-light fab fa-linkedin"></i>
            </a>
          </Link>
        </li>
        <li className="ms-3">
          <Link href="https://github.com/Samuelcs131">
            <a target="_blank" className="text-muted" aria-label="icone github">  
              <i aria-hidden className="text-light fab fa-github" ></i>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
