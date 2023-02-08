let runScripts = () =>{ 
    var chart_bars = document.getElementById("chart-bars")
    console.log(chart_bars)

    var icons = document.getElementsByTagName("i")
    console.log(icons)

    var cards = document.getElementsByClassName("card")
    console.log(cards)
}

let modifyText = () => {
    var listofP = document.getElementsByTagName("p")
    var elementP = listofP[3]
    elementP.innerHTML = 'Dinero actual'

    var listofH4 = document.getElementsByTagName("h4")
    var elementH4 = listofH4[0]
    elementH4.innerHTML = '$301k'
}

runScripts()
modifyText()