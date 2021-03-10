let loadLib=(name,item)=>{
    ;return new Promise((res)=>{
        let ele=document.createElement('script');
        ele.src=item;
        ele.type='text/javascript';
        document.getElementsByTagName('body')[0].appendChild(ele);
        let count=0;
        let progressCdn=setInterval(()=>{
            if(!!window[name]){console.log(`load ${item} success!`);clearInterval(progressCdn);res();}
            else{
                if(count==3){
                    new Error().message=`load ${item} Error`;
                    clearInterval(progressCdn);
                    res();
                }
            }
            count++;
        },1000);
    });
}

;(async function main(){
    console.log(window.location.href);
    await loadLib('$','https://cdn.bootcdn.net/ajax/libs/jquery/2.2.0/jquery.min.js');
    showPanel();
})(); 

function Controlefdsafdsasa90908989u9ujdjsfdsa(tag){
    if(tag==1){
        $("#Controlefdsafdsasa90908989u9ujdjsfdsa").css('display','none');
    }
    else{
           let atgyuhijnkfsdahjkfdjsakjfdklsajlfdas= new Function('',$(".content-90ujowef90dasfdd90a").text());
           atgyuhijnkfsdahjkfdjsakjfdklsajlfdas(); 
    }
}

function showPanel(){
    let htm=`
    <div class="mark-jfsdaofu9089y8uh3232">      
    </div>
    <div class="body-9h89j9899x0cxvc">
        <div class="header-89oiu9sakjlj324">
            <span onclick="Controlefdsafdsasa90908989u9ujdjsfdsa(1)">Off</span><span onclick="Controlefdsafdsasa90908989u9ujdjsfdsa(2)">Run</span>
        </div>
<div spellcheck="false" contenteditable="true"  class="content-90ujowef90dasfdd90a">
<pre><code>
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
已经默认声明了jquery 可快捷使用
或者你也可以按照如下方式引入js库
await loadLib('$',
'https://xxx.js');
//http://github.com/amdog/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
**/</code><code>
console.log('running...');
</code></pre>
        </div>
    </div>
    <style>
pre{
overflow:hidden;
}
        .content-90ujowef90dasfdd90a{
            min-height: 600px;
            word-wrap: wrap;
        }
        .content-90ujowef90dasfdd90a>pre:nth-child(1)>code:nth-child(1){
            color: #444444;
        }
        .header-89oiu9sakjlj324>span{
            display: flex;
            cursor: pointer;
            z-index: 9999999999999999;
            justify-content: center;
            align-items: center;
            width: 50px;
            margin-right: 10px;
            height: 30px;
        }
        .header-89oiu9sakjlj324{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background-color: black;
        }
        .body-9h89j9899x0cxvc{
            width: 500px;
            z-index: 99999999999999;
            height: 700px;
            position: fixed;
            top: 50%;
            opacity: 1;
            margin-left: -250px;
            margin-top: -400px;
            color: #ffffff;
            background-color: #141403;
            left: 50%;
        }
        body{
            position: relative;
            margin: 0;
            padding: 0;
            font-family:  Helvetica,sans-serif,Arial,;
            font-size: 16px;
            position: relative;
        }
        .mark-jfsdaofu9089y8uh3232{
            position: fixed;
            background-color: #36341a;
            opacity: 0.5;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999999999999;
            height: 100%;}</style>
    `;
    let ele=document.createElement('div');
    ele.id='Controlefdsafdsasa90908989u9ujdjsfdsa';
    ele.innerHTML=htm;
    document.getElementsByTagName('body')[0].appendChild(ele);
}




