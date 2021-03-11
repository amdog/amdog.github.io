window.onload = function () {
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));
    window.onscroll = (e) => {
        const cards = Array.from(document.querySelectorAll(".card"));
        cards.forEach((card, i) => {
            const scale = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            const opacity = clamp((400 + 300 * i - e.target.documentElement.scrollTop) / 300, 0, 1);
            card.style.transform = `scale(${scale})`;
            card.style.opacity = `${opacity}`;
            card.style.zIndex = `${i}`
            //节流
            if (e.target.documentElement.scrollTop > (now - 2) * 400) {
                scro()
            }
        });
    }

    function scro() {
        let start = true
        return function () {
            if (!start) return;
            setTimeout(() => {
                now++;
                if (now != -1) {
                    ajax(`https://amdog.github.io/page/${now}.html`, (data) => {
                        if (!!data) {
                            createEle(now)
                        } else {
                            now = -1
                        }
                    })
                }
            }, 1000)
        }
    }


    setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
            ajax(`https://amdog.github.io/page/${i}.html`, (data) => {
                if (!!data) {
                    createEle(i)
                }
            })
        }
    }, 0);
}

let now = 5


function search() {
    let keyword = document.getElementsByTagName('input')[1].value
    let eles = []
    let oldEles = Array.from(document.querySelectorAll('.card'))
    oldEles.forEach((c, i) => {
        if (c.textContent.indexOf(keyword) > -1) {
            eles.push(c)
        }
        if (i + 1 == oldEles.length) {
            let list = document.querySelector('.list')
            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
            eles.forEach(ele=>{
                list.appendChild(ele)
            })
        }
    })
}


function createEle(index) {
    let div = document.createElement('div')
    div.className = 'card';
    div.id = `c${index}`
    div.innerHTML = `<div class="dsc">
    <img src="./img/date.svg" alt="">2020-3-3
    <img src="./img/eay.svg" alt="">200
</div>
<div class="main">
    <div class="ifra">
        <iframe  scrolling='no' id='i${index}' src='https://amdog.github.io/page/${index}.html' frameborder="0"></iframe>
    </div>
    <div class="title" id='t${index}'>title</div>
</div>`
    let list = document.getElementsByClassName('list')[0]
    list.appendChild(div)
    //list.style.height=`${index*300+200}px`
    let ifra = document.getElementById(`i${index}`)
    ifra.contentWindow.document.onload = () => {
        div.lastChild.innerText = ifra.contentWindow.document.getElementsByTagName('title')[0].text
    }
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