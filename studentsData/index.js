const sheet = "1fTo96YaDPCYuLHTafVx3Y50HBZf8VdDHeMPzgMYtd_c";

var nub1 = localStorage.getItem("userID")



document.getElementById("leadgeediv").style.display = "none"
fetch(`https://opensheet.elk.sh/${sheet}/stData`)
    .then(res => res.json())
    .then(data => {       

        data.forEach(u => {
            const div = document.createElement("div");
            div.className = "contactdiv";
            div.innerHTML = `
            <div>
                <label>${u.name}</label>
                <label> - ${u.whatsappNumber}</label>
            </div>

            <div class="callBtn">
                <button class="whatsappBtn">Whatsapp</button>
                <button class="callBtn1">Call</button>
                <button class="ledgerBtn">Ledger</button>
            </div>
        `;

            let open = false;

            div.addEventListener("click", () => {

                const btns = div.querySelector(".callBtn");

                if (!open) {
                    div.style.height = "100px";
                    btns.style.opacity = "1";
                    div.classList.toggle("active");
                    open = true;
                } else {
                    div.style.height = "50px";
                    btns.style.opacity = "0";
                    open = false;
                }

            });

            div.querySelector(".whatsappBtn").addEventListener("click", (e) => {
                e.stopPropagation();
                window.open(`https://wa.me/91${u.whatsappNumber}`)
            });

            div.querySelector(".callBtn1").addEventListener("click", (e) => {
                e.stopPropagation();
                // alert(`${u.number}`)
                window.location.href = `tel:${u.contactNumber}`;
            });

            div.querySelector(".ledgerBtn").addEventListener("click", (e) => {
                document.getElementById("leadgeediv").style.display = ""
               
            });

            document.getElementById("mobilediv").appendChild(div);

        });

    });

document.getElementById("closeBtn").addEventListener("click", (e) => {
    document.getElementById("leadgeediv").style.display = "none"
})


