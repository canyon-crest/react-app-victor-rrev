import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">MySite</h1>

      <div className="nav-links">
        <a href="https://www.freepik.com/free-photos-vectors/small-house">Home</a>
        <a href="https://classroom.google.com/c/ODM4MTQ1MTM2OTU1">Classroom</a>
        <a href="https://youtu.be/IjcUiHIFEOQ?si=MZnqGakaAvEOFU31">YouTube</a>
      </div>
    </nav>
  );
}

export default Nav