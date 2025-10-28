import { useState } from 'react';
import { Link } from 'react-router-dom';

import { pogsBg, pogsGIF } from '../assets';
import { Card } from '../components';
import FortuneModal from '../components/FortuneModal';
import { pickNum, data } from '../utils';

export default function Pogs() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const fortune = data[pickNum(data.length)];

  return (
    <div
      className="min-h-[97vh] flex flex-col bg-repeat bg-[length:100%] text-center"
      style={{ backgroundImage: `url(${pogsBg})` }}
    >
      <Card>
        <div className="bg-white mx-auto">
          <h1>Thank you for visiting the Yellow Dubmarine!</h1>
        </div>
        <h2 className="pt-[5vh] m-0 text-sm md:text-base">
          You traded a pog for a thought! Nice work!
        </h2>
        <img src={pogsGIF} className="max-w-[20vh] mx-auto" alt="pogsGIF" />
        <h4>Your payment of one (1) pog gets you one (1) fortune:</h4>
        <button onClick={() => Toggle()}>Click to open your fortune</button>
        <FortuneModal show={modal} close={() => setModal(false)} fortune={fortune} />
        <div>
          <p>
            Thanks for participating! You can checkout the <Link to="/">Home Page</Link> for the
            updates on the Dubmarine lineup at Freezerburn!
          </p>
        </div>
      </Card>
    </div>
  );
}
