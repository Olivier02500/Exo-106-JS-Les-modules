export function createDiv (){
    let div = document.createElement('div');
    div.innerHTML = "Hello world !"
    return div;
}

export function createInput (inputType){
    let input = document.createElement('input');
    input.type = inputType;
    return input;
}

export function createLabel (innerLabel){
    let label = document.createElement('label');
    label.innerHTML = innerLabel;
    return label;
}

