const accesKey = "D4kKKc-ilI-GMmniUE5GjOQQXD3tCdSMvOk2WIl_cyM"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const searchButton = document.getElementById("search-button")

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()

    if(page === 1){
        searchResult.innerHTML = "";
    }


    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    searchButton.style.display = "block"
}

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

searchButton.addEventListener("click" , ()=>{
    page++;
    searchImage();
})