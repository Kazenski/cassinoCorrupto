const simbolos = ['🍒', '🍋', '🍉', '⭐', '💎', '🔔'];
let saldo = 100;
let currentMode = 'normal';

// Inicializa as roletas com ícones aleatórios
function setupReels() {
    document.querySelectorAll('.icons-container').forEach(container => {
        container.innerHTML = "";
        // Criamos uma tira longa de ícones para a animação
        for (let i = 0; i < 20; i++) {
            const div = document.createElement('div');
            div.className = 'icon';
            div.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
            container.appendChild(div);
        }
    });
}

function setMode(mode) {
    currentMode = mode;
    console.log("Modo alterado para:", mode);
}

async function jogar() {
    if (saldo < 10) return alert("Sem saldo!");
    
    setupReels();
    
    saldo -= 10;
    document.getElementById('saldo').innerText = saldo.toFixed(2);
    document.getElementById('spin-button').disabled = true;
    document.getElementById('feedback').innerText = "Girando...";

    // NOVIDADE: Detecta a altura atual do ícone definida no CSS (150 ou 100)
    const style = getComputedStyle(document.documentElement);
    const iconHeight = parseInt(style.getPropertyValue('--icon-height'));
    const travelDistance = iconHeight * 18; // Calcula a distância exata para 18 ícones

    const resultados = calcularResultado();
    
    document.querySelectorAll('.icons-container').forEach((container, i) => {
        const icons = container.querySelectorAll('.icon');
        icons[18].innerText = resultados[i];
        
        container.style.transition = 'none';
        container.style.top = '0px';
        
        void container.offsetWidth;
        
        container.style.transition = `top ${2 + (i * 0.5)}s cubic-bezier(0.45, 0.05, 0.55, 0.95)`;
        // Aplica o deslocamento dinâmico calculado
        container.style.top = `-${travelDistance}px`; 
    });

    setTimeout(() => {
        finalizarRodada(resultados);
    }, 3500);
}

function calcularResultado() {
    let res = [
        simbolos[Math.floor(Math.random() * simbolos.length)],
        simbolos[Math.floor(Math.random() * simbolos.length)],
        simbolos[Math.floor(Math.random() * simbolos.length)]
    ];

    const chance = Math.random();

    if (currentMode === 'corrupto') {
        // Força derrota: Se der trinca por sorte, muda o último ícone
        if (res[0] === res[1] && res[1] === res[2]) {
            while (res[2] === res[0]) res[2] = simbolos[Math.floor(Math.random() * simbolos.length)];
        }
    } 
    else if (currentMode === 'influencer') {
        // 90% de chance de ganhar
        if (chance < 0.90) {
            res[1] = res[0];
            res[2] = res[0];
        }
    }

    return res;
}

function finalizarRodada(res) {
    const ganhou = (res[0] === res[1] && res[1] === res[2]);
    
    if (ganhou) {
        saldo += 100;
        document.getElementById('feedback').innerText = "🔥 VITÓRIA EXPLOSIVA! +R$100";
        document.getElementById('feedback').style.color = "#2ecc71";
    } else {
        document.getElementById('feedback').innerText = "A casa ganhou. Tente novamente.";
        document.getElementById('feedback').style.color = "#fff";
    }

    document.getElementById('saldo').innerText = saldo.toFixed(2);
    document.getElementById('spin-button').disabled = false;
}

setupReels();