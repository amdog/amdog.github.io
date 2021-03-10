window.onload = function () {
    //document.documentElement.scrollTop = 1
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));
    const cards = Array.from(document.querySelectorAll(".card"));
    window.onscroll = (e) => {
        cards.forEach((card, i) => {
            const scale = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            const opacity = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            card.style.transform = `scale(${scale})`;
            card.style.opacity = `${opacity}`;
        });
    }
    setTimeout(() => {
        for(let i=0;i<5;i++){
            this.ajax(`https://amdog.github.io/page/${i}.html`,(data)=>{
                if(!!data){
                    createEle(i)
                }
            })
        }
    }, 0);
}

function createEle(index){
    let div=document.createElement('div')
    div.className='card';
    div.innerHTML=`<div class="dsc">
    <img src="./img/date.svg" alt="">2020-3-3
    <img src="./img/eay.svg" alt="">200
</div>
<div class="main">
    <div class="ifra">
        <iframe  scrolling='no' id='i${index}' src='https://amdog.github.io/page/${index}.html' frameborder="0"></iframe>
    </div>
    <div class="title">title</div>
</div>`
    document.getElementsByTagName('body')[0].appendChild(div)
    div.lastChild.innerText=document.getElementById(`i${index}`).contentWindow.document.getElementsByTagName('title')[0].text
}

function ajax(url,cb) {
    let xmlhttp;
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            cb(xmlhttp.responseText);
        }else{
            cb(null);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}