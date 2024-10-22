from ai import strategy_optimal
from interface import logo, player_select
from engine import game, cpu_vs_cpu, human_vs_cpu, cpu_vs_human, human_vs_human

if __name__ == "__main__":
    while True:
        logo()
        mode = player_select()
        if mode == 0:
            cpu_vs_cpu(strategy_optimal, strategy_optimal)
        elif mode == 1:
            human_vs_cpu(strategy_optimal)
        elif mode == 2:
            cpu_vs_human(strategy_optimal)
        elif mode == 3:
            human_vs_human()
        elif mode == 4:
            game(strategy_optimal, strategy_optimal)
        else:
            break
    print("Thanks for playing!")
