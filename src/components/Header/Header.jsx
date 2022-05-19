import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="menuButton">
        <button>-</button>
      </div>
      <div className="mainLogo">
        <h1>B&C</h1>
      </div>
      <div className="infoButton">
        <button>i</button>
      </div>
    </header>
  );
}
