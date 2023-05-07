/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  signupAndLoginHandler,

} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  if (user) return window.location.assign('/user.html');

  // setNav();
  document.getElementById('create-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      signupAndLoginHandler('/api/users', event.target);
    });
};

main();
