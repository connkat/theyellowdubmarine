import { Link } from 'react-router-dom';

import '98.css';

export default function SiteMap() {
  return (
    <div className="fixed inset-0 flex items-end justify-center pb-4">
      <div className="window" style={{ width: 320 }}>
        <div className="title-bar">
          <div className="title-bar-text">Site Map</div>
        </div>
        <div className="window-body">
          <ul className="tree-view" style={{ fontSize: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pogs">Pogs</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/site-map">Site Map</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
