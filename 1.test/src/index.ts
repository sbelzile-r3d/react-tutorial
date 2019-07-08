/**
 * Retourne un tableau, de longueur 5, contenant le nombre de pièces de monnaie de chaque type de pièces dans l'ordre suivant.
 * [ 1$, 25¢, 10¢, 5¢, 1¢ ]
 * @param cashIn The input amount.
 */
export const getChange = (amount: number): number[] => {
  let types = [0.01, 0.05, 0.10, 0.25, 1];
  let output = [];
  let amountLeft = amount;
  while (types.length > 0) {
    let currentType = types.pop() as number;
    output.push(Math.floor(amountLeft / currentType));
    amountLeft = Math.round((amountLeft % currentType) * 100) / 100;
  }

  return output;
}
