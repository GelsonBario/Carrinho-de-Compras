/**
 * Cria um objeto de item com validações.
 * @param {string} name - O nome do item.
 * @param {number} price - O preço do item (deve ser positivo).
 * @param {number} quantity - A quantidade do item (deve ser um inteiro positivo).
 * @returns {object} O objeto do item.
 */
function createItem(name, price, quantity) {
  // Validação dos dados de entrada
  if (!name || typeof name !== 'string' || name.trim() === '') {
    throw new Error("O nome do item é inválido.");
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error("O preço do item deve ser um número positivo.");
  }
  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("A quantidade do item deve ser um número inteiro positivo.");
  }

  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;