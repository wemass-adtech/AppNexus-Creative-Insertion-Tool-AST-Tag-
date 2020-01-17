
import {
  createElement
} from "./modules/createElement/createElement";
import { setEvent } from "./modules/eventActions/eventActions";
if (!document.getAttribute("wmasevnt")) {
  createElement(document, {
    wmasevnt: "1"
  });
  setEvent(document, "mouseover", addControl);
}