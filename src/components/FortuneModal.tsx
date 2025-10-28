import { yellowRV } from '../assets';

import '../styles/animations.css';

type Props = {
  show: boolean;
  close: () => void;
  fortune: string;
};

export default function FortuneModal(props: Props) {
  return (
    <>
      {props.show ? (
        <div className="fixed inset-0 z-[9999] grid place-items-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={props.close}
          />
          {/* Modal panel */}
          <div
            className="relative z-[10000] w-11/12 max-w-md rounded-xl border-4 border-black bg-white p-6 text-center shadow-xl"
            style={{ backgroundColor: '#fff' }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={props.close}
              className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-white opacity-80 transition-transform hover:-translate-y-0.5 hover:scale-[1.03] hover:opacity-100"
            >
              X
            </button>
            <div className="mt-2">
              <img src={yellowRV} alt="RV" className="modal-rv mx-auto" style={{ maxWidth: 100 }} />
              <h3 className="mt-4 text-lg font-semibold">Your fortune is:</h3>
              <p className="mt-2">{props.fortune}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
