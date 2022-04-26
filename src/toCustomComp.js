
function toComp(template, style, state, hooks, attrs) {

 
class Element extends HTMLElement {
constructor() {super()}

connectedCallback() {
this.innerHTML = template;
for(let styles in style) {
this.style[styles] = style[styles]
}

for (let states in state) {
this.dataset[sta] = state[sta]
}

for (let hook in hooks) {
this[hook] = hooks[hook]
}

for (let attr in attrs) {
this[attr] = attrs[attr]
}
}
}

return Element
}


const element = {
state: {
message: `Hello World`
},
template: `<p> ${this.dataset} </p>`,
style: {
color: "red"
},
hooks: {
onClick: () => alert("Hi!")
},
attrs: {},
element: toComp(this.template, this.style, this.state, this.hooks, this.attrs)
}

customElements.define("my-element", element.element)
