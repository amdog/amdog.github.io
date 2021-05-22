function appendEle(index) {
    var div = document.createElement('div')
    div.className = 'card';
    div.id = `c${index}`
    div.innerHTML = `<iframe scrolling='no' id='i${index}' onload='joinTitle(this,${index})'  src='https://amdog.github.io/page/${index}.html' frameborder="0"></iframe><span class="title" id='b${index}' ><a href='https://amdog.github.io/page/${index}.html' id='t${index}' ></a><a href='https://github.com/amdog/amdog.github.io/edit/master/page/${index}.html'><svg t="1621676071639" class="edit" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5166" width="32" height="32"><path d="M99.84 797.44l297.6-42.88-277.76-265.6L71.04 768a25.6 25.6 0 0 0 28.8 29.44z m64-357.76L444.16 704l284.16-296.96L448 142.72zM545.28 43.52l-47.36 49.92 277.76 264.96 47.36-49.92a30.08 30.08 0 0 0 0-42.24L588.16 42.24a30.08 30.08 0 0 0-42.88 1.28zM192 832h256v128H192zM832 832h128v128h-128zM576 832h128v128H576z" fill="#ffffff" p-id="5167"></path></svg></a></span>`
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
    document.getElementById(`b${i}`).style.background = bgList[i % 6]
    var title = f.contentWindow.document.title
    document.getElementById(`t${i}`).innerText = title
    var li = document.createElement('li')
    li.innerHTML = `<a href='https://amdog.github.io/page/${i}.html'>${title}</a>`
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
            ping(`https://amdog.github.io/page/${i+1}.html`, function(t) {
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