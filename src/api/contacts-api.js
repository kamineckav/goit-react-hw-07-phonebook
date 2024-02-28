import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65df0673ff5e305f32a135e0.mockapi.io/contacts/contacts',
});

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContacts = async id => {
  console.log(id);
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
