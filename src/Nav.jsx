import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">MySite</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Nav