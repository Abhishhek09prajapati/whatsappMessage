const sheet = "1fTo96YaDPCYuLHTafVx3Y50HBZf8VdDHeMPzgMYtd_c";
var resultData = document.getElementById("resultData")
var catagotriesList = document.getElementById("catagotriesList")
var closeBtn = document.getElementById("closeBtn")
var imageView = document.getElementById("imageView")
var changeImg = document.getElementById("changeImg")

fetch(`https://opensheet.elk.sh/${sheet}/cata`)
    .then(res => res.json())
    .then(data => {
        data.forEach(t => {
            var div = document.createElement("div")
            div.className = "catadiv"
            div.innerHTML = `<img src="./images/${t.images}" width="100px" alt="">
                <label for="">${t.name}</label>`
            catagotriesList.append(div)


            div.addEventListener("click", () => {
                resultData.innerHTML = "Please Wait Data is Loading"
                callone(t.code)
                resultData.innerHTML = ""
            })
        });
    });


function callone(p) {
    fetch(`https://opensheet.elk.sh/${sheet}/${p}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(t => {
                var div = document.createElement("div");
                div.className = "resultData2"
                div.innerHTML = `<img class="imagesg" src="./images/${t.image}" alt="">
                <label for="">${t.name}</label>
                <label for="">Price - ${t.price}</label>
                <button class="itmesLike">I want this Product</button>
                `
                resultData.append(div)

                var a = div.querySelector(".itmesLike")
                var ima = div.querySelector(".imagesg")


                ima.addEventListener("click", () => {


                    chaohhh(t.imagesxCode)
                })

                a.addEventListener("click", () => {
                    var mess = `Mujhe Yeh Product Accha Laga , mujhe Call Back Kare ${t.name} Price ${t.price}`
                    window.open(`https://wa.me/918429858584?text=${mess}`)
                })
            })
        });
}

imageView.style.display = "none"

closeBtn.addEventListener("click", () => {
    imageView.style.display = "none"
})

let imageInterval;

function chaohhh(lo) {

    imageView.style.display = "block";

    fetch(`https://opensheet.elk.sh/${sheet}/imagesCode`)
        .then(res => res.json())
        .then(t => {

            var k = t.filter(u => {
                return lo === u.imageCCode;
            });

            var kk = k[0];

            if (!kk) {
                console.log("Image code not found");
                return;
            }

            var imageO = [
                "imagesone",
                "imagestwo",
                "imagesthree",
                "imagesfour",
                "imagesfive"
            ];

            var i = 0;

            // पुराने interval को बंद करें
            clearInterval(imageInterval);

            // पहली image तुरंत दिखाएँ
            if (kk[imageO[i]]) {
                changeImg.src = `./images/${kk[imageO[i]]}`;
            }

            imageInterval = setInterval(() => {

                i = (i + 1) % imageO.length;

                // खाली image को skip करना हो तो
                if (kk[imageO[i]]) {
                    changeImg.src = `./images/${kk[imageO[i]]}`;
                }

            }, 1000);

        })
        .catch(err => {
            console.log("Error:", err);
        });
}







