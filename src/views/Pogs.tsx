'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { pogsGIF } from '../assets';
import { Card } from '../components';
import FortuneModal from '../components/FortuneModal';
import { pickNum, data } from '../utils';

export default function Pogs() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const fortune = data[pickNum(data.length)];

  return (
    <div className="min-h-[97vh] flex flex-col bg-repeat bg-[length:100%] text-center bg-[url('/backgrounds/pogs-background.jpg')] [font-family:'Comic_Sans_MS',cursive]">
      <Card>
        <div className="bg-white mx-auto">
          <h2>Thank you for visiting the Yellow Dubmarine!</h2>
        </div>
        <h3 className="pt-[5vh] m-0 text-sm md:text-base">
          You traded a pog for a thought! Nice work!
        </h3>
        <Image src={pogsGIF} alt="pogsGIF" width={200} height={200} className="mx-auto" />
        <h4>Your payment of one (1) pog gets you one (1) fortune:</h4>
        <button onClick={() => Toggle()}>Click to open your fortune</button>
        <FortuneModal show={modal} close={() => setModal(false)} fortune={fortune} />
        <div>
          <p>
            Thanks for participating! You can checkout the <Link href="/">Home Page</Link> for the
            updates on the Dubmarine lineup at Freezerburn!
          </p>
        </div>
      </Card>
    </div>
  );
}
