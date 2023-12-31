let body = document.body;

let form = document.querySelector('.header form');

document.querySelector('#search-btn').onclick = () =>{
    form.classList.toggle('active');
}
document.querySelector('section').onclick = () =>{
    form.classList.remove('active');
}
let sidenavbar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sidenavbar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar #close-btn').onclick = () =>{
    sidenavbar.classList.remove('active');
    body.classList.remove('active');

  }


  let profile = document.querySelector('.profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
}



let toggleprofile = document.querySelector('.toggleprofile');


document.querySelector('main').onclick = () =>{
    toggleprofile.classList.remove('active');
 }