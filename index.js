function newImage(url, left, bottom){
    let object = document.createElement("img")
    object.src = url
    object.style.position = "fixed"
    object.style.left = left + "px"
    object.style.bottom = bottom + "px"
    document.body.append(object)
        return object
}
function newItem(url, left, bottom){
    let object = newImage (url, left, bottom)

    object.addEventListener("dblclick", () => {
            object.remove()
        })
}
//bonus function
function backg(url, left, bottom, width, height){
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w*97, bottom+h*97)   
     } 
    }
}
let horizon = window.innerHeight / 2
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

backg('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
backg('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

//images
newImage("assets/pine-tree.png", 450, 200)
newImage("assets/green-character.gif", 100, 100)
newImage("assets/tree.png",200 ,300 )
newImage("assets/pillar.png",350 ,100 )
newImage("assets/crate.png",150 ,200 )
newImage("assets/well.png",500 ,425 )
//items
newItem("assets/sword.png", 500, 405)
newItem("assets/staff.png",600 ,100 )
newItem("assets/shield.png",165, 185)
