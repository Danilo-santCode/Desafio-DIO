let Saldo = CalcularSaldo (578, 266)

function CalcularSaldo (Vitorias, derrotas){    
    return Vitorias - derrotas;
}

let SaldoDoHeroi = Saldo
let PatenteDoHeroi;

switch (true) {
    case SaldoDoHeroi <= 10:
        PatenteDoHeroi = 'Ferro';
        break;
    case SaldoDoHeroi >= 11 && SaldoDoHeroi <= 20:
        PatenteDoHeroi = 'Bronze';
        break;
    case SaldoDoHeroi >= 21 && SaldoDoHeroi <= 50:
        PatenteDoHeroi = 'Prata';
        break;
    case SaldoDoHeroi >= 51 && SaldoDoHeroi <= 80:
        PatenteDoHeroi = 'Ouro';
        break;
    case SaldoDoHeroi >= 81 && SaldoDoHeroi <= 90:
        PatenteDoHeroi = 'Diamante';
        break;
    case SaldoDoHeroi >= 91 && SaldoDoHeroi <= 100:
        PatenteDoHeroi = 'Lendário';
        break;
    case SaldoDoHeroi >= 101:
        PatenteDoHeroi = 'Imortal';
        break;
    default:
        PatenteDoHeroi = 'Desconhecido';
}

console.log(`O Herói tem saldo de ${SaldoDoHeroi} está no nível ${PatenteDoHeroi}!`);