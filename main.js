$(document).ready(() => {
  $("#nourstory").on('click', e => {
      $("#info1").addClass("show")
      $("#info2").removeClass("show")
      $("#info3").removeClass("show")
      $("#infotab1").addClass("show")
      $("#infotab2").removeClass("show")
      $("#infotab3").removeClass("show")
})

  $("#nmenu").on('click', e => {
      $("#info2").addClass("show")
      $("#info1").removeClass("show")
      $("#info3").removeClass("show")
      $("#info2").addClass("show")
      $("#infotab2").addClass("show")
      $("#infotab1").removeClass("show")
      $("#infotab3").removeClass("show")
     

  })

  $("#nreservation").on('click', e => {
      $("#info3").addClass("show")
      $("#info2").removeClass("show")
      $("#info1").removeClass("show")
      $("#info3").addClass("show")
      $("#infotab2").removeClass("show")
      $("#infotab1").removeClass("show")
      $("#infotab3").addClass("show")
  })

  $("#infotab3").on('click', e => {
    $("#info3").addClass("show")
    $("#info2").removeClass("show")
    $("#info1").removeClass("show")
    $("#info3").addClass("show")
    $("#infotab2").removeClass("show")
    $("#infotab1").removeClass("show")
    $("#infotab3").addClass("show")
})

$("#infotab2").on('click', e => {
    $("#info2").addClass("show")
    $("#info1").removeClass("show")
    $("#info3").removeClass("show")
    $("#info2").addClass("show")
    $("#infotab2").addClass("show")
    $("#infotab1").removeClass("show")
    $("#infotab3").removeClass("show")
})

$("#infotab1").on('click', e => {
    $("#info1").addClass("show")
    $("#info2").removeClass("show")
    $("#info3").removeClass("show")
    $("#infotab1").addClass("show")
    $("#infotab2").removeClass("show")
    $("#infotab3").removeClass("show")
})




$.get("https://obscure-tundra-54269.herokuapp.com/fine-dining", function(data) {
  renderMenu(data)
})

function renderMenu(data) {
  const appetizers = data.appetizers.map(app => {

    let spicy = app.extra.spicy ? '<i id="hot" class="fas fa-pepper-hot"></i>' : '' ;
       
    let veggy = app.extra.vegetarian ? '&#x24E5;' : ''

    let gf = app.extra.glutenfree ? '<img src="Images/gluten-free.svg"/>' : ""

    let appHTML =  `
      <div class="item">
        <p class="name">${app.name}</p>
        <p class="price">${app.price}</p><br>
        <p class="extra">${spicy}${veggy}${gf}</p>
        <p class="description">${app.description}</p>

      </div>
      `  
    return appHTML
  }).join('')
  $("#apps").html(appetizers)


  const entrees = data.entrees.map(main => {

    let spicy = main.extra.spicy ? '<i id="hot" class="fas fa-pepper-hot"></i>' : '' 

    let veggy = main.extra.vegetarian ? '&#x24E5;' : ''

    let gf = main.extra.glutenfree ? '<img src="Images/gluten-free.svg"/>' : ""


    let mainHTML = `
      <div class="item">
        <p class="name">${main.name}</p>
        <p class="price">${main.price}</p><br>
        <p class="extra">${spicy}${veggy}${gf}</p>
        <p class="description">${main.description}</p>
      </div>
 `
    return mainHTML
    }).join('')
    $("#entrees").html(entrees)

  const dessert = data.desserts.map(sweets => {
    
    let spicy = sweets.extra.spicy ? '<i id="hot" class="fas fa-pepper-hot"></i>' : '' ;

    let veggy = sweets.extra.vegetarian ? '&#x24E5;' : ''

    let gf = sweets.extra.glutenfree ? '<img src="Images/gluten-free.svg"/>' : ""

    let sweetsHTML = `
      <div class="item">
        <p class="name">${sweets.name}</p>
        <p class="price">${sweets.price}</p><br>
        <p class="extra">${spicy}${veggy}${gf}</p>
        <p class="description">${sweets.description}</p>
      </div>
 `  
  return sweetsHTML
  }).join('')
  $("#desserts").html(dessert)
}

})



