window.onload = function () {
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));


    if(document.documentElement.clientHeight > document.documentElement.clientWidth){
        document.getElementsByTagName('input')[0].style.width='200px'
        document.getElementsByTagName('input')[1].style.width='50px'
    }
    let start = new Date().getTime()
    window.onscroll = (e) => {
        const cards = Array.from(document.querySelectorAll(".card"));
        cards.forEach((card, i) => {
            //节流
            if (document.documentElement.clientHeight + e.target.documentElement.scrollTop >= document.documentElement.offsetHeight-600) {
                if (new Date().getTime() > start + 1000 && now > 0) {
                    let tmp = now + 1;
                    now = -9999999999999;
                    ajax(`https://amdog.github.io/page/${tmp}.html`, (data) => {
                        if (!!data) {
                            now = tmp
                            let regex = /.*?<title>(.*?)<\/title>.*?/
                            createEle(tmp)
                            let e = document.getElementById(`t${tmp}`)
                            e.innerHTML = regex.exec(data)[0];
                            e.innerHTML = e.textContent;
                        }
                    })
                    start = new Date().getTime()
                }
            }
            resizeZ(card,i,e)
        });
    }

    function resizeZ(card,i,e){
            const scale = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            const opacity = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            card.style.transform = `scale(${scale})`;
            card.style.opacity = `${opacity}`;
            card.style.zIndex = `${i}`
    }

    setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
            ajax(`https://amdog.github.io/page/${i}.html`, (data) => {
                if (!!data) {
                    let regex = /.*?<title>(.*?)<\/title>.*?/
                    createEle(i)
                    let e = document.getElementById(`t${i}`)
                    e.innerHTML = regex.exec(data)[0];
                    e.innerHTML = e.textContent
                }
            })
        }
    }, 500);
}

let now = 5

document.getElementsByTagName('input')[1].onclick=function searchAc() {
    let keyword = document.getElementsByTagName('input')[0].value
    window.location.href='https://github.com/amdog/amdog.github.io/search?q='+keyword
}


function createEle(index) {
    let div = document.createElement('div')
    div.className = 'card';
    div.id = `c${index}`
    div.innerHTML = `<div class="dsc">
    <img src="./img/date.svg" alt="">${parseInt(Math.random()*12%12)}-${parseInt(Math.random()*28%28)}
    <img src="./img/eay.svg" alt="">${parseInt(Math.random()*1000)}
</div>
<div class="main">
    <div class="ifra">
        <iframe  scrolling='no' id='i${index}' src='https://amdog.github.io/page/${index}.html' frameborder="0"></iframe>
    </div>
    <a href='https://amdog.github.io/page/${index}.html'> <div class="title" id='t${index}'></div></a>
</div>`
    let list = document.getElementsByClassName('list')[0]
    list.appendChild(div)
}

function ajax(url, cb) {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            cb(xmlhttp.responseText);
        } else {
            cb(null);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}