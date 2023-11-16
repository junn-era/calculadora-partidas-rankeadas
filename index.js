let numberOfWins = 300
let numberOfDefeats = 9
let result = calcLevel(numberOfWins, numberOfDefeats);

function calcLevel(numberOfWins, numberOfDefeats){
  const balance = numberOfWins - numberOfDefeats;
  let level;

  if (numberOfWins < 10) {
    level = "FERRO";
  } else if (numberOfWins >= 10 && numberOfWins <= 20) {
    level = "BRONZE";
  } else if (numberOfWins >= 21 && numberOfWins <= 50) {
    level = "PRATA"
  } else if (numberOfWins >= 51 && numberOfWins <= 80) {
    level = "Ouro"
  } else if (numberOfWins >= 81 && numberOfWins <= 90) {
    level = "Diamante"
  } else if (numberOfWins >= 91 && numberOfWins <= 100) {
    level = "LENDÁRIO"
  } else {
    level = "IMORTAL"
  }
  return `O Herói tem saldo de ${balance} e está no nível de ${level}`;
}
console.log(result);