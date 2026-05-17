// ========================
// CEK LOGIN
// ========================
auth.onAuthStateChanged(user => {

    const userInfo = document.getElementById("user-info");

    if (user) {
        userInfo.innerText = "User  " + user.email;

    } 
});



