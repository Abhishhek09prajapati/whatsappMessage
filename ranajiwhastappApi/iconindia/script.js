var logoimg = document.getElementById("logoimg");

var images = [
    "../images/iconstarone.jpg",
    "../images/iconstartwo.jpg",
    "../images/iconstarthree.jpg",
    "../images/iconstarone.jpg"
];
let i = 0;
setInterval(v, 1000)


function v() {
    logoimg.src = images[i];
    i++;
    if (i >= images.length) {
        i = 0;
    }
}


const sc = "https://script.google.com/macros/s/AKfycbzuxrjDHomBmOXcCOqNIVDD_LGS9jLOa7x9ofuTJDRCcrdaXfHUNSN8G924RzeDn-g2cQ/exec"

const nameInput = document.getElementById("name");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const gmail = document.getElementById("gmail");



document.getElementById("submit-btn").addEventListener("click", function (event) {

    event.preventDefault();

    if (!nameInput.value || !mobile.value || !address.value || !gmail.value) {
        alert("Please fill in all fields.");
        return;
    }

    if(!/^\d{10}$/.test(mobile.value)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    const data = {
        name: nameInput.value,
        mobile: mobile.value,
        address: address.value,
        gmail: gmail.value
    };
    fetch(sc, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors"
    })
        .then(response => response.text())
        .then(result => {

            window.open("https://wa.me/917607658761?text=Hello, I have submitted the form.", "_blank");
           
            nameInput.value = "";
            mobile.value = "";
            address.value = "";
            gmail.value = "";

           

        })
        .catch(error => {

            console.error(error);

            alert("Something went wrong!");

            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
        });

});