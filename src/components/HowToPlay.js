import AllExamplesContainer from '../containers/AllExamplesContainer';

export default function HowToPlay({ handleHowToPlay }) {
  return (
    <div className='HowToPlay'>
      <h3>Welcome to the Cafe!</h3>
      <p>Orders are Up and its your job to get them to the customers.</p>
      <p> ...But there is a catch...</p>
      <p>
        At this cafe, customers like to order in unusual patterns and you'll
        need to make sure you're giving the right menu items to the right
        customers.
      </p>
      <p>
        An order consists of 3 cars. Each card has four attributes: color,
        pattern, number of items, and item type.
      </p>
      <p>
        When putting together and order of three cards, each of the four
        attributes must either be all the same or all different across all
        cards.
      </p>
      <p>
        Select an order by clicking on cards. Click again to de-select a card.
      </p>
      <AllExamplesContainer />
      <button onClick={handleHowToPlay}>Go Back To Game</button>
    </div>
  );
}
