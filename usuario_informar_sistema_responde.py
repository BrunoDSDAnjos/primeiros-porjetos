usuario = int(input("Por favor digite um numero inteiro: "))
if usuario%2 == 0:
    print('numero par')
elif usuario%2 != 0:
    print('impar')
sair = input('Deseja sair: ')
while sair == 'nao':
    usuario = int(input("Por favor digite um numero inteiro: "))
    if usuario%2 == 0:
        print('numero par')
        sair = input('Deseja sair: ')
        if sair == 'sim':
            break
    elif usuario%2 != 0:
        print('impar')
        sair = input('Deseja sair: ')
        if sair == 'sim':
            break
