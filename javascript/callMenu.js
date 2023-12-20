const menu = document.querySelector("#menu h1")


menu.addEventListener("click", (event) => {
    const menuBanner = document.querySelector(".menuBanner")
    if(menuBanner === null){
        showMenu()
    }
})

function showMenu(){
    if(inputPageNum !== null) inputPageNum.disabled=true;

    const div = document.createElement("div")
    div.classList.add("menuBanner")
    div.innerHTML = `
        <div class="menu-content">
            <div class="menu-content-inner">
                <h1><a href="index.html">關於作者</a></h1>
            </div>
            <div class="menu-content-inner">
                <h1>陳艾故事</h1>
                <h2 ><a href="return.html">Return</a></h2>
            </div>
            <div class="menu-content-inner">
                <h1>柏典故事</h1>
                <h2><a href="betweenDream.html">與夢之間</a></h2>
                <h2><a href="ILoveYou.html">我愛你</a></h2>
                <h2><a href="volcano.html">volcano</a></h2>
            </div>
        </div>
    `
    const book = document.querySelector('#book')
    book.after(div)
}