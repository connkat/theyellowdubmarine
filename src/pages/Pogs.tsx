import { useState } from 'react';
import { Link } from 'react-router-dom';

import pogsBg from '../assets/pogs-background.jpg';
import pogsGIF from '../assets/pogs.gif';
import FortuneModal from '../components/FortuneModal';
import { pickNum } from '../helperFunctions';
import Layout from './Layout';
import { data } from '../utils/pogs';

export default function Pogs() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const fortune = data[pickNum(data.length)];

  return (
    <Layout>
      <div
        className="min-h-[97vh] flex flex-col bg-repeat bg-[length:100%] text-center"
        style={{ backgroundImage: `url(${pogsBg})`, fontFamily: '"Comic Neue", cursive' }}
      >
        <div
          className="w-11/12 md:w-3/5 bg-white mx-auto p-[2vh]"
          style={{ fontFamily: '"Comic Neue", cursive' }}
        >
          <div
            className="mx-auto"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(#eef05e, #e57f0b 99%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              transform: 'skewY(-8deg)',
              fontFamily: 'Impact',
              fontSize: '2vh',
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: 'black',
              padding: '2vh',
            }}
          >
            <h1>Thank you for visiting the Yellow Dubmarine!</h1>
          </div>
          <h2 className="pt-[5vh] m-0 text-sm md:text-base">You traded a pog for a thought! Nice work!</h2>
          <img src={pogsGIF} className="max-w-[20vh] mx-auto" alt="pogsGIF" />
          <h4>Your payment of one (1) pog gets you one (1) fortune:</h4>
          <button onClick={() => Toggle()}>Click to open your fortune</button>
          <FortuneModal show={modal} close={() => setModal(false)} fortune={fortune} />
          <p>
            Thanks for participating! You can checkout the <Link to="/">Home Page</Link> for the
            2024 Dubmarine lineup at Freezerburn!
          </p>
        </div>
      </div>
    </Layout>
  );
}
