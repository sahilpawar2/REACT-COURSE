const body = document.querySelector("body")
const container = document.createElement('div')

const insideEle = {
    type: 'div',
    properties : {
        href : 'https://www.google.com/search?sca_esv=d0b2727f85f62fcc&sxsrf=ADLYWIJICdbKQkwpYJG12Ir6foBQFD2BWQ:1725394244964&q=Wheelchair+Tennis+Paralympics&oi=ddle&ct=348377269&hl=en-GB&sa=X&ved=0ahUKEwiw98O4yqeIAxVkzDgGHSLkL9MQPQgN',
        target : '_blank',

    },
    children : 'click me'
    
}



let inject = ( body, container, insideEle) => {
    const domELe = document.createElement(insideEle.type)
    domELe.innerHTML = insideEle.children;
    domELe.setAttribute('href', insideEle.properties.href)
    domELe.setAttribute('target', insideEle.properties.target)
    container.appendChild(domELe);
    body.appendChild(container);

}

