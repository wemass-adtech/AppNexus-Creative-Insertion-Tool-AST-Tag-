
import {
  createElement
} from "./modules/createElement/createElement";
import { setEvent, unsetEvent } from "./modules/eventActions/eventActions";
import { addControl } from "./modules/addControl/addControl";
if (!document.body.getAttribute("wmasevnt")) {
  createElement(document.body, {
    wmasevnt: "1"
  });
  setEvent(document, "mouseover", addControl,false);
}