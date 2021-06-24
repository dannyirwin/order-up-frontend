import { createConsumer } from '@rails/actioncable';

const URL = 'ws://hidden-shelf-20440.herokuapp.com/cable';
const consumer = createConsumer(URL);

export default consumer;
