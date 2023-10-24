function Footer() {
  return (
    <footer className="lime darken-3 grey-text text-lighten-4">
      <div className="footer-copyright">
        <div className="container">
          year of creation {new Date().getFullYear()}
          <a className="right grey-text text-lighten-4" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
