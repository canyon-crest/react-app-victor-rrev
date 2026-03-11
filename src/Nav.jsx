import './nav.css';

function Nav({ setPage }) {
  return (
    <nav className="nav">

    <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage('about')}>About</li>
        <li onClick={() => setPage("contact")}>Contact</li>

    </ul>
    

      <h1 className="logo">rev's react app</h1>

      {/*<button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>*/}

      {/*<div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>*/}
    </nav>
  );
}

export default Nav