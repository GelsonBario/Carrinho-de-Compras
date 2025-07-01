/**
 * Adiciona um item ao carrinho. Se o item já existir, aumenta sua quantidade.
 * @param {Array} userCart - O array do carrinho do usuário.
 * @param {object} itemToAdd - O item a ser adicionado.
 */
function addItem(userCart, itemToAdd) {
  const existingItemIndex = userCart.findIndex((item) => item.name === itemToAdd.name);

  if (existingItemIndex !== -1) {
    // Item já existe, apenas incrementa a quantidade
    userCart[existingItemIndex].quantity += itemToAdd.quantity;
  } else {
    // Item não existe, adiciona ao carrinho
    userCart.push(itemToAdd);
  }
}

/**
 * Calcula o valor total de todos os itens no carrinho.
 * @param {Array} userCart - O carrinho do usuário.
 * @returns {number} O valor total.
 */
function calculateTotal(userCart) {
  // O método reduce executa uma função para cada elemento, resultando num único valor.
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

/**
 * Deleta um item completamente do carrinho, independente da quantidade.
 * @param {Array} userCart - O carrinho do usuário.
 * @param {string} itemName - O nome do item a ser deletado.
 */
function deleteItem(userCart, itemName) {
  const index = userCart.findIndex((item) => item.name === itemName);

  if (index !== -1) {
    userCart.splice(index, 1);
  } else {
    console.log(`Item "${itemName}" não encontrado para deletar.`);
  }
}

/**
 * Remove uma unidade de um item específico. Se a quantidade for 1, o item é removido do carrinho.
 * @param {Array} userCart - O carrinho do usuário.
 * @param {string} itemName - O nome do item a ser removido.
 */
function removeItem(userCart, itemName) {
  const index = userCart.findIndex((item) => item.name === itemName);

  if (index === -1) {
    console.log(`Item "${itemName}" não encontrado para remover.`);
    return;
  }

  const item = userCart[index];
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    // Se a quantidade for 1, remove o item da lista
    userCart.splice(index, 1);
  }
}

/**
 * Limpa todos os itens do carrinho.
 * @param {Array} userCart - O carrinho do usuário.
 */
function clearCart(userCart) {
    userCart.length = 0; // Maneira eficiente de limpar o array
}

/**
 * Exibe os itens do carrinho no console de forma organizada.
 * @param {Array} userCart - O carrinho do usuário.
 */
function displayCart(userCart) {
  console.log("\n🛒 Carrinho de Compras:");
  if (userCart.length === 0) {
    console.log("   Seu carrinho está vazio.");
    return;
  }
  userCart.forEach((item, index) => {
    console.log(
      `   ${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | Quantidade: ${item.quantity} | Subtotal: R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  clearCart,
};