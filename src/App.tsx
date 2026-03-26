import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";
import "98.css";

import { Home, Pogs, Photos, SiteMap } from "./pages";

export default function App() {
	const [startOpen, setStartOpen] = useState(false);

	return (
		<Router>
			<div className="Layout h-screen flex flex-col" onClick={() => setStartOpen(false)}>
				<main className="flex-1 overflow-auto bg-white">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pogs" element={<Pogs />} />
						<Route path="/photos" element={<Photos />} />
						<Route path="/site-map" element={<SiteMap />} />
					</Routes>
				</main>
				<footer style={{ background: '#c0c0c0', borderTop: '2px solid #fff', boxShadow: 'inset 0 1px 0 #dfdfdf', display: 'flex', alignItems: 'center', gap: '4px', padding: '2px 4px', position: 'relative' }}>
					{startOpen && (
						<div className="window" style={{ position: 'absolute', bottom: '100%', left: 0, width: 200, marginBottom: 2 }} onClick={(e) => e.stopPropagation()}>
							<div className="title-bar" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '100%', position: 'absolute', left: 0, top: 0, bottom: 0, width: 28, background: '#808080', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', color: '#fff', letterSpacing: 2 }}>
								The Yellow Dubmarine
							</div>
							<div className="window-body" style={{ paddingLeft: 36, paddingTop: 4, paddingBottom: 4 }}>
								<Link to="/" onClick={() => setStartOpen(false)}>
									<button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>🏠 Home</button>
								</Link>
								<Link to="/pogs" onClick={() => setStartOpen(false)}>
									<button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>🪙 Pogs</button>
								</Link>
								<Link to="/photos" onClick={() => setStartOpen(false)}>
									<button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>📷 Photos</button>
								</Link>
								<Link to="/site-map" onClick={() => setStartOpen(false)}>
									<button style={{ width: '100%', textAlign: 'left' }}>🗺️ Site Map</button>
								</Link>
							</div>
						</div>
					)}
					<button
						style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 4 }}
						onClick={(e) => { e.stopPropagation(); setStartOpen((o) => !o); }}
					>
						<span>🪟</span> Start
					</button>
					<div style={{ width: 1, background: '#808080', alignSelf: 'stretch', margin: '2px 2px' }} />
					<Link to="/"><button>Home</button></Link>
					<Link to="/pogs"><button>Pogs</button></Link>
					<Link to="/photos"><button>Photos</button></Link>
					<Link to="/site-map"><button>Site Map</button></Link>
				</footer>
			</div>
		</Router>
	);
}
