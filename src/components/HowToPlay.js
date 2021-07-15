import AllExamplesContainer from '../containers/AllExamplesContainer';

export default function HowToPlay({ handleHowToPlay }) {
  return (
    <div className='disabled-background'>
      <div className='HowToPlay'>
        <h3>Welcome to the Cafe!</h3>
        <p>Orders are up and its your job to get them to the customers.</p>
        <p> ...But there is a catch...</p>
        <p>
          At this cafe, customers like to order in unusual patterns and you'll
          need to make sure you're giving the right menu items to the right
          customers.
        </p>
        <p>
          An order consists of 3 cards. Each card has four attributes: color,
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
        <p>
          If you are stumped, you can add 3 cards (up to a total of 15) by
          clicking the "+ 3 More Cards" button in the top left of the board.
        </p>
        <h3>Good Luck!</h3>
        <AllExamplesContainer />
        <button onClick={handleHowToPlay}>Go Back</button>
      </div>
    </div>
  );
}
