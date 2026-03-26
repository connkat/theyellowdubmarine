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
        The Yellow<br className="md:hidden" /> Dubmarine!!!!
      </div>
      <Card>
        <Image src={yellowRV} alt="RV" width={0} height={0} sizes="100vw" className="rv pt-[5vh] w-[100px] h-auto" />
        <div>
          <h3 className="rainbow text-2xl [font-family:'Comic_Sans_MS',cursive]">
            Welcome to the home of Alberta's only mobile yellow stage dedicated to electronic music.
          </h3>
        </div>
        <div className="pb-4 flex flex-col items-center">
          <div className="warning-text pt-[2vh] text-sm md:text-base">
            <Image src={no} alt="NO" width={16} height={16} className="inline" />
            WE ARE NOT ASSOCIATED WITH THE{' '}
            <a target="blank" href="https://freezerburn-wrestling-federation.netlify.app">
              FREEZERBURN WRESTLING FEDERATION
            </a>
            <Image src={no} alt="NO" width={16} height={16} className="inline" />
          </div>
        </div>
      </Card>
    </div>
  );
}
