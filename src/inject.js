(function(){

    var divTag = document.createElement("div"); 
    var iframeId="destiny"+Date.now();
    divTag.id = "screentool"; 
 
    divTag.setAttribute("align", "center"); 
 
    divTag.style.margin = "0px";
    divTag.style.position = "fixed";
    divTag.style.zIndex = "999999999";
    divTag.style.width = "100%";
    divTag.style.top = "0px";
    divTag.style.background = "rgba(0,0,0,0.6)";
    divTag.style.fontFamily = "sans-serif";
    divTag.style.color = "#f9f9f9";
    divTag.style.fontSize = "12px";
    divTag.style.padding = "5px";
    divTag.className = "toolbar";

    divTag.innerHTML = "AppNexus Creative Insertion Tool";

    //document.body.appendChild(divTag);


    
    function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop;
        el = el.offsetParent;
    }
        return { top: _y, left: _x };
    }

    function addControls(a,b) {
        var ev = arguments[0] || window.event,
        origEl = ev.target || ev.srcElement;
        var target = origEl;
        xpos = a - 2;
        ypos = b - 2;
        var scontrols = document.createElement("div");
        scontrols.id = "screentool-controls";
        scontrols.style.height = "25px";
        scontrols.style.width = "25px";
        scontrols.style.position = "absolute";
        scontrols.style.top = ypos + "px";
        scontrols.style.left = xpos + "px";
        scontrols.style.background = "#f14be8";
        target.appendChild(scontrols);
    }
    function removeControls() {
        element = document.getElementById("screentool-controls");
        element.parentNode.removeChild(element);
    }
    // var creativeId = "745684";
    function insertCreative(id, x, y) {
        var creativeId = id;
        var url = "http://ib.adnxs.com/cr?id=" + creativeId;
        var content=`<!DOCTYPE html>
        <html>
        <head>
          <script type="text/javascript">
            var apntag = apntag || {};
            apntag.anq = apntag.anq || [
              function () {
                apntag.debug = true;
                apntag.defineTag({
                  tagId:13144370,
                  forceCreativeId: ${creativeId},
                  targetId: 'apn_ad_slot_1'
                });
                apntag.onEvent('adLoaded', 'apn_ad_slot_1', function(adLoaded, adObj){
                  if(adLoaded&&adLoaded.banner){
                    let {
                      width=false,
                      height=false
                    }=adLoaded.banner;
                    if(width && height){
                     let parentElem=window.parent.document.getElementById("${iframeId}");
                     parentElem.style.width=\`\${width}px\`;
                     parentElem.style.height=\`\${height}px\`;
                     parentElem.setAttribute("height",height);
                     parentElem.setAttribute("width",width);
                    }
                  }
                  console.log('callback executed');
                  console.log(adObj,adLoaded);
                });
                apntag.loadTags();
              }
            ];
          </script>
          <script src="https://acdn.adnxs.com/ast/ast.js" async="async"></script>
        </head>
        <body style="padding:0px;margin:0px;">
          <div id="apn_ad_slot_1">
            <script type="text/javascript">
              apntag.anq.push(function () {
                apntag.showTag('apn_ad_slot_1');
              });
            </script>
          </div>
        </body>
        </html>`;
        var ev = arguments[0] || window.event,
        origEl = ev.target || ev.srcElement;
        var elems = document.getElementsByTagName('*'), i;
        var destinyIframe;
        for (i in elems) {
            if((" " + elems[i].className + " ").indexOf(" " + "target_ad" + " ") > -1)
            {
                    if (elems[i].tagName != "DIV") {
                        if (elems[i].tagName == "IFRAME") {
                            // elems[i].parentNode.innerHTML = "<iframe src='" + url + "' framespacing='0' frameborder='no' scrolling='no' width='" + x + "' height='" + y + "'></iframe>";
                            destinyIframe=elems[i];
                            // elems[i].tagName = "iframe";
                            // elems[i].src = url;
                        } else {
                            var adframe = document.createElement("iframe");
                            //adframe.src = url;
                            adframe.height = y;
                            adframe.width = x;
                            adframe.frameBorder = 0;
                            adframe.scrolling = "no";
                            elems[i].parentNode.insertBefore(adframe, elems[i].nextSibling);
                            elems[i].parentNode.removeChild(elems[i]);
                            destinyIframe=adframe;
                            // alert(elems[i].tagName);
                        }
                    } else {
                        elems[i].innerHTML = "<iframe id='"+iframeId+"' framespacing='0' frameborder='no' scrolling='no' width='100%' height='100%'></iframe>";
                        destinyIframe=document.getElementById("destinyIframe");
                    }
            }
        }
        if(destinyIframe){
          destinyIframe.setAttribute("id",iframeId);
          var iframeContent = (destinyIframe.contentWindow) ? destinyIframe.contentWindow : (destinyIframe.contentDocument.document) ? destinyIframe.contentDocument.document : destinyIframe.contentDocument;
          iframeContent.document.open();
          iframeContent.document.write(content);
          iframeContent.document.close();
        }
    }
    function insertCreativeT(x, y) {
        var creativeId = x;
        url = "http://ib.adnxs.com/cr?id=" + creativeId;
        var ev = arguments[0] || window.event,
        origEl = ev.target || ev.srcElement;
        var target = origEl;
        y.parentNode.innerHTML = "<iframe src='" + url + "' framespacing='0' frameborder='no' scrolling='no' width='100%' height='100%'></iframe>";
    }
    function getEl(){
        var ev = arguments[0] || window.event,
        origEl = ev.target || ev.srcElement;
        var target = origEl;
        if (target.id == "screentool-controls") {
            target.onclick = function(){
                    if (target.height == null) {
                        var height = parseInt(target.style.height);
                        var width = parseInt(target.style.width);
                    } else {
                        var height = target.height;
                        var width = target.width;
                    }
                    cid = prompt("please enter a creative ID");
                    if (cid != null && cid != "") { 
                        insertCreative(cid, width, height);
                    }
                    //target.className = old_class;
                    }
        } else {

        old_box = target.style.boxShadow;
            old_zi = target.style.zIndex;
            old_class = target.className;
            old_content = target.innerHTML;
            target.className = "target_ad " + old_class;
            //target.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.6)";
            target.style.zIndex = "999999";
            var x = getOffset(target).left;
            var y = getOffset(target).top;
            if (target.height == null) {
                var height = parseInt(target.style.height);
                var width = parseInt(target.style.width);
            } else {
                var height = parseInt(target.height);
                var width = parseInt(target.width);
            }
            console.log(width + " " + height);
            xpos = x - 0;
            if (document.documentElement.scrollTop == 0) {
                ypos = y - 0 - document.body.scrollTop
            } else {
                ypos = y - 0 - document.documentElement.scrollTop;
            }
            var scontrols = document.createElement("div");
            scontrols.id = "screentool-controls";
            scontrols.style.height = height + "px";
            scontrols.style.width = width + "px";
            scontrols.style.position = "fixed";
            scontrols.style.top = ypos + "px";
            scontrols.style.left = xpos + "px";
            scontrols.style.zIndex = "99999999999999999999999";
            scontrols.style.background = "rgba(0,0,0,0.4)";
            document.body.appendChild(scontrols);
            
            scontrols.onmouseover = function() {
                scontrols.style.background = "rgba(0,0,0,0.4)";
                //target.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.6)";
                target.className = "target_ad " + old_class;
                scontrols.innerHTML = "Select";
                scontrols.style.fontSize = "22px";
                scontrols.style.fontWeight = "bold";
                scontrols.style.color = "#fff";
                scontrols.style.fontFamily = "sans-serif";
                scontrols.style.textTransform = "uppercase";
                scontrols.style.textAlign = "center";
                scontrols.style.lineHeight = height + "px";
            }
            scontrols.onmouseout = function() {
                scontrols.style.background = "none";
                scontrols.style.zIndex = -9999;
                //target.style.boxShadow = old_box;
                target.className = old_class;
                scontrols.innerHTML = "";
            }
            function forgetEl() {
                var ev = arguments[0] || window.event,
                origEl = ev.target || ev.srcElement;
                var target = origEl;
                if (target.className.indexOf("target_ad") > -1) {
                    target.className = old_class;
                    target.style.boxShadow = old_box;
                    target.style.zIndex = old_zi;
                    scontrols.style.background = "none";
                }
            }
            document.onmouseout = forgetEl;
            
        }
    }

    document.onmouseover = getEl;

})();