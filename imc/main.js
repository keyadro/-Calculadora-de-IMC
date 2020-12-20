function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let result =document.getElementById("result");
    result.style.color="white";
    result.style.fontSize='14px';
    
    

    if(altura!='' && peso!=''){
        const imc = (peso / (altura * altura)).toFixed(2);
        if(imc<18.5){
            result.innerHTML=`Seu IMC é ${imc} e você está abaixo do peso.`;       
        
        }else if(imc>='18.5' && imc<='24.9'){
            result.innerHTML=`Seu IMC é ${imc} e você está normal.Parabens!!!`;       
        
        }else if(imc>='25.0' && imc<='29.9'){
            result.innerHTML=`Seu IMC é ${imc}  e você está com obesidade grau I`;       
        
        }else if(imc>='30.0' && imc<='39.9') {
            result.innerHTML=`Seu IMC é ${imc} e você está com obesidade grau II`; 
        
        }else{
            result.innerHTML=`Seu IMC é ${imc} e você está com obesidade grau III.<span style="color: red;" >CUIDADO!!</span>`; 
        }

    
    }else{
        result.innerHTML ="PREENCHA TODOS OS CAMPOS!!!";
        result.style.color='RED';
        result.style.fontSize='15px';
    }
}