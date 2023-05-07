import {
    fetchLoggedInUser,
    handleFetch,
    setNav,
    
  } from './global.js';
  
  const main = async () => {
    const user = await fetchLoggedInUser();
    setNav(!!user);
    console.log(user)
    const [secret, _err] = await handleFetch('/api/logged-in-secret');
    
  };
  
  main();
  
  // function showlistings(currlistings){
    //clear main
   // main.innerHTML = '';
    
    //iterating through the database response object
  
//     currlistings.forEach((listing) => {
//         const {isting_name, description, brand, user_id, photo, bid_price, end_date,location} = listing;
//         const  = document.createElement('div');
//         movieEl1.classList.add('movie');
        
//         movieEl1.innerHTML = `
//         <img src=${IMGPATH + poster_path} alt=${title}>
//         <div class="movie-info">
//         <h3>${title}</h3>
//         <span class=${getClassByRate(vote_average)}>${vote_average}</span>
//         </div>
        
//         <div class="overview">
//         <h4>Overview:</h4>
//         ${overview}
//         </div>       
//         `;
//         main.appendChild(movieEl1);
//     });
// }