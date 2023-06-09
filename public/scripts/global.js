// Fetch Helpers
const handleFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = (status === 204) || await response.json();
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};

const getFetchOptions = (body, method = 'POST') => ({
  method,
  credentials: 'include', // IMPORTANT, this tells fetch to include cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

// CREATE USER
const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options);
  
  if (err) {
    form.reset();
    return alert('Something went wrong');
  }
  window.location.assign('/user.html');
};

// READ USER
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
  return response;
};

// UPDATE USER
const updateUsernameHandler = async (form) => {
  const formData = new FormData(form);
  const username = formData.get('username');
  if (!username) return alert('Username is required');

  const url = `/api/users/${form.dataset.userId}`;
  const options = getFetchOptions({ username }, 'PATCH');

  const [response, err] = await handleFetch(url, options);
  return [response, err];
};

// DELETE USER
const logOutHandler = async () => {
  const [_response, err] = await handleFetch('/api/users/logout', { method: 'DELETE' });
  if (err) return alert('Something went wrong');
  window.location.assign('/');
};

// Nav Helper
const setNav = (hasLoggedInUser) => {
  const loggedOutNavHtml = ` <nav class="navbar navbar-expand-lg navbar-light fixed-top transparent-navbar"  id="mainNav">
  <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">Sneak Peak</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="./create.html">Sign Up</a></li>
              <li class="nav-item"><a class="nav-link" href="./listingsCreation.html">Listing Creation</a></li>
              <li class="nav-item"><a class="nav-link" href="./login.html">Log In</a></li>
              <li class="nav-item"><a class="nav-link" href="">WishList</a></li>
              <li class="nav-item"><a class="nav-link" href="./auction.html">Auction</a></li>
              <li class="nav-item"><a class="nav-link" href="./user.html ">Profile</a></li>
          </ul>
      </div>
  </div>
</nav>`

  const loggedInNavHtml = `<nav class="navbar navbar-expand-lg navbar-light fixed-top transparent-navbar"  id="mainNav">
  <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">Sneak Peak</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="./listingsCreation.html">Listing Creation</a></li>
              <li class="nav-item"><a class="nav-link" href="">WishList</a></li>
              <li class="nav-item"><a class="nav-link" href="./auction.html">Auction</a></li>
              <li class="nav-item"><a class="nav-link" href="./user.html ">Profile</a></li>
          </ul>
      </div>
  </div>
</nav>`
;

  const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};

// This is wonky. Once you learn about bundlers we won't have to
// explicitly create globals. We just lack the tools right now.
Object.assign(window, {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
  logOutHandler,
  updateUsernameHandler,
});

export {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
  logOutHandler,
  updateUsernameHandler,
};
