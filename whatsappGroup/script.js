var catagoriesDiv = document.getElementById("catagoriesDiv")
var joinLinks = document.getElementById("col2")

const sh = "1EuqJxpY5KCyjKtJFR4bZOn2Hdz7Ma6kGpMBZ4LEyg9U"
var cataselection = document.getElementById("cataselection")
const fish = "https://script.google.com/macros/s/AKfycbzjPrZ_KH1_8wQdV4f36w8ihsYFfM-1YlepxqfXr7Q0XCelRaUNw72rktP-C0D4AOlSEA/exec"

let mo = null;
let selectData = ""



fetch("https://api.npoint.io/f1c1bf09eb96314477d5?t=" + Date.now())
    .then(res => res.json())
    .then(data => {
        mo = data.catagories;
        data.catagories.forEach(t => {
            var d = document.createElement("div")
            d.className = "divdata"
            d.innerHTML = `${t}`
            catagoriesDiv.append(d)

            d.addEventListener("click", () => {
                joinLinks.innerHTML = ""
                clickmeandsearcch(t)
            })

        });
    })

fetch(`https://opensheet.elk.sh/${sh}/shop`)
    .then(res => res.json())
    .then(data => {
        data.slice(0, 25).forEach(k => {
            var div = document.createElement("div")
            div.className = "joinDiv"
            div.innerHTML = `<h3>${k.WhatsappGorupName}</h3>
            <div>
            <button class="btnjoin">Join Now</button>
             <button style="background-color:red" class="btnreport">Report Group</button></div>
            `

            joinLinks.append(div)

            var a = div.querySelector(".btnjoin")
            var b = div.querySelector(".btnreport")


            a.addEventListener("click", () => {
                window.open(`${k.Whatsappgrouplinks}`, "_blanks")
            })
            b.addEventListener("click", () => {
                var url = `https://wa.me/917607658761?text=${k.Whatsappgrouplinks} I reports this Gourp Links `
                window.open(`${url}`, "_blanks")
            })

        })
    })


function clickmeandsearcch(t) {

    fetch(`https://opensheet.elk.sh/${sh}/shop`)
        .then(res => res.json())
        .then(data => {

            var d = data.filter(j => {
                return j.whatsappcata === t
            })

            d.forEach(k => {
                var div = document.createElement("div")
                div.className = "joinDiv"
                div.innerHTML = `<h3>${k.WhatsappGorupName}</h3>
            <div>
            <button class="btnjoin">Join Now</button>
             <button style="background-color:red" class="btnreport">Report Group</button></div>
            `

                joinLinks.append(div)

                var a = div.querySelector(".btnjoin")
                var b = div.querySelector(".btnreport")


                a.addEventListener("click", () => {
                    window.open(`${k.Whatsappgrouplinks}`, "_blanks")
                })
                b.addEventListener("click", () => {
                    var url = `https://wa.me/917607658761?text=${k.Whatsappgrouplinks}, I reports this Gourp Links `
                    window.open(`${url}`, "_blanks")
                })

            })

        })
        .catch(error => {
            console.log("Error:", error);
        });
}


var addData = document.getElementsByClassName("addData")[0]
var closeSpan = document.getElementById("closeSpan")

closeSpan.addEventListener("click", () => {
    addData.style.display = "none"
})
addData.style.display = "none"
function submitBtn() {
    var nameInput = document.getElementById("nameInput");
    var linkInput = document.getElementById("linkInput");


    const name = nameInput.value.trim();
    const link = linkInput.value.trim();

    if (!name || !link) {

        alert("Please Enter Name & Link");

    } else if (!link.startsWith("https://chat.whatsapp.com/")) {

        alert("Please Enter a Valid WhatsApp Group Link");

    } else {

        var kj = { name, link, selectData }

        fetch(fish, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(kj)
        })
            .then(res => res.text())
            .then(fsk => {
                console.log(fsk)
            })

    }
}


addDiv.addEventListener("click", () => {
    koko()

});


cataselection.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    selectData = selectedCategory.trim()

});

document.getElementById("ag").addEventListener("click", () => {
    koko()
})


function koko() {
    addData.style.display = "block"

    cataselection.innerHTML = "";
    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = "Select Category";
    firstOption.disabled = true;
    firstOption.selected = true;

    cataselection.appendChild(firstOption);


    mo.forEach(l => {

        const op = document.createElement("option");

        op.value = l;
        op.textContent = l;

        cataselection.appendChild(op);
    });
}