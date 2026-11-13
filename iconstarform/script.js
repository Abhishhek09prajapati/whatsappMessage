const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const message = `
*Iconstar Super ID Registration*

Full Name: ${name}
Email: ${email}
Phone Number: ${phone}
Address: ${address}

Please register my Super ID.
    `;

    const whatsappURL = `https://wa.me/916387215755?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});