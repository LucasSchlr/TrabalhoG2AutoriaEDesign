function onCardClick(comicIndex) {
    sessionStorage.setItem("comicIndex", comicIndex);
    window.location.replace('produto.html');
}

function loadComics(){
    var sugestionList = undefined
    comicBooks.forEach((_, i) => {

        if (!sugestionList){
            sugestionList = document.createElement("div")
            sugestionList.className = "sugestions-list"
        }

        sugestionContainer = renderSugestion(i)
        sugestionList.appendChild(sugestionContainer)
        
        if ((i+1) % 5 == 0){
            document.getElementById("gallery-container").appendChild(sugestionList)
            sugestionList = undefined
        }
    })

    document.getElementById("gallery-container").appendChild(sugestionList)
}

loadComics()