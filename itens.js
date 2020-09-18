fetch("https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/item.json")
    .then(res => res.json())
    .then(json => {


        var lItens = document.getElementById("divItens")
        for (var i in json.data) {

            lItens.innerHTML += `<button onclick="dados(${i})"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${i}.png" alt="" width="50px"></button>`
        }

    })

function dados(iten) {

    fetch("https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/item.json")
        .then(res => res.json())
        .then(json2 => {
            var lDivG = document.getElementById("divVazia")
            lDivG.innerHTML=`            
            <div id="div1">

            </div>
            <div id="div2">

            </div>
            <div id="div3">
               
            </div>`
            var lDesc = document.getElementById("div2")
            lDesc.innerHTML = ``
            var lUpItens = document.getElementById("div1")
            lUpItens.innerHTML = ""
            var ldown = document.getElementById("div3")
            ldown.innerHTML =""

            var nome = ""
            nome = json2.data[iten].name
            var desc = ""
            desc = json2.data[iten].description
            var upItens = []

            if (upItens.length != 0) {
                for (i = 0; i < upItens.length; i++) {
                    upItens.pop()
                }
            }
            
            if (json2.data[iten].into != undefined) {
                for (i = 0; i < json2.data[iten].into.length; i++) {
                    upItens.push(json2.data[iten].into[i])
                }
                lUpItens.innerHTML = ` <div id="divIev"></div>`
                
                lUpCont =document.getElementById("divIev")
                lUpCont.innerHTML=""
                lUpCont.innerHTML += `<h3>Possiveis aprimoramentos:</h3>`
                for (i = 0; i < upItens.length; i++) {

                    lUpCont.innerHTML += `                           
                    
                    <button onclick="dados(${upItens[i]})"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${upItens[i]}.png" alt="" width="50px"></button>`
                }

            }
            lDesc.innerHTML = `                           
             <div id="divDesc">            
            <h3>${nome}</h3>
            <img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${iten}.png" alt="" width="50px">
            <p>${desc}</p>
            </div>
            `
            var downItens = []

            if (downItens.length != 0) {
                for (i = 0; i < downItens.length; i++) {
                    downItens.pop()
                }
            }
            
            if (json2.data[iten].from!=undefined){
                for (i = 0; i < json2.data[iten].from.length; i++) {

                    downItens.push(json2.data[iten].from[i])
                }
                ldown.innerHTML = ` <div id="divINec"></div>`
                
                ldownCont =document.getElementById("divINec")
                ldownCont.innerHTML=""
                ldownCont.innerHTML += `<h3>Itens necessários:</h3>`
                for (i = 0; i < downItens.length; i++) {

                    ldownCont.innerHTML += `<button onclick="dados(${downItens[i]})"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${downItens[i]}.png" alt="" width="50px"></button>`
                }

            }




        })
}