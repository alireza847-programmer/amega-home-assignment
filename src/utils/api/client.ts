import {create} from 'apisauce';

const client = create({
  baseURL: '',
});

client.addResponseTransform(response => {
  console.log(response, 'response');
});

export default client;
