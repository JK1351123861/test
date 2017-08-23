!function(win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if(domWidth / v > 540){
            domWidth = 540 * v;
        }
        win.rem = domWidth / 16;
        domEle.style.fontSize = win.rem + "px";
    }
    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if(o){
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else if(flexible) {
        var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
        if (o) {
            v = parseFloat(o[2]);
            initial_scale = parseFloat((1 / v).toFixed(2))
        }
    }
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    //没有viewport标签的情况下
    if (domEle.setAttribute("data-dpr", v), !viewport) {
        if (viewport = dom.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
            domEle.firstElementChild.appendChild(viewport)
        } else {
            var m = dom.createElement("div");
            m.appendChild(viewport), dom.write(m.innerHTML)
        }
    }
    win.dpr = v;
    win.addEventListener("resize", function() {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function(b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
    resize();
}(window);

function form(){
    var request = new XMLHttpRequest();
    request.open("GET", "php/json.php");
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState===4) {
            if (request.status===200) { 
                var data = JSON.parse(request.responseText);

                
    var form = data.form
    for (var i = 0; i <form.length; i++) {
    // 创建DIV和a标签
    var href = document.createElement("a");
    var chang_flex = document.createElement("div");
    var task_block = document.createElement("div")
    var arrow = document.createElement("div");
    var interval_line = document.createElement("div");
    // 获取插入的DIV的标签
    var down_choose = document.getElementById("down-choose");
    //为创建的DIV，添加一个class类
    chang_flex.className = "chang-flex";
    task_block.className = "task-block";
    arrow.className = "arrow";
    interval_line.className = "interval-line";
    // 将文本内容渲染进DIV
    href.href = data.form[i].href;
    task_block.innerHTML = data.form[i].type;
    // 将创建好的DIV插入HTML中
    down_choose.appendChild(href)
    down_choose.appendChild(interval_line)
    href.appendChild(chang_flex)
    chang_flex.appendChild(task_block)
    chang_flex.appendChild(arrow)
    }
}
form()