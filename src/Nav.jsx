import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">MySite</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="https://classroom.google.com/c/ODM4MTQ1MTM2OTU1">Classroom</a>
      </div>
    </nav>
  );
}

export default Nav