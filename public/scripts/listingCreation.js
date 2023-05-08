import {
    fetchLoggedInUser,
    handleFetch,
    setNav,
  } from './global.js';
const form = document.querySelector('#listing-form');

const main = async () =>{
  const user= await fetchLoggedInUser();
  setNav(!!user)
}
main()

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // Extract form data
  const formData = new FormData(form);
  const listing_name = formData.get('listing_name');
  const description = formData.get('description');
  const brand = formData.get('brand');
  const photo = formData.get('photo');
  const bid_price = formData.get('bid_price');
  const end_date = formData.get('end_date');
  const location = formData.get('location');

  console.log(listing_name)
  console.log(description)
  console.log( brand)
  console.log(photo)
  console.log(bid_price)
  console.log(end_date)
  console.log(location)
  // Make request to server to create new post
  const response = await fetch('/api/listings', {
    method: 'POST',
    body: JSON.stringify({
      listing_name,
      description,
      brand,
      photo,
      bid_price,
      end_date,
      location
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json();
    console.log('New post created:', data);
  } else {
    console.error('Error creating new post:', response.status);
  }
});
