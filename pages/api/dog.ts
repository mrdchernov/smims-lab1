import nextConnect from 'next-connect';
import getHandler from '../../controller/dog.get';
import postHandler from '../../controller/dog.post';

const handler = nextConnect()
    // Get method
    .get(getHandler)
    .post(postHandler)

export default handler;