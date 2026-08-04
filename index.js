document.getElementById("thankDiv").style.display = "none"


const sh = "https://script.google.com/macros/s/AKfycbwcR5ppC2UKWYoVO2lEP7ojMumJ3-MrBQDd2lS6718u7mjp-JBQ612t0Zufss48dtzsUA/exec";

const form = document.getElementById("sedto");

form.addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var highschool = document.getElementById("highschool").value;
    var intermediate = document.getElementById("intermediate").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    if (!name || !mobile || !highschool || !intermediate || !whatsapp || !email || !address) {
        alert("Please fill in all the required fields.");
        return;
    }

    if (mobile.length !== 10 || whatsapp.length !== 10) {
        alert("Please enter valid 10-digit Mobile and WhatsApp numbers.");
        return;
    }

    const data = { name, mobile, highschool, intermediate, whatsapp, email, address };

    fetch(sh, {
        method: "POST",
        mode: "no-cors", // Opaque response, bypasses CORS preflight
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            alert("Form submitted successfully!");
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("highschool").value = "";
            document.getElementById("intermediate").value = "";
            document.getElementById("whatsapp").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("formData").style.display = "none"
            document.getElementById("thankDiv").style.display = "block"

        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
});

document.getElementById("whatsappMessage").addEventListener('click', () => {
    var message = `Hame form fill kar diya , mujhe Contact kare`
    window.open(`https://wa.me/917607658761?text=${message}`)
})