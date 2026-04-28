const simbolos = ['🍒', '🍋', '🍉', '⭐', '💎'];
let saldo = 100;
const custoAposta = 10;
const premio = 50;

// === VARIÁVEIS DE MANIPULAÇÃO (O Segredo do Cassino) ===
let cassinoCorrupto = false; 
let taxaVitoriaPermitida = 0.15; // Se corrupto, permite ganhar apenas em 15% das vezes

function alternarManipulacao() {
    cassinoCorrupto = document.getElementById('toggle-corrupcao').checked;
    const painelTaxa = document.getElementById('taxa-atual');
    if (cassinoCorrupto) {
        painelTaxa.innerText = `${(taxaVitoriaPermitida * 100)}% (Manipulado)`;
        painelTaxa.style.color = "#e74c3c";
    } else {
        painelTaxa.innerText = `Aleatório Real (Justo)`;
        painelTaxa.style.color = "#2ecc71";
    }
}

function obterSimboloAleatorio() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function girar() {
    if (saldo < custoAposta) {
        document.getElementById('mensagem').innerText = "Saldo insuficiente! A casa agradece.";
        return;
    }

    // Deduz a aposta
    saldo -= custoAposta;
    atualizarTela();
    document.getElementById('mensagem').innerText = "Girando...";
    document.getElementById('btn-girar').disabled = true;

    // Lógica do Algoritmo Burlado
    let resultado = [obterSimboloAleatorio(), obterSimboloAleatorio(), obterSimboloAleatorio()];
    let jogadorVaiGanhar = (resultado[0] === resultado[1] && resultado[1] === resultado[2]);

    if (cassinoCorrupto) {
        // O algoritmo joga um "dado invisível" para ver se o jogador TEM PERMISSÃO para ganhar
        let sorteDoSistema = Math.random(); 
        
        if (sorteDoSistema > taxaVitoriaPermitida) {
            // Se o sistema decidiu que ele deve perder, FORÇAMOS A DERROTA
            // Garantimos que a roleta 3 seja diferente da roleta 1
            while (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
                resultado[2] = obterSimboloAleatorio(); 
            }
            jogadorVaiGanhar = false;
        } else {
            // Se o sistema permitiu a vitória, forçamos os 3 a serem iguais
            resultado[1] = resultado[0];
            resultado[2] = resultado[0];
            jogadorVaiGanhar = true;
        }
    }

    // Animação simples (setTimeout para simular o tempo da roleta)
    setTimeout(() => {
        document.getElementById('slot1').innerText = resultado[0];
        document.getElementById('slot2').innerText = resultado[1];
        document.getElementById('slot3').innerText = resultado[2];

        if (jogadorVaiGanhar) {
            saldo += premio;
            document.getElementById('mensagem').innerText = "🎉 VOCÊ GANHOU! 🎉";
        } else {
            document.getElementById('mensagem').innerText = "Você perdeu. Tente novamente!";
        }

        atualizarTela();
        document.getElementById('btn-girar').disabled = false;
    }, 500);
}

function atualizarTela() {
    document.getElementById('saldo').innerText = saldo;
}