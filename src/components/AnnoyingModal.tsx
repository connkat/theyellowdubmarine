import { useState } from 'react';

import RadioButton from './RadioButton';
import { createAge, numConsequences, alertText } from '../helperFunctions';

type AnnoyingModalProps = {
  setHandleModal: () => void;
};

export default function AnnoyingModal(props: AnnoyingModalProps) {
  const ages = createAge();
  const [age, setAge] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const ageMessage = numConsequences(age);
    alertText(ageMessage);

    if (ageMessage === 'That age seems okay, you may proceed') {
      props.setHandleModal();
    }
  }

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-h-[90vh] h-auto
                md:left-1/4 md:translate-x-0 md:top-1/4 md:w-1/2 md:h-1/2
                flex items-center justify-center bg-[rgb(255,255,1)]
                rounded-[15px] border-[5px] border-black overflow-y-auto"
    >
      <div className="hidden fixed inset-0 z-[100] w-full h-full" id="modal-overlay"></div>
      <div className="relative p-4 md:p-[10vh] md:pt-[50vh]">
        <h1 className="text-center">To access this site, please confirm your birthday</h1>
        <h2 className="text-center">This easy to use form should get you started!</h2>
        <div className="absolute right-10 top-5">
          <button
            type="button"
            onClick={() => setShowAlert(!showAlert)}
            className="bg-red-600 opacity-70 text-white rounded-full px-3 py-2 transition-transform hover:opacity-100 hover:-translate-y-0.5 hover:scale-[1.03]"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div className="m-10 text-justify">
          <div>
            <label>Your age:</label>
          </div>
          <form>
            {ages.map((age, index) => (
              <RadioButton value={age} label={age} key={index} setSelected={setAge} />
            ))}
            <div className="mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                value={age}
                className="cursor-pointer px-5 py-3 rounded-[25px] border-0 text-white shadow-[10px_10px_10px_0_rgba(55,55,55,0.2)] opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:scale-[1.03] bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
