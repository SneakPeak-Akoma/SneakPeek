import {
    fetchLoggedInUser,
    handleFetch,
    
  } from './global.js';
  
  const main_auction = document.getElementById('main_auction')
  const main = async () => {
    const user = await fetchLoggedInUser();
    setNav(!!user);
    console.log(user)
    const [secret, _err] = await handleFetch('/api/logged-in-secret');
    
  };
  
  main();
  const db = 'sneakpeak'
  getListings()

  async function getListings(db){
    const response = await fetch(db);
    const responseData = await response.json();
    
    //invoked for showing the movies
    showlistings(responseData.results);
}
  function showlistings(currlistings){
  
   main_auction.innerHTML = '';
   // iterating through the database response object
  
    currlistings.forEach((listing) => {
        const {listing_name, description, brand, photo, bid_price, end_date,location} = listing;
        const newListing = document.createElement('div');
        newListing.classList.add('list');
        
        newListing.innerHTML = `
        <div class="card">
  <img src= ${photo} class="card-img-top" alt="Sneaker Image">
  <div class="card-body">
    <h5 class="card-title">${listing_name}</h5>
    <p class="card-text">${description}<br> ${end_date} </p>
    <p class="card-text">Brand: ${brand}</p>
    <p class="card-text">User ID: @sneakerhead23</p>
    <p class="card-text">Location: ${location}</p>
    <p>${bid_price}</p>
    <a href="" class="btn btn-primary">Place Bid</a>
  </div>
</div> `;
        main_auction.appendChild(newListing);
    });
}