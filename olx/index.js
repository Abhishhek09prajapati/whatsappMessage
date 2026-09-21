const sheet = "1fTo96YaDPCYuLHTafVx3Y50HBZf8VdDHeMPzgMYtd_c";
var resultData = document.getElementById("resultData")
var catagotriesList = document.getElementById("catagotriesList")

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
                div.innerHTML = `<img src="./images/${t.image}" alt="">
                <label for="">${t.name}</label>
                <label for="">Price - ${t.price}</label>
                <button class="itmesLike">I want this Product</button>
                `
                resultData.append(div)

                var a = div.querySelector(".itmesLike")

                a.addEventListener("click",()=>{
                    var mess = `Mujhe Yeh Product Accha Laga , mujhe Call Back Kare ${t.name} Price ${t.price}`
                    window.open(`https://wa.me/918429858584?text=${mess}`)
                })
            })
        });
}


