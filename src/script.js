const changepasseye = (x, y) => {
  const input = document.getElementById(x);
  const iconeye = document.getElementById(y);

  iconeye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";

      // document.getElementById('login-eye').style.display='none';
      // document.getElementById('login-eye-2').style.display='block';

      iconeye.classList.add("bi-eye");
      iconeye.classList.remove("bi-eye-slash");
    } else {
      input.type = "password";

      iconeye.classList.add("bi-eye-slash");
      iconeye.classList.remove("bi-eye");
    }
  });
};
changepasseye("login-pass", "login-eye");

function loadfile(event) {
  let userimg = document.getElementById("image");
  userimg.src = URL.createObjectURL(event.target.files[0]);
}

function getdata() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-pass").value;
  let user = document.getElementById("login-user").value;

  if (
    (user === "mahfoozjee" &&
      email === "jeemahfooz@gmail.com" &&
      password === "abcde") ||
    (user === "mahfoozdev" &&
      email === "mahfoozdoit@gmail.com" &&
      password === 12345)
  ) {
    document.getElementById("result").style.opacity = "5";
    document.getElementById("text-inp").innerHTML = user;
    document.getElementById("email-inp").innerHTML = email;
    document.getElementById("pass-inp").innerHTML = password;
  } else {
    console.log("icorrect");
    document.getElementById("incorrect").innerHTML = "Incorrect information";
  }
}
function browse() {
  document.getElementById("file").click();
}
