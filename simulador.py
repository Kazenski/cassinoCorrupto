import random

simbolos = ['🍒', '🍋', '🍉', '⭐', '💎']
custo_aposta = 10
premio = 50


def simular_cassino(rodadas, modo_corrupto=False, taxa_vitoria_permitida=0.15):
    saldo_jogador = 1000  # Começa com R$ 1000
    lucro_cassino = 0
    vitorias = 0

    print(f"\n--- Iniciando Simulação: {rodadas} giros ---")
    print(f"Modo Manipulado: {'ATIVADO' if modo_corrupto else 'DESATIVADO'}")

    for _ in range(rodadas):
        if saldo_jogador < custo_aposta:
            print("O jogador faliu antes de terminar os giros!")
            break

        saldo_jogador -= custo_aposta
        lucro_cassino += custo_aposta

        # Sorteio real
        resultado = [random.choice(simbolos) for _ in range(3)]

        # Intervenção do algoritmo corrupto
        if modo_corrupto:
            sorte_sistema = random.random()
            if sorte_sistema > taxa_vitoria_permitida:
                # Força derrota quebrando a trinca
                while resultado[0] == resultado[1] == resultado[2]:
                    resultado[2] = random.choice(simbolos)
            else:
                # Força vitória
                resultado[1] = resultado[0]
                resultado[2] = resultado[0]

        # Verifica vitória
        if resultado[0] == resultado[1] == resultado[2]:
            saldo_jogador += premio
            lucro_cassino -= premio
            vitorias += 1

    print("\n[ RESULTADO FINAL ]")
    print(f"Total de Vitórias: {vitorias} ({(vitorias/rodadas)*100:.2f}%)")
    print(f"Saldo Final do Jogador: R$ {saldo_jogador:.2f}")
    print(f"Lucro Líquido do Cassino: R$ {lucro_cassino:.2f}")
    print("-" * 40)


if __name__ == "__main__":
    # Teste 1: Aleatoriedade justa (as chances matemáticas reais baseadas nos 5 símbolos)
    simular_cassino(10000, modo_corrupto=False)

    # Teste 2: Cassino manipulado limitando a 5% de vitórias
    simular_cassino(10000, modo_corrupto=True, taxa_vitoria_permitida=0.05)
