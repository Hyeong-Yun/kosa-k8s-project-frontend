// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signInBtn');
// const container = document.getElementById('container');
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// // signUpButton.addEventListener('click', () => {
// // 	container.classList.add("right-panel-active");
// // });




// function onSignIn() {

//      // singIn post Url
//     //  const geturl = "http://a876cfdd49d8a48c5b314d85b5c6f2ff-2070479410.ap-northeast-2.elb.amazonaws.com:5000/tweets";

//     //  // JSON 데이터를 서버로 전송하는 fetch 요청
//     //  fetch(geturl, {
//     //    method: "GET",
//     //    headers: {
//     //      "Content-Type": "application/json"
//     //    },
//     // //    body: JSON.stringify(user)
//     //  })
//     //  .then(response => response.text())
//     //  .then(result => console.log(result))
//     //    .catch(function(error) {
//     //      console.error("Error sending user data:", error);
//     //    });

//     console.log(typeof(username.value))
//     console.log(password.value)

//     let user = {
//         "username": username.value,
//         "password": password.value
//     }
    
//     // singIn post Url
//     const url = "http://a876cfdd49d8a48c5b314d85b5c6f2ff-2070479410.ap-northeast-2.elb.amazonaws.com:5000/auth/login";

//     // JSON 데이터를 서버로 전송하는 fetch 요청
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//     .then(response => response.text())
//     .then(result => {
//         console.log(result)
//         window.localStorage.setItem("token", result.slice(10, 166))
//         console.log(window.localStorage.getItem("token"))
//     })
//       .catch(function(error) {
//         console.error("Error sending user data:", error);
//       });

//     }

//     signInButton.addEventListener('click', onSignIn);

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const username = document.getElementById("username");
const password = document.getElementById("password");

const signusername = document.getElementById("sigin-username");
const sgininpassword = document.getElementById("sigin-password");

const email = document.getElementById("email");
const signupform = document.querySelector(".sign-up-form") 
const signinform = document.querySelector(".sign-in-form")


console.log(username)

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

signupform.addEventListener("submit", e => {
    console.log('In')
    e.preventDefault();

    let user = {
        "username": username.value,
        "password": password.value,
        "email" : email.value
    }
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
      "username": user.username,
      "email": user.email,
      "password": user.password,
    });
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(signupform.action, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    })


// Login
signinform.addEventListener("submit", e => {
  console.log('In')
  e.preventDefault();

  let user = {
      "username": signusername.value,
      "password": sgininpassword.value,
  }
  
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "username": user.username,
    "password": user.password,
  });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(signinform.action, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      window.location.href="http://127.0.0.1:5500/kosa-k8s-project-frontend/"
    }
    )
    .catch(error => console.log('error', error));
  })