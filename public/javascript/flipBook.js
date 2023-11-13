$(".pages").turn({
    acceleration: true, //是否啟動硬體加速
    pages:100, //總頁數
    page: 1, //開始頁
    diplay: "single",
    direction: "rtl", //右翻(rtl)左翻(ltr)設定
    duration: 1500, //翻頁過度時間(ms)
    width: 850, //單位px
    height: 600, //單位px
    elevation: 300,
    when: {
        //翻頁後觸發
        turned: function (e, page, view) {
            // console.log("Current view: ", view)
            // console.log("Current page: ", page)
        },
        //翻頁前觸發
        turning: function (e, page, view) {
            let rightPage = document.querySelector(`.page-num-${view[0]} .pages-content`)
            let leftPage = document.querySelector(`.page-num-${view[1]} .pages-content`)

            if (rightPage !== null) SetPageNum(view[0], rightPage)
            if (leftPage !== null) SetPageNum(view[1], leftPage)
        }
    }
})


function SetPageNum(pageNum  , divPageContent){
    const divPageNum = document.querySelector(`.page-num-${pageNum} .page-number`)
    if(divPageNum === null){
        const div = document.createElement("div")
        div.classList.add("page-number")
        div.innerHTML = `<p>--${pageNum}--</p>`

        divPageContent.after(div)
    }
}

function ToPage(pageNum){
    $(".pages").turn("page", pageNum)

    let rightPageNum
    let leftPageNum
    let rightPage
    let leftPage

    if(pageNum%2 === 0){
        rightPageNum = pageNum
        leftPageNum = pageNum+1
    }else{
        rightPageNum = pageNum-1
        leftPageNum = pageNum
    }
    
    rightPage = document.querySelector(`.page-num-${rightPageNum} .pages-content`)
    leftPage = document.querySelector(`.page-num-${leftPageNum} .pages-content`)

    if (rightPage !== null) SetPageNum(rightPageNum, rightPage)
    if (leftPage !== null) SetPageNum(leftPageNum, leftPage)
}