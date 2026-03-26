import Link from 'next/link';

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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pogs">Pogs</Link></li>
            <li><Link href="/photos">Photos</Link></li>
            <li><Link href="/site-map">Site Map</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
