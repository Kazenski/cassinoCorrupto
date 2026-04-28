# Cassino Pedagógico: A Ilusão da Aleatoriedade

Este projeto foi desenvolvido para fins estritamente educacionais, demonstrando como algoritmos de jogos de azar (como caça-níqueis/slots) podem ser manipulados no código-fonte para garantir o lucro da "banca". 

O objetivo é ensinar aos alunos sobre manipulação de variáveis, controle de fluxo (condicionais), a diferença entre aleatoriedade real e pseudoaleatoriedade, e a ética profissional no desenvolvimento de sistemas.

## Estrutura do Projeto

* **Front-end Web (`index.html`, `style.css`, `script.js`):** Uma interface interativa de caça-níqueis. O JavaScript contém uma variável oculta `taxaDeVitoria Burlada` que permite ao desenvolvedor decidir exatamente qual a porcentagem de vitórias o jogador terá, forçando derrotas no código caso o jogador esteja "ganhando muito".
* **Simulador Estatístico (`simulador.py`):** Um script Python que roda 10.000 giros automatizados na roleta manipulada, provando matematicamente como a manipulação do código drena o saldo do usuário a longo prazo.

## Como usar em sala de aula

1.  Abra o `index.html` no navegador e deixe os alunos jogarem com a configuração "justa".
2.  Altere a variável `cassinoCorrupto` no `script.js` para `true` e defina a taxa de vitória para algo baixo (ex: 10%).
3.  Mostre no código como a terceira roleta é forçada a dar um resultado diferente caso o sistema decida que é hora do jogador perder.
4.  Execute o `simulador.py` no terminal para mostrar a projeção de perdas em larga escala.


## Novas Funcionalidades

- **Motor de Animação CSS:** Simula o movimento real das roletas em vez de apenas trocar ícones.
- **Modo Influencer:** Demonstra como plataformas manipulam contas específicas para que "vencem" constantemente, servindo de isca para novos apostadores.
- **Estrutura de 3 Colunas:** Interface moderna que simula cassinos reais.

## 🎓 Objetivos Pedagógicos
1. **Manipulação de Resultados:** Discutir como a lógica de `if/else` pode ser usada para destruir a aleatoriedade.
2. **Engenharia Social:** Como o "Modo Influencer" é usado para enganar pessoas vulneráveis.
3. **Animações e UX:** Como o design visual é usado para prender a atenção do usuário.


# Cassino Pedagógico: A Ilusão da Aleatoriedade e o Código Corrupto

Este projeto é uma ferramenta de conscientização para o ensino de **Lógica de Programação, Probabilidade e Ética no Desenvolvimento de Sistemas**. Ele demonstra na prática como algoritmos de jogos de azar (como caça-níqueis) podem ser manipulados no código-fonte para garantir o lucro da "banca" ou criar falsas ilusões de vitória.

## Por que dividimos o projeto em Web (HTML/JS) e Python?

Para entender a anatomia de uma fraude digital, precisamos olhar para duas frentes:

1. **A Ilusão Visual (HTML, CSS e JavaScript):** Este é o **Front-end**. Representa o que o apostador vê. O CSS cria animações bonitas e o JavaScript controla a interface. O objetivo aqui é mostrar que **a interface mente**. A animação da roleta girando não tem relação com o resultado; o código já decidiu se o usuário vai ganhar ou perder antes mesmo da roleta parar.
   
2. **A Prova Matemática (Python):** Este é o nosso simulador estatístico rodando no terminal. Um humano não consegue clicar no botão do navegador 10.000 vezes para provar que está sendo roubado. O script Python roda milhares de rodadas em milissegundos, provando matematicamente que a longo prazo, sob a regra do código corrupto, a falência do jogador é uma certeza absoluta.

3. **Sandbox: Hackeando o Cassino (Experimentação)**
A melhor forma de aprender é quebrando o código. Abra os arquivos no seu editor de código (como o VS Code) e altere as variáveis abaixo para ver o impacto imediato:

No arquivo script.js (Altere o comportamento do navegador)
const simbolos = [...]: Adicione ou remova emojis. Menos símbolos aumentam a chance natural de ganhar.

saldo = 100: Modifique o dinheiro inicial do jogador.

if (chance < 0.90) (Dentro da função calcularResultado): No modo Influencer, mude esse valor de 0.90 (90% de vitória) para 1.0 (vitória garantida em 100% dos giros) ou para 0.10 para ver o influenciador passar vergonha.

No arquivo simulador.py (Altere a matemática do sistema)
premio = 100: O que acontece se o cassino pagar R$ 10.000 por vitória? Teste e veja se o jogador ainda assim vai à falência no modo corrupto.

rodadas=1000 (Na chamada final das funções): Aumente para 10000 ou 50000. Veja como a matemática é implacável: quanto mais se joga em um sistema viciado, mais certeza se tem da perda.

A Trava de Derrota while res[2] == res[0]:: Modifique a lógica do modo corrupto. Tente criar uma regra que permita o jogador ganhar apenas se o saldo dele estiver abaixo de R$ 20 (para mantê-lo jogando e iludido).


## 🚀 Como testar na sua máquina

Você não precisa de servidores complexos para rodar este projeto.

### 1. Testando a Interface (Web)
1. Faça o clone ou baixe os arquivos deste repositório.
2. Dê um duplo clique no arquivo `index.html`. Ele abrirá no seu navegador padrão (Chrome, Edge, Firefox).
3. Use o "Painel de Manipulação (Admin)" na parte inferior da tela para trocar entre os modos de jogo e observe o comportamento das roletas.

### 2. Testando o Simulador (Python)
1. Abra o terminal na pasta do projeto.
2. Certifique-se de ter o Python instalado.
3. Execute o comando:
   ```bash
   python simulador.py