import{createDiv} from "./HTML.js";
import{createInput} from "./HTML.js";
import{createLabel} from "./HTML.js";

let result =document.getElementById('result')

createInput("result", "email");
createLabel("result", "password");

createInput("result", "password");
createLabel("result", "E-mail");

let div = createDiv();
result.appendChild(div);

let input = createInput("email");
result.appendChild(input);

let label =  createLabel( "password");
result.appendChild(label);

let inputTwo = createInput("password");
result.appendChild(inputTwo);

let labelTwo =  createLabel( "E-mail");
result.appendChild(labelTwo);