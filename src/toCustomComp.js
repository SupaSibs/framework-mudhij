
function toComp(template, style, state, hooks, attrs, update) {

 
class Element extends HTMLElement {
constructor() {super()}

connectedCallback() {
this.update = update;
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
export default toComp
return Element
}

/* EXAMPLE ELEMENT:
const ele = {
state: {
msg: "Hsdi"
},
get template() {
return "<p>" + this.state.msg + "</p>"
} ,
style: {
color: "red"
},
hooks: {
onclick: () => alert("hi")
}, 
attrs: {},
update: () => {},
get element() { 
return toComp(this.template, this.style, this.state, this.hooks, this.attrs, this.update)
}
}
*/
