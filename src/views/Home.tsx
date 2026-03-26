import Image from 'next/image';

import { yellowRV, no } from '../assets';
import { Card } from '../components';
import '../styles/animations.css';

export default function Home() {
  return (
    <div
      className="min-h-full flex flex-col bg-repeat bg-[length:20%] bg-[url('/backgrounds/water2.png')]"
    >
      <div className="wordart">
        <h1>The Yellow Dubmarine!!!!</h1>
      </div>
      <Card>
        <Image src={yellowRV} alt="RV" width={200} className="rv pt-[5vh]" />
        <div>
          <h3 className="rainbow text-2xl [font-family:'Comic_Sans_MS',cursive]">
            Welcome to the home of Alberta's only mobile yellow stage dedicated to electronic music.
          </h3>
        </div>
        <div className="pb-4 flex flex-col items-center">
          <p className="warning-text pt-[2vh] text-sm md:text-base">
            <Image src={no} alt="NO" width={16} height={16} className="inline" />
            WE ARE NOT ASSOCIATED WITH THE{' '}
            <a target="blank" href="https://freezerburn-wrestling-federation.netlify.app">
              FREEZERBURN WRESTLING FEDERATION
            </a>
            <Image src={no} alt="NO" width={16} height={16} className="inline" />
          </p>
        </div>
      </Card>
    </div>
  );
}
