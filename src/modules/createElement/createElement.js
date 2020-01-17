let createElement = (nodeName, attributes={},leDoc=document) => {
  /*make Element funcion creates or modifies nodes
  @leDoc is added for legacy browsers which need the new element to be created in the same window which is going to be appended
  */
  let esString = typeof nodeName === "string";
  if (esString)
    nodeName = leDoc.createElement(nodeName);
  if (Object.prototype.toString(attributes)==="[object Object]")
    for (let attributeName in attributes)
      if (typeof attributeName == "string") {
        let value = attributes[attributeName];
        switch (attributeName) {
          case "T":
            /*Adds text to the node*/
            nodeName.appendChild(leDoc.createTextNode(value));
            break;
          case "com":
            /*add a comment to the node*/
            nodeName.appendChild(leDoc.createComment(value));
            break;
          case "Ct":
            /*Changes the inline Css values*/
            nodeName.style.cssText = value;
            break;
          case "Cn":
            /*Changes classname to the node*/
            nodeName.className = value;
            break;
          case "H":
            /*set the inner HTML of the node*/
            nodeName.innerHTML = value;
            break;
          case "St":
            /*Creates a style Node*/
            if (!!(window.attachEvent && !window.opera))
              nodeName.styleSheet.cssText = value;
            else
              createElement(nodeName, {
                "T": value
              });
            break;
          default:
            /*Add the property to the element*/
            nodeName.setAttribute(attributeName, value);
            nodeName[attributeName] = value;
            break;
        }
      }
  if (esString)
    return nodeName /*.cloneNode(!0)*/ ;
  return void 0;
}
export {createElement};