
import {
  fetchLoggedInUser,
  handleFetch,
  getFetchOptions,
  setNav
} from './global.js';

const main_auction = document.querySelector('#main_auction');

const main = async () =>{
  const user= await fetchLoggedInUser();
  setNav(!!user)
}
main()
const getAllListings = async () => {
  console.log("sheesh")
  let data = await handleFetch('/api/listings');
  console.log(data)
  return data[0];
}

document.addEventListener("DOMContentLoaded", async (event) =>{
  let listings = await getAllListings();
  //  main_auction.innerHTML = '';
   // iterating through the database response object
  listings.forEach(async (listing) => {
    let user = await fetchLoggedInUser();
    const {listing_name, description, brand, photo, bid_price, end_date, location} = listing;
    const newListing = document.createElement('div');
    newListing.classList.add('list');
    
    newListing.innerHTML = `
      <div class="card ">
        <img src = ${photo} class="card-img-top" alt="Sneaker Image">
        <div class="card-body">
          <h5 class="card-title">${listing_name}</h5>
          <p class="card-text">${description}<br> ${end_date} </p>
          <p class="card-text">Brand: ${brand}</p>
          <p class="card-text">User ID: @sneakerhead23</p>
          <p class="card-text">Location: ${location}</p>
          <p>${bid_price}</p>
          <a href="" class="btn btn-primary">Place Bid</a>
        </div>
      </div> 
    `;
    main_auction.appendChild(newListing);
  });
});

