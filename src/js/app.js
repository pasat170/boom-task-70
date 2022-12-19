import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    let body = document.querySelector('body')
    let main = document.querySelector('.main')
    let profileAvatar = document.createElement('div')
    profileAvatar.classList.add('name')
    let img = document.createElement('img')
    img.setAttribute("src", "./images/favicon.ico")
    img.classList.add('image')
    profileAvatar.appendChild(img)
    body.appendChild(main)
    main.appendChild(profileAvatar)
    const image = document.querySelector('.image')
    image.addEventListener('click', () => {
        image.style.transform = "scale(2)";
    })
});
