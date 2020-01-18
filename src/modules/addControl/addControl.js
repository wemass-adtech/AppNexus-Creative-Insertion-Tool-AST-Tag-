import {
  createElement
} from "../createElement/createElement";
import {
  setEvent
} from "../eventActions/eventActions";
import {
  getOffset
} from "../getOffset/getOffset";
import {
  insertCreative
} from "../insertCreative/insertCreative";
let addControl = (ev) => {
  ev.stopPropagation();
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
    if (document.documentElement.scrollTop == 0) {
      ypos = y - 0 - document.body.scrollTop
    } else {
      ypos = y - 0 - document.documentElement.scrollTop;
    }
    let scontrols = createElement("div", {
      Ct: `height:${height}px;width:${width}px;top:${ypos}px;left:${xpos}px;position:fixed;`,
      Cn: "screenToolsControlWMSS",
      id: "screenToolsControlWMSS",
      "wmstarget": `tgtAd${theTimeIsNow}`,
      "imapicker":"1"
    });
    document.body.appendChild(scontrols);
    setEvent(scontrols, "click", function (ev) {
      let
        height,
        width,
        cid = prompt("please enter a creative ID"),
        target = (ev.target || ev.srcElement),
        targetId = target.getAttribute("wmstarget");
      if (target.height == null) {
        height = parseInt(target.style.height);
        width = parseInt(target.style.width);
      } else {
        height = target.height;
        width = target.width;
      }
      if (cid != null && cid != "") {
        insertCreative(cid, targetId, width, height);
      }
      //target.className = old_class;
    });
  }
};
export {
  addControl
};