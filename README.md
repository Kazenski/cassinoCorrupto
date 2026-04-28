# 🎰 Cassino Pedagógico: A Ilusão da Aleatoriedade

Este projeto foi desenvolvido para fins estritamente educacionais, demonstrando como algoritmos de jogos de azar (como caça-níqueis/slots) podem ser manipulados no código-fonte para garantir o lucro da "banca". 

O objetivo é ensinar aos alunos sobre manipulação de variáveis, controle de fluxo (condicionais), a diferença entre aleatoriedade real e pseudoaleatoriedade, e a ética profissional no desenvolvimento de sistemas.

## 🛠️ Estrutura do Projeto

* **Front-end Web (`index.html`, `style.css`, `script.js`):** Uma interface interativa de caça-níqueis. O JavaScript contém uma variável oculta `taxaDeVitoria Burlada` que permite ao desenvolvedor decidir exatamente qual a porcentagem de vitórias o jogador terá, forçando derrotas no código caso o jogador esteja "ganhando muito".
* **Simulador Estatístico (`simulador.py`):** Um script Python que roda 10.000 giros automatizados na roleta manipulada, provando matematicamente como a manipulação do código drena o saldo do usuário a longo prazo.

## 🚀 Como usar em sala de aula

1.  Abra o `index.html` no navegador e deixe os alunos jogarem com a configuração "justa".
2.  Altere a variável `cassinoCorrupto` no `script.js` para `true` e defina a taxa de vitória para algo baixo (ex: 10%).
3.  Mostre no código como a terceira roleta é forçada a dar um resultado diferente caso o sistema decida que é hora do jogador perder.
4.  Execute o `simulador.py` no terminal para mostrar a projeção de perdas em larga escala.