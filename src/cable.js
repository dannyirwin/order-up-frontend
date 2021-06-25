import { createConsumer } from '@rails/actioncable';

const URL = 'wss://hidden-shelf-20440.herokuapp.com/cable';
//const URL = 'ws://localhost:3000/cable';
const consumer = createConsumer(URL);

export default consumer;
