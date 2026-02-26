// ================= PAGE LOADED =================

document.addEventListener("DOMContentLoaded", () => {
    console.log("WaghNakh System Initialized");
});


// ================= LOGIN SYSTEM =================

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    const unitID = document.querySelector(".login-box input[type='text']").value;
    const militaryID = document.querySelector(".login-box input[type='password']").value;

    if (unitID === "" || militaryID === "") {

        showAlert("⚠️ Please enter all credentials!");

    } 
    else if (unitID.length < 4 || militaryID.length < 4) {

        showAlert("❌ Invalid ID Format!");

    }
    else {

        showAlert("✅ Access Granted. Welcome Soldier!");

        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1500);
    }
});


// ================= SEARCH SYSTEM =================

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const searchValue = document.querySelector(".search-box input").value;

    if (searchValue === "") {

        showAlert("⚠️ Enter target name!");

    } 
    else {

        showAlert(`🎯 Target "${searchValue}" Locked`);
    }
});


// ================= VOLUNTEER BUTTON =================

const volunteerBtn = document.querySelector(".main-btn");

volunteerBtn.addEventListener("click", () => {

    showAlert("🪖 Registration Portal Opening...");

    setTimeout(() => {
        window.open("https://indianarmy.nic.in", "_blank");
    }, 1200);
});


// ================= ALERT SYSTEM =================

function showAlert(message) {

    let alertBox = document.createElement("div");
    alertBox.className = "system-alert";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("show");
    }, 50);

    setTimeout(() => {
        alertBox.classList.remove("show");

        setTimeout(() => {
            alertBox.remove();
        }, 400);

    }, 2500);
}
