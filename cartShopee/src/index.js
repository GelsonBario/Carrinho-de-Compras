import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

// O carrinho do usuário, que começa vazio.
const myCart = [];

console.log("🛍️ Bem-vindo ao seu Carrinho de Compras! 🛍️");

// --- Demonstração de Adição de Itens ---
console.log("\n1. Adicionando itens ao carrinho...");
try {
    const item1 = createItem("Placa de Vídeo RTX 4090", 9500.50, 1);
    const item2 = createItem("Processador Ryzen 9 7950X", 3200.00, 2);
    const item3 = createItem("Memória RAM DDR5 32GB", 850.75, 4);

    cartService.addItem(myCart, item1);
    cartService.addItem(myCart, item2);
    cartService.addItem(myCart, item3);

    // Adicionando o mesmo item novamente para testar o incremento de quantidade
    console.log("-> Adicionando mais 2 unidades do 'Processador Ryzen 9 7950X'...");
    const item2_again = createItem("Processador Ryzen 9 7950X", 3200.00, 2);
    cartService.addItem(myCart, item2_again);

} catch (error) {
    console.error("Erro ao criar item:", error.message);
}

cartService.displayCart(myCart);

// --- Demonstração de Remoção e Deleção ---
console.log("\n2. Removendo e deletando itens...");

// Removendo uma unidade do 'Processador Ryzen 9 7950X'
console.log("\n-> Removendo uma unidade de 'Processador Ryzen 9 7950X'...");
cartService.removeItem(myCart, "Processador Ryzen 9 7950X");
cartService.displayCart(myCart);

// Deletando completamente o item 'Memória RAM DDR5 32GB'
console.log("\n-> Deletando 'Memória RAM DDR5 32GB' do carrinho...");
cartService.deleteItem(myCart, "Memória RAM DDR5 32GB");
cartService.displayCart(myCart);

// --- Demonstração do Cálculo Total ---
console.log("\n3. Calculando o total do carrinho...");
const total = cartService.calculateTotal(myCart);
console.log(`💰 O valor total do seu carrinho é: R$ ${total.toFixed(2)}`);

// --- Demonstração de Limpar o Carrinho ---
console.log("\n4. Limpando o carrinho...");
cartService.clearCart(myCart);
cartService.displayCart(myCart);