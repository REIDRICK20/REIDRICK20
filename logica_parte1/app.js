alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 300
let numeroSecreto  = parseInt(Math.random() * numeroMaximo+ 1) ;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto chute não for igual ao numero secreto.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    if( chute == numeroSecreto) {
        break;
        
    } else 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }   else {
            alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);