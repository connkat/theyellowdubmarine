import { consbarGif } from '../assets/';

export default function Photos() {
  return (
    <div className="flex flex-col items-center mx-auto pt-[10%] w-1/2 text-center">
      <img src={consbarGif} className="max-w-full" alt="Under construction" />
      <h3 className="my-4">
        We're working hard to track down evidence of the party bus! Come back soon!
      </h3>
      <img src={consbarGif} className="max-w-full" alt="Under construction" />
    </div>
  );
}
