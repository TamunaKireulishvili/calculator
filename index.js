const btn = document.querySelectorAll('.btn');
const showResult = document.querySelector('#show-result');
const result = document.querySelector('.result') ;
const mathOp = document.querySelector('.math-operations') ;
const clearBtn = document.querySelector('#btn-clear');
const delBtn = document.querySelector('#del-btn');

delBtn.addEventListener('click',() =>{
    mathOp.innerText = mathOp.innerText.slice(0, -1);
})

clearBtn.addEventListener('click', () =>{
    result.innerText = '';
    mathOp.innerText = '';
})
function btnHandler(){
    for(let i = 0; i < btn.length;i ++)
    {
        btn[i].addEventListener('click', mathOpHandler )
    }
 
}
btnHandler()

function mathOpHandler(e){
    mathOp.innerText = mathOp.innerText + e.target.innerText;
    
}

function resultHandler(e){
    result.innerText = e.target.innerText
    
}



showResult.addEventListener('click', (e) => {
    const expression = mathOp.innerText;
    const expressionResult = eval(expression)
    result.innerText = expressionResult
    console.log(expressionResult)
    
})
