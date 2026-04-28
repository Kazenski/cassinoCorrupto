import random

# Variáveis globais alinhadas com o Front-end
simbolos = ['🍒', '🍋', '🍉', '⭐', '💎', '🔔']
custo_aposta = 10
premio = 100


def simular(nome_cenario, modo, rodadas=1000):
    saldo = 1000  # Começa com R$ 1000
    vitorias = 0

    for turno in range(1, rodadas + 1):
        # Trava de Falência: Interrompe a simulação se o dinheiro acabar
        if saldo < custo_aposta:
            print(f"Cenário: {nome_cenario}")
            print(f"[FALÊNCIA] O jogador perdeu tudo no giro {turno}!")
            print(
                f"Vitórias antes de falir: {vitorias} | Saldo Final: R${saldo:.2f}")
            print("-" * 35)
            return  # Encerra esta simulação específica

        saldo -= custo_aposta
        res = [random.choice(simbolos) for _ in range(3)]
        sorteio = random.random()

        # Intervenção Algorítmica (O Segredo do Cassino)
        if modo == 'influencer' and sorteio < 0.90:
            res = [res[0], res[0], res[0]]  # Força a vitória

        elif modo == 'corrupto':
            if res[0] == res[1] == res[2]:
                # Força a derrota: muda a última roleta
                while res[2] == res[0]:
                    res[2] = random.choice(simbolos)

        # Contabilidade do turno
        if res[0] == res[1] == res[2]:
            vitorias += 1
            saldo += premio

    # Resultado caso o jogador sobreviva aos 1000 giros
    print(f"Cenário: {nome_cenario}")
    print(f"Vitórias: {vitorias} em {rodadas} giros")
    print(f"Sobreviveu com Saldo Final: R${saldo:.2f}")
    print("-" * 35)


if __name__ == "__main__":
    print("\n=== INICIANDO SIMULAÇÃO DE 1000 GIROS ===\n")
    simular("JUSTO (Aleatório Real)", "normal")
    simular("CORRUPTO (Casa Ganha Sempre)", "corrupto")
    simular("MODO INFLUENCER (Isca de Marketing)", "influencer")
