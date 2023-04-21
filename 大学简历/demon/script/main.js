function appendEle(index) {
    var div = document.createElement('div')
    div.className = 'card';
    div.id = `c${index}`
    div.innerHTML = `
    <iframe scrolling='no' id='i${index}' onload='joinTitle(this,${index})'  src='/demon/page/${index}.html' frameborder="0"></iframe><span class="title" id='b${index}' >
    <a href='/demon/page/${index}.html' id='t${index}' >
    <img src='./img/mes.svg'>
    </a>
    <a href='https://github.com/amdog/amdog.github.io/blob/master/demon/page/${index}.html'>
    <img src='./img/edit.svg'>
    </a>
    </span>`
    var box = document.getElementsByClassName('card-box')[index - 1]
    box.appendChild(div)
}

var i = 0

window.onload = function() {
    for (var b = 0; b < 12; b++) {
        createBox()
    }
    var clock = setInterval(function() {
        i++
        appendEle(i)
        if (i >= 8) {
            clearInterval(clock)
        }
    }, 100)
}


var bgList = ['#fda34b', '#FD84AD', '#009688', '#e95c5a', '#86ba4b', '#86C1B9']

function joinTitle(f, i) {
    document.querySelector(`#b${i} a:nth-child(1)`).style.color = `${bgList[i % 6]}`
    var title = f.contentWindow.document.title
    document.getElementById(`t${i}`).innerText = title
    var li = document.createElement('li')
    li.innerHTML = `<a href='/demon/page/${i}.html'>${title}</a>`
    document.getElementById('list').appendChild(li)
}


function createBox() {
    var box = document.createElement('div')
    box.className = 'card-box'
    var list = document.getElementsByClassName('list')[0]
    list.appendChild(box)
}

function ping(url, cb) {
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            cb(1)
        } else {
            cb(0)
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


var now = new Date().getTime()

window.onscroll = function() {
    var visionHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    var scrolledHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var trueHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (trueHeight - 20 <= (visionHeight + scrolledHeight)) {
        var cur = new Date().getTime()
        var next = setTimeout(function() {
            ping(`/demon/page/${i+1}.html`, function(t) {
                if (t == 1) {
                    if (i <= document.getElementsByClassName('card-box').length) {
                        for (var b = 0; b < 2; b++) {
                            createBox()
                        }
                    }
                    i++
                    appendEle(i)
                }
            })
        }, 1000)
        if (cur - now < 1000) {
            now = new Date().getTime()
            clearTimeout(next)
        }
    }
}

function sear() {
    window.open(`https://github.com/amdog/amdog.github.io/search?q=${document.getElementById('v').value}`)
}