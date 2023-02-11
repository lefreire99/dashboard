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

let updateData = () => {
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }
    ];

    let [ users, clients, sales ] = data;
    
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;
     
    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

    
    let listOfElements = document.getElementsByClassName('text-end pt-1')
    let [ , second, third, fourth ] = listOfElements;
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales; 

    
    let cambios = [
        {
            valor_previo: 250,
            valor_actual: 301,
            periodo: 'semana'
        },
        {
            valor_previo: 3510,
            valor_actual: 3200,
            periodo: 'semana'
        },
        {
            valor_previo: 3920,
            valor_actual: 4215,
            periodo: 'ayer'
        },
        {
            valor_previo: 110200,
            valor_actual: 121520,
            periodo: 'ayer'
        }
    ]
    
    let listOfElements2 = document.getElementsByClassName('card-footer p-3')
    
    for(var i=0; i<listOfElements2.length; i++){
        let{valor_previo,valor_actual,periodo} = cambios[i]
        let porcentaje_de_cambio = (valor_actual - valor_previo)*100/valor_previo
        let clase_cambio = "text-success"
        if (porcentaje_de_cambio<0)
            clase_cambio = "text-danger"
        let plantilla = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentaje_de_cambio.toFixed(2)}% </span> ${periodo} </p>`
       listOfElements2[i].innerHTML = plantilla
    }
}

runScripts()
modifyText()
updateData()