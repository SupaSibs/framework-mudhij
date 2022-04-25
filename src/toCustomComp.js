function createType(name, type) {
 return type 
}

function checkType(variable, type) {
if (typeof variable !== type) {
console.log("Types dont match");
throw new Error("Type is wrong")
}
}

function toComp(template, style, state, hooks, attrs) {
checkType(template, "string")
checkType(style, "object")
checkType(state,"object")
checkType(hooks,"object")
checkType(attrs, "object")
class Element extends HTMLElement {
constructor() {super()}

connectedCallBack() {
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
