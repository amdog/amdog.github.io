function appendEle(index) {
    var div = document.createElement('div')
    div.className = 'card';
    div.id = `c${index}`
    div.innerHTML = `<iframe scrolling='no' id='i${index}' onload='joinTitle(this,${index})'  src='https://amdog.github.io/page/${index}.html' frameborder="0"></iframe><span class="title" id='b${index}' ><a href='https://amdog.github.io/page/${index}.html' id='t${index}' ></a></span>`
    var box = document.getElementsByClassName('card-box')[index - 1]
    box.appendChild(div)
}

var i = 0

window.onload = function() {
    for (var b = 0; b < 10; b++) {
        createBox()
    }
    var clock = setInterval(function() {
        i++
        appendEle(i)
        if (i >= 10) {
            clearInterval(clock)
        }
    }, 100)
}


var bgList = ['#fda34b', '#FD84AD', '#009688', '#e95c5a', '#86ba4b', '#86C1B9']

function joinTitle(f, i) {
    var title = f.contentWindow.document.title
    document.getElementById(`t${i}`).innerText = title
    document.getElementById(`b${i}`).style.background = bgList[document.getElementsByClassName('card').length % 6]
    var li = document.createElement('li')
    li.innerText = title
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

window.onscroll = function() {
    var visionHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    var scrolledHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var trueHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (trueHeight == visionHeight + scrolledHeight) {
        ping(`https://amdog.github.io/page/${i+1}.html`, function(t) {
            if (t == 1) {
                i++
                if (i <= document.getElementsByClassName('card-box').length) {
                    for (var b = 0; b < 4; b++) {
                        createBox()
                    }
                }
                appendEle(i)
            }
        })
    }
}