let setEvent = (elemento, eventType, method, noListen = true) => {
    /*funcion que setea eventListeners en un elemento
     *a elemento al que se va a poner el evento
     *b tipo de evento
     *c funcion a ejecutar, para que funcione ha de ser una anonima* Depende del valor d, si d es cualquier cosa ya no es necesario..
     *d indica que la funcion no necesita escuchar eventos (para asignar la funcion directamente y no usando una funcion anonima); void defecta en !0, cualquier otra cosa en !1.
     *ejemplo de uso ev(i.h5,"contextmenu",function(e){e.preventDefault();});
     */
    let z = void 0;
    if (elemento.addEventListener) {
      elemento.addEventListener(
        eventType,
        (noListen ? function (event) {
          method(event, z);
        } : method),
        false
      );
    } else if (elemento.attachEvent) {
      elemento[`e${eventType}${method}`] = method;
      elemento[`${eventType}${method}`] = (noListen ? function () {
        elemento[`e${eventType}${method}`](window.event, z);
      } : elemento[`e${eventType}${method}`]);
      elemento.attachEvent(`on${eventType}`, elemento[`${eventType}${method}`]);
    }
  },
  unsetEvent = (elemento, eventType, method) => {
    /*funcion que elimina eventListeners en un elemento. No vale si se ha aplicado una funcion anonima
     *a elemento al que se va a poner el evento
     *b tipo de evento
     *c funcion a ejecutar, para que funcione no debe ser anonima
     *ejemplo de uso ev(i.h5,"contextmenu",function(e){e.preventDefault();});
     */
    if (elemento.removeEventListener)
      elemento.removeEventListener(eventType, method, false);
    else if (elemento.detachEvent) {
      elemento[`e${eventType}${method}`] = method;
      elemento.detachEvent(`on${eventType}`, elemento[`${eventType}${method}`]);
    }
  };
export {
  setEvent,
  unsetEvent
};