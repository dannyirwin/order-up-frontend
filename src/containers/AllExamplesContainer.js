import ExamplesContainer from './ExamplesContainer';

import exampleCards from '../exampleCards.js';

export default function AllExamplesContainer() {
  const showExamples = examplesArr => {
    return examplesArr.map(exampleCards => {
      return <ExamplesContainer cards={exampleCards} />;
    });
  };
  return (
    <div className='AllExamplesContainer'>
      <div>
        <p>Here are some examples of VALID orders: </p>
        {showExamples(exampleCards.valid)}
      </div>
      <div>
        <p>Here are some examples of INVALID orders: </p>
        {showExamples(exampleCards.invalid)}
      </div>
    </div>
  );
}
