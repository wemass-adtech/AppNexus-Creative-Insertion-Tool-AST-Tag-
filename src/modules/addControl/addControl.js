import {
  createElement
} from "../createElement/createElement";
import {
  setEvent
} from "../eventActions/eventActions";
import {
  getOffset
} from "../getOffset/getOffset";
let addControl = (ev) => {
  let origEl = ev.target || ev.srcElement,
    target = origEl,
    theTimeIsNow = Date.now();
  if (target.id !== "screenToolsControlWMSS") {
    target.setAttribute("wmstarget", `tgtAd${theTimeIsNow}`);
    //target.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.6)";
    target.style.zIndex = "999999";
    let {
      left: x,
      top: y
    } = getOffset(target),
      height,
      width,
      xpos = x - 0,
      ypos;
    if (target.height == null) {
      height = parseInt(target.style.height);
      width = parseInt(target.style.width);
    } else {
      height = parseInt(target.height);
      width = parseInt(target.width);
    }
    console.log(width + " " + height);
    if (document.documentElement.scrollTop == 0) {
      ypos = y - 0 - document.body.scrollTop
    } else {
      ypos = y - 0 - document.documentElement.scrollTop;
    }
    let scontrols = createElement("div", {
      Ct: `${height}px;${width}px;top:${ypos}px;left:${xpos}px`,
      Cn: "screenToolsControlWMSS",
      id: "screenToolsControlWMSS",
      "wmstarget": `tgtAd${theTimeIsNow}`
    });
    document.body.appendChild(scontrols);
    setEvent(scontrols, "click", function (ev) {
      let
        height,
        width,
        cid = prompt("please enter a creative ID"),
        target = (ev.target || ev.srcElement).getAttribute("wmstarget"),
      ;
      if (target.height == null) {
        height = parseInt(target.style.height);
        width = parseInt(target.style.width);
      } else {
        height = target.height;
        width = target.width;
      }
      if (cid != null && cid != "") {
        insertCreative(cid, target, width, height);
      }
      //target.className = old_class;
    });
  }
};
export {
  addControl
};