var sHp = ""
var sMp = ""
var sMovSpeed = ""
var sArmor = ""
var sResMag = ""
var sRange = ""
var sHpRegen = ""
var sMpRegen = ""
var sCrit = ""
var sAtaq = ""
var sAtaqSpeed = ""
var sHpL = ""
var sMpL = ""
var sArmorL = ""
var sResMagL = ""
var sHpRegenL = ""
var sMpRegenL = ""
var sCritL = ""
var sAtaqL = ""
var sAtaqSpeedL = ""
fetch("https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion.json")
    .then(res => res.json())
    .then(json => {


        var selectCamp = document.getElementById("selecCamp")

        selectCamp.innerHTML = `<option value="X" selected disabled hidden>Selecione um Campeão...</option>`

        for (var i in json.data) {
            selectCamp.innerHTML += `<option value="${i}">${i}</option>`
        }

        $("#selecCamp").change(function () {
            var selectCampeos = document.getElementById("selecCamp")
            const valueSelectcamp = selectCampeos.options[selectCampeos.selectedIndex].value
            escolha = valueSelectcamp
            var divPrinc = document.getElementById("divPrinc")
            divPrinc.innerHTML = `
            <div id="divNome">
              
            </div>
            <div id="divLore">
                       
            </div>
            <div id="divGeral">
                <div id="divSkin">
                    <p>Skins</p>
                </div>
                <div id="divInfStatus">
                    <div id="divInfo">
                        
                        
                    </div>
                    <div id="divStatus">
                        
                        
                    </div>
                </div>
                <div id="divSkill">

                </div>
            </div>`


            fetch(`https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion/${valueSelectcamp}.json`)
                .then(res => res.json())
                .then(json2 => {
                    for (var i in json2.data) {

                        var lNome = document.getElementById("divNome")
                        lNome.innerHTML = ""
                        var nome = ""
                        var titulo = ""
                        nome = json2.data[i].name
                        titulo = json2.data[i].title
                        lNome.innerHTML = `<h1>${nome}, ${titulo}</h1>`

                        var lLore = document.getElementById("divLore")
                        lLore.innerHTML = ""
                        var lore = ""
                        lore = json2.data[i].lore
                        lLore.innerHTML = `<p>${lore}</p>`

                        var lInfo = document.getElementById("divInfo")
                        lInfo.innerHTML = ""
                        var iAttack = ""
                        var iDefense = ""
                        var iMagic = ""
                        var iDiff = ""
                        iAttack = json2.data[i].info.attack
                        iDefense = json2.data[i].info.defense
                        iMagic = json2.data[i].info.magic
                        iDiff = json2.data[i].info.difficulty
                        lInfo.innerHTML += `<h3>Informações:</h3>`
                        lInfo.innerHTML += `<p>Ataque: ${iAttack}</p>`
                        lInfo.innerHTML += `<p>Defesa: ${iDefense}</p>`
                        lInfo.innerHTML += `<p>Poder Magico: ${iMagic}</p>`
                        lInfo.innerHTML += `<p>Dificuldade: ${iDiff}</p>`

                        var lStats = document.getElementById("divStatus")
                        lStats.innerHTML = ""
                        sHp = ""
                        sMp = ""
                        sMovSpeed = ""
                        sArmor = ""
                        sResMag = ""
                        sRange = ""
                        sHpRegen = ""
                        sMpRegen = ""
                        sCrit = ""
                        sAtaq = ""
                        sAtaqSpeed = ""
                        sHp = json2.data[i].stats.hp
                        sMp = json2.data[i].stats.mp
                        sMovSpeed = json2.data[i].stats.movespeed
                        sRange = json2.data[i].stats.attackrange
                        sArmor = json2.data[i].stats.armor
                        sResMag = json2.data[i].stats.spellblock
                        sHpRegen = json2.data[i].stats.hpregen
                        sMpRegen = json2.data[i].stats.mpregen
                        sCrit = json2.data[i].stats.crit
                        sAtaq = json2.data[i].stats.attackdamage
                        sAtaqSpeed = json2.data[i].stats.attackspeed

                        sHpL = json2.data[i].stats.hpperlevel
                        sMpL = json2.data[i].stats.mpperlevel
                        sArmorL = json2.data[i].stats.armorperlevel
                        sResMagL = json2.data[i].stats.spellblockperlevel
                        sHpRegenL = json2.data[i].stats.hpregenperlevel
                        sMpRegenL = json2.data[i].stats.mpregenperlevel
                        sCritL = json2.data[i].stats.critperlevel
                        sAtaqL = json2.data[i].stats.attackdamageperlevel
                        sAtaqSpeedL = json2.data[i].stats.attackspeedperlevel

                        lStats.innerHTML += `
                        <div>
                        <h3>Atributos:</h3>
                        <label for="inputLevel">Level:<input type="number" name="inputLevel" id="inputLevel" value="1" min="1" max="18"></label>
                        </div>
                        <div id="divStatusAtt">
                        <p>HP: ${sHp}</p>
                        <p>MP: ${sMp}</p>
                        <p>Velocidade de movimento: ${sMovSpeed}</p>
                        <p>Alcance: ${sRange}</p>
                        <p>Armor: ${sArmor}</p>
                        <p>Resistencia magica: ${sResMag}</p>
                         <p>Regeneração de hp: ${sHpRegen}</p>
                        <p>Regeneração de mana: ${sMpRegen}</p>
                        <p>Critico: ${sCrit}</p>
                        <p>Ataque fisico: ${sAtaq}</p>
                        <p>Velocidade de ataque: ${sAtaqSpeed}</p>
                        </div>`

                        $("#inputLevel").change(function () {
                            var lv = $("#inputLevel").val()
                            var lStatusAtt = document.getElementById("divStatusAtt")

                            if (lv <= 1) {
                                lStatusAtt.innerHTML = `
                                <p>HP: ${sHp}</p>
                                <p>MP: ${sMp}</p>
                                <p>Velocidade de movimento: ${sMovSpeed}</p>
                                <p>Alcance: ${sRange}</p>
                                <p>Armor: ${sArmor}</p>
                                <p>Resistencia magica: ${sResMag}</p>
                                 <p>Regeneração de hp: ${sHpRegen}</p>
                                <p>Regeneração de mana: ${sMpRegen}</p>
                                <p>Critico: ${sCrit}</p>
                                <p>Ataque fisico: ${sAtaq}</p>
                                <p>Velocidade de ataque: ${sAtaqSpeed}</p>`
                            } else {
                                if (lv >= 18) {
                                    var attHp = sHp + (sHpL * (18 - 1))
                                    var attMp = sMp + (sMpL * (18 - 1))

                                    var attArmor = sArmor + (sArmorL * (18 - 1))
                                    attArmor= parseFloat(attArmor.toFixed(2))
                                    var attRes = sResMag + (sResMagL * (18 - 1))
                                    attRes= parseFloat(attRes.toFixed(2))
                                    var attHpRegen = sHpRegen + (sHpRegenL * (18 - 1))
                                    attHpRegen= parseFloat(attHpRegen.toFixed(2))
                                    var attMpRegen = sMpRegen + (sMpRegenL * (18 - 1))
                                    attMpRegen= parseFloat(attMpRegen.toFixed(2))
                                    var attCrit = sCrit + (sCritL * (18 - 1))
                                    attCrit= parseFloat(attCrit.toFixed(2))
                                    var attAtaq = sAtaq + (sAtaqL * (18 - 1))
                                    attAtaq= parseFloat(attAtaq.toFixed(2))
                                    var attAtaqueSpd = sAtaqSpeed+((18-1)*(sAtaqSpeedL *sAtaqSpeed*0.01))
                                    attAtaqueSpd= parseFloat(attAtaqueSpd.toFixed(2))

                                    lStatusAtt.innerHTML = ""
                                    lStatusAtt.innerHTML = `
                                    <p>HP: ${attHp}</p>
                                     <p>MP: ${attMp}</p>
                                    <p>Velocidade de movimento: ${sMovSpeed}</p>
                                     <p>Alcance: ${sRange}</p>
                                     <p>Armor: ${attArmor}</p>
                                     <p>Resistencia magica: ${attRes}</p>
                                    <p>Regeneração de hp: ${attHpRegen}</p>
                                    <p>Regeneração de mana: ${attMpRegen}</p>
                                     <p>Critico: ${attCrit}</p>
                                     <p>Ataque fisico: ${attAtaq}</p>
                                     <p>Velocidade de ataque: ${attAtaqueSpd}</p>`

                                } else {
                                    var attHp = sHp + (sHpL * (lv - 1))
                                    attHp= parseFloat(attHp.toFixed(2))
                                    var attMp = sMp + (sMpL * (lv - 1))
                                    attMp= parseFloat(attMp.toFixed(2))
                                    var attArmor = sArmor + (sArmorL * (lv - 1))
                                    attArmor= parseFloat(attArmor.toFixed(2))
                                    var attRes = sResMag + (sResMagL * (lv - 1))
                                    attRes= parseFloat(attRes.toFixed(2))
                                    var attHpRegen = sHpRegen + (sHpRegenL * (lv - 1))
                                    attHpRegen= parseFloat(attHpRegen.toFixed(2))
                                    var attMpRegen = sMpRegen + (sMpRegenL * (lv - 1))
                                    attMpRegen= parseFloat(attMpRegen.toFixed(2))
                                    var attCrit = sCrit + (sCritL * (lv - 1))
                                    attCrit= parseFloat(attCrit.toFixed(2))
                                    var attAtaq = sAtaq + (sAtaqL * (lv - 1))
                                    attAtaq= parseFloat(attAtaq.toFixed(2))
                                    var attAtaqueSpd = sAtaqSpeed+((lv-1)*(sAtaqSpeedL *sAtaqSpeed*0.01))
                                    attAtaqueSpd= parseFloat(attAtaqueSpd.toFixed(2))

                                    lStatusAtt.innerHTML = ""
                                    lStatusAtt.innerHTML = `
                                    <p>HP: ${attHp}</p>
                                     <p>MP: ${attMp}</p>
                                    <p>Velocidade de movimento: ${sMovSpeed}</p>
                                     <p>Alcance: ${sRange}</p>
                                     <p>Armor: ${attArmor}</p>
                                     <p>Resistencia magica: ${attRes}</p>
                                    <p>Regeneração de hp: ${attHpRegen}</p>
                                    <p>Regeneração de mana: ${attMpRegen}</p>
                                     <p>Critico: ${attCrit}</p>
                                     <p>Ataque fisico: ${attAtaq}</p>
                                     <p>Velocidade de ataque: ${attAtaqueSpd}</p>`
                                }
                            }

                        })
                        var lSkills = document.getElementById("divSkill")
                        lSkills.innerHTML = ""
                        var pImg = json2.data[i].passive.image.full
                        var pNome = json2.data[i].passive.name
                        var pDesc = json2.data[i].passive.description
                        var habImg = []
                        var habNome = []
                        var habDesc = []
                        var habCd = []
                        var habCust = []
                        habImg.push(json2.data[i].spells[0].image.full)
                        habNome.push(json2.data[i].spells[0].name)
                        habDesc.push(json2.data[i].spells[0].description)
                        habCd.push(json2.data[i].spells[0].cooldownBurn)
                        habCust.push(json2.data[i].spells[0].costBurn)

                        habImg.push(json2.data[i].spells[1].image.full)
                        habNome.push(json2.data[i].spells[1].name)
                        habDesc.push(json2.data[i].spells[1].description)
                        habCd.push(json2.data[i].spells[1].cooldownBurn)
                        habCust.push(json2.data[i].spells[1].costBurn)

                        habImg.push(json2.data[i].spells[2].image.full)
                        habNome.push(json2.data[i].spells[2].name)
                        habDesc.push(json2.data[i].spells[2].description)
                        habCd.push(json2.data[i].spells[2].cooldownBurn)
                        habCust.push(json2.data[i].spells[2].costBurn)

                        habImg.push(json2.data[i].spells[3].image.full)
                        habNome.push(json2.data[i].spells[3].name)
                        habDesc.push(json2.data[i].spells[3].description)
                        habCd.push(json2.data[i].spells[3].cooldownBurn)
                        habCust.push(json2.data[i].spells[3].costBurn)

                        lSkills.innerHTML = `
                        <div id="divImgs">
                        <div >
                       
                        </div>
                        <div >
                        <button id="spellP"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/passive/${pImg}" alt=""></butoon>  
                        </div>
                        <div>
                        <button id="spell0"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${habImg[0]}" alt=""></butoon> 
                        </div>
                        <div>
                        <button id="spell1"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${habImg[1]}" alt=""></butoon> 
                        </div>
                        <div>
                        <button id="spell2"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${habImg[2]}" alt=""></butoon> 
                        </div>
                        <div>
                        <button id="spell3"><img src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${habImg[3]}" alt=""></butoon> 
                        </div>
                        </div>  
                        <div id="divSDesc">

                        </div> 
                        `
                        var lDescSkills = document.getElementById("divSDesc")
                        lDescSkills.innerHTML = ` 
                        <div class="divSNome">
                        <h3>Passiva: ${pNome}</h3>
                        </div>
                        <div class="divSDesc">
                        <p>${pDesc}</p>
                        </div>
                         `

                        $("#spellP").click(function () {
                            var lDescSkills = document.getElementById("divSDesc")
                            lDescSkills.innerHTML = ` 
                            <div class="divSNome">
                            <h3>Passiva: ${pNome}</h3>
                            </div>
                            <div class="divSDesc">
                            <p>${pDesc}</p>
                            </div>
                             `
                        })
                        $("#spell0").click(function () {
                            var lDescSkills = document.getElementById("divSDesc")
                            lDescSkills.innerHTML = ` 
                            <div class="divSNome">
                                    <h3>${habNome[0]}</h3>
                                </div>
                                <div class="divSCC">
                                   <p>Tempo de recarga: ${habCd[0]}</p>
                                   <p>Custo de mana: ${habCust[0]}</p>
                                 </div>
                            <div class="divSDesc">
                            <p>${habDesc[0]}</p>
                            </div>
                             `
                        })
                        $("#spell1").click(function () {
                            var lDescSkills = document.getElementById("divSDesc")
                            lDescSkills.innerHTML = ` 
                            <div class="divSNome">
                                    <h3>${habNome[1]}</h3>
                                </div>
                                <div class="divSCC">
                                   <p>Tempo de recarga: ${habCd[1]}</p>
                                   <p>Custo de mana: ${habCust[1]}</p>
                                 </div>
                            <div class="divSDesc">
                            <p>${habDesc[1]}</p>
                            </div>
                             `
                        })
                        $("#spell2").click(function () {
                            var lDescSkills = document.getElementById("divSDesc")
                            lDescSkills.innerHTML = ` 
                            <div class="divSNome">
                                    <h3>${habNome[2]}</h3>
                                </div>
                                <div class="divSCC">
                                   <p>Tempo de recarga: ${habCd[2]}</p>
                                   <p>Custo de mana: ${habCust[2]}</p>
                                 </div>
                            <div class="divSDesc">
                            <p>${habDesc[2]}</p>
                            </div>
                             `
                        })
                        $("#spell3").click(function () {
                            var lDescSkills = document.getElementById("divSDesc")
                            lDescSkills.innerHTML = ` 
                            <div class="divSNome">
                                    <h3>${habNome[3]}</h3>
                                </div>
                                <div class="divSCC">
                                   <p>Tempo de recarga: ${habCd[3]}</p>
                                   <p>Custo de mana: ${habCust[3]}</p>
                                 </div>
                            <div class="divSDesc">
                            <p>${habDesc[3]}</p>
                            </div>
                             `
                        })
                        var cdSkins = []
                        for (var y in json2.data[i].skins) {
                            cdSkins.push(json2.data[i].skins[y].num)
                        }
                        var lSkins = document.getElementById("divSkin")
                        lSkins.innerHTML = ` <div class="divSCC">
                        <div>
                        <button class="btnLados" id="sLeft">←</button>
                        <button class="btnLados" id="sRight">→</button>
                        </div>
                        <div id="divImgSkin">
                        <img id="imgSkin" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_${cdSkins[0]}.jpg" alt="" width="80%">
                        </div>
                      </div>`
                        var cont = 0
                        var maxCont = cdSkins.length
                        console.log(maxCont)
                        $("#sLeft").click(function () {
                            if (cont == 0) {
                                cont = maxCont - 1
                                var lImgSkin = document.getElementById("divImgSkin")
                                lImgSkin.innerHTML = `<img id="imgSkin" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_${cdSkins[cont]}.jpg" alt="" width="80%">`
                            } else {
                                if (cont > 0) {
                                    cont--
                                    var lImgSkin = document.getElementById("divImgSkin")
                                    lImgSkin.innerHTML = `<img id="imgSkin" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_${cdSkins[cont]}.jpg" alt="" width="80%">`

                                }
                            }
                        })
                        $("#sRight").click(function () {
                            if(cont==(maxCont-1)){
                                cont=0
                                var lImgSkin = document.getElementById("divImgSkin")
                                lImgSkin.innerHTML = `<img id="imgSkin" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_${cdSkins[cont]}.jpg" alt="" width="80%">`
                            }else{
                                cont++
                                var lImgSkin = document.getElementById("divImgSkin")
                                lImgSkin.innerHTML = `<img id="imgSkin" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_${cdSkins[cont]}.jpg" alt="" width="80%">`
                            }
                        })

                    }
                })

        })
    })