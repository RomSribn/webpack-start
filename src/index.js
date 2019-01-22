import "./style.css";
import headerModule from "./header.js";
const log = txt => console.log(txt);

const btn = document.querySelector('.click');
// log(headerTmpl)

headerModule();
function handleClick(evnt){
    evnt.preventDefault();
    alert(headerTmpl);
}

log('hello WORLD');