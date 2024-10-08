const homeLink = document.createElement('a');
homeLink.href = "#";
homeLink.addEventListener('click', (event)=>{
    event.preventDefault();
    loadHome();
});
    

const loginLink = document.createElement('a');
loginLink.href = "#";
loginLink.addEventListener('click', (event)=> {
   event.preventDefault();
    loadLogin(); 
});
    

//Home
function loadHome() {

    const app = document.getElementById('app');
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.style.textAlign = "center";
    title.innerText = "Main Page";
    const nav = document.createElement('nav');
    nav.style.textAlign = "end";
    nav.style.border = "1px solid black";
    nav.style.margin = "10px";
    nav.style.padding = "10px";
    loginLink.textContent = "Login";
    app.innerHTML = "";
    
    //content
    const main = document.createElement('main');
    const section = document.createElement('section');
    const side = document.createElement('div');
    const boxes = document.createElement('div');
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    const box3 = document.createElement('div');
    const footer = document.createElement('footer')

    section.style.display = "flex";
    side.style.border = "1px solid black";
    side.style.margin = "10px";
    side.style.width = "20%";
    boxes.style.width = "80%";
    boxes.style.padding = "10px";
    box1.style.border = "1px solid black";
    box1.style.height = "80vh";
    box2.style.marginTop = "10px";
    box2.style.marginBottom = "10px";
    box2.style.border = "1px solid black";
    box2.style.height = "80vh";
    box3.style.border = "1px solid black";
    box3.style.height = "30vh";
    footer.style.backgroundColor = "gray"
    footer.style.height = "40px";
   
    nav.appendChild(loginLink);
    header.appendChild(title);
    header.appendChild(nav);
    app.appendChild(header);
    
    section.appendChild(side);
    boxes.appendChild(box1);
    boxes.appendChild(box2);
    boxes.appendChild(box3);
    section.appendChild(boxes);
    main.appendChild(section);
    app.appendChild(main);
    app.appendChild(footer);
}

//Login
function loadLogin() {   

    const app = document.getElementById('app');
    const header = document.createElement('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    const section = document.createElement('section');
    const footer = document.createElement('footer');

    homeLink.textContent = "Home";
    app.innerHTML = ""; 
    //app.style.height = "100vh";
    header.style.height = "20vh";
    title.style.textAlign = "center";
    title.innerText = "Login Page";

    nav.style.textAlign = "end";
    nav.style.border = "1px solid black";
    nav.style.margin = "10px";
    nav.style.padding = "10px";

    section.style.height = "75vh";
    section.style.display = "flex";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";

    // form
    const form = document.createElement('form');
    form.style.width = "200px";
    form.style.textAlign = "center";
    form.style.padding = "5px";
    form.style.border = "1px solid black";

    // Username
    const usernameInput = document.createElement('input');
    usernameInput.type = "text";
    usernameInput.id = "username";
    usernameInput.name = "username";
    usernameInput.placeholder = "User name"
    usernameInput.required = true;

    // Password
    const passwordInput = document.createElement('input');
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Password";
    passwordInput.style.marginTop = "10px";
    passwordInput.style.marginBottom = "10px";
    passwordInput.required = true;

    //button
    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.style.padding = "2px 4px";
    submitButton.textContent = "Log In";

    submitButton.addEventListener("mouseover", () => {
        submitButton.style.boxShadow = "2px 2px 5px black";
    });

    submitButton.addEventListener("mouseout", () => {
        submitButton.style.boxShadow = "none";
    });

    footer.style.backgroundColor = "gray"
    footer.style.height = "5vh";

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    section.appendChild(form);
    main.appendChild(section);
    nav.appendChild(homeLink);
    header.appendChild(title);
    header.appendChild(nav);
    app.appendChild(header)
    app.appendChild(main);
    app.appendChild(footer);
}

//Default
loadHome();
