import HowToPlay from '../components/HowToPlay';

export default function HowToPlayContainer({ handleHowToPlay }) {
  return (
    <div className='HowToPlayContainer'>
      <HowToPlay handleHowToPlay={handleHowToPlay} />
    </div>
  );
}
