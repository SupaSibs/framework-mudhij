function toComp(t,e,s,n,o,i){class r extends HTMLElement{constructor(){super()}connectedCallback(){this.update=i,this.innerHTML=t;for(let t in e)this.style[t]=e[t];for(let t in s)this.dataset[sta]=s[sta];for(let t in n)this[t]=n[t];for(let t in o)this[t]=o[t]}}return r} function render(e,n){n.appendChild(e)}
export {toComp, render}
