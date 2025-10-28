import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="Layout min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <footer className="bg-white flex justify-evenly">
        <Link to="/">Home</Link>
        <Link to="/pogs">Pogs</Link>
        <Link to="/photos">Photos</Link>
        {/* <Link to="/site-map">Site Map</Link> */}
      </footer>
    </div>
  );
}
