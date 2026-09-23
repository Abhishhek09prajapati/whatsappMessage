const scdata = "https://script.google.com/macros/s/AKfycbyc8dj5vgdZ9jH9LsCvv-2FIlqKbxwrSxOiv_pTB8Q0zUq-0diOpntaqbQaIM2Acuf4/exec";
const kot = "https://opensheet.elk.sh/1G5kY3GGIv-wyA8qq-Um_SazeQgzUzyVMCfRtXXAzrVA/whatsappdata"


// Fetch data from the Google Sheet API proxy
fetch(kot)
    .then(res => res.json())
    .then((data) => {
        const mainDiv = document.querySelector(".maindiv");
        mainDiv.innerHTML = "";
        data.slice(0,500).forEach((element, i) => {
            const div = document.createElement("div");
            div.classList.add("div1");
            div.innerHTML = `${i + 1}. New Whatsapp Number`;

            // Initial color setup based on sheet data
            if (element.color && element.color.trim().toLowerCase() === "green") {
                div.style.backgroundColor = "rgb(141, 236, 106)"; // Green
            } else {
                div.style.backgroundColor = "rgb(247, 151, 109)"; // Orange/Coral
            }

            // Click Event for sending message and tracking
            div.addEventListener("click", () => {
                const textmsg = document.getElementById('inputdata').value.trim();

                if (textmsg !== "") {
                    // 1. Change color instantly so the UI feels responsive
                    div.style.backgroundColor = "rgb(246, 127, 76)";

                    // 2. Fire and forget POST request to Google Script
                    fetch(scdata, {
                        method: "POST",
                        mode: "no-cors", // Opaque response rule applies
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            number: element.numberx,
                            color: "red"
                        })
                    }).catch(err => console.error("Tracking failed:", err));

                    // 3. Open WhatsApp with URL-safe text formatting
                    const safeMessage = encodeURIComponent(textmsg);
                    window.open(`https://wa.me/91${element.numberx}?text=${safeMessage}`, '_blank');

                } else {
                    alert("Please enter a message first!");
                }
            });

            mainDiv.appendChild(div);
        });
    })
    .catch(err => console.error("Error fetching list:", err));

// Ensure container is visible
document.querySelector(".maindiv").style.display = "block";


