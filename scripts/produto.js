function onCardClick(comicIndex) {
    sessionStorage.setItem("comicIndex", comicIndex);
    window.location.replace('produto.html');
}

function loadComic(){
    const COMIC_INDEX = sessionStorage.getItem("comicIndex")
    comic = comicBooks[COMIC_INDEX] 

    const img = document.createElement("img")
    img.className = "image-product"
    img.src = `./images/${comic.foto}`;

    const productDetails = document.createElement("div")
    productDetails.className = "product-details"

    const productName = document.createElement("div")
    productName.className = "product-name"
    productName.innerHTML = comic.nome

    const productDescription = document.createElement("div")
    productDescription.className = "product-description"
    productDescription.innerHTML = comic.descricao

    const priceDisplay = document.createElement("div")
    priceDisplay.className = "price-display"

    const label = document.createElement("span")
    label.className = "label"
    label.innerHTML = "Preço: "
    const cifrao = document.createElement("span")
    cifrao.className = "cifrao"
    cifrao.innerHTML = "R$ "
    const label2 = document.createElement("span")
    label2.className = "label"
    label2.innerHTML = comic.preco

    priceDisplay.appendChild(label)
    priceDisplay.appendChild(cifrao)
    priceDisplay.appendChild(label2)
    productDetails.appendChild(productName)
    productDetails.appendChild(productDescription)
    productDetails.appendChild(priceDisplay)

    const productInfo = document.getElementById("product-info")
    productInfo.appendChild(img)
    productInfo.appendChild(productDetails)        
}

function loadSugestions(){
    const COMIC_INDEX = parseInt(sessionStorage.getItem("comicIndex"))
    for (let i = 1; i <= 5; i++) {
        var index = 0
        if (COMIC_INDEX + i <= comicBooks.length -1) {
            index = COMIC_INDEX + i
        }else{
            index = i - 1
        }
        
        const sugestionContainer = renderSugestion(index)
        document.getElementById("sugestions-list").appendChild(sugestionContainer)
    }
}
loadComic()
loadSugestions()

function onClickComprar(){
    window.location.replace('user.html');
}

function onClickRetornar(){
    window.location.replace('index.html');
}