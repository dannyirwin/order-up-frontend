import ExampleCard from '../components/ExampleCard';

export default function ExamplesContainer({ cards }) {
  const showExamples = () => {
    return cards.map(card => {
      return <ExampleCard card={card} key={card.id} />;
    });
  };
  return <div className='ExamplesContainer'>{showExamples()}</div>;
}
