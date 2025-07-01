# Projeto Carrinho de Compras Simulado

## 1. Objetivo do Projeto

Este projeto simula as funcionalidades básicas de um carrinho de compras online, como os encontrados em e-commerces. O objetivo é criar um sistema modular em JavaScript que permita adicionar, remover, deletar e calcular o total de itens de forma eficiente e organizada.

## 2. Funcionalidades Implementadas

O serviço de carrinho (`cart.js`) possui as seguintes funções:

-   **Adicionar Item (`addItem`):** Adiciona um novo item ao carrinho. Se o item já existir (verificado pelo nome), a sua quantidade é somada à existente.
-   **Remover Item (`removeItem`):** Diminui em uma unidade a quantidade de um item específico no carrinho. Se a quantidade do item for 1, ele é completamente removido.
-   **Deletar Item (`deleteItem`):** Remove um item do carrinho por completo, independentemente da sua quantidade.
-   **Calcular Total (`calculateTotal`):** Calcula e retorna o valor total do carrinho, somando o subtotal de todos os itens. O subtotal de cada item é `preço * quantidade`.
-   **Limpar Carrinho (`clearCart`):** Esvazia o carrinho, removendo todos os itens.
-   **Exibir Carrinho (`displayCart`):** Mostra no console uma lista formatada de todos os itens presentes no carrinho, com seus respectivos nomes, preços, quantidades e subtotais.

O serviço de item (`item.js`) possui a seguinte função:

-   **Criar Item (`createItem`):** Uma função fábrica que cria um objeto de item. Ela inclui validações para garantir que nome, preço e quantidade sejam válidos antes da criação do objeto.

## 3. Estrutura dos Arquivos

O projeto está organizado da seguinte forma para manter a separação de responsabilidades (sugestão de estrutura de pastas):
\
├── index.js         # Arquivo principal para executar a simulação
├── services/
│   ├── cart.js      # Contém toda a lógica do carrinho
│   └── item.js      # Contém a lógica de criação de itens
└── readme.md        # Documentação do projeto
-   **`index.js`**:
    -   É o arquivo principal que "executa" a aplicação.
    -   Ele simula a interação de um usuário, importando os serviços de carrinho e item para demonstrar todas as funcionalidades implementadas.

-   **`services/item.js`**:
    -   Define a "entidade" item.
    -   Contém a função `createItem` para gerar novos itens com nome, preço, quantidade e um método para calcular o subtotal.
    -   Adicionadas validações para garantir a integridade dos dados (ex: preço e quantidade devem ser positivos).

-   **`services/cart.js`**:
    -   Contém toda a lógica de negócio e as regras do carrinho de compras.
    -   As funções neste arquivo manipulam o estado do carrinho (que é um array de itens).
    -   O código foi refatorado para remover o uso desnecessário de `async/await`, tornando-o síncrono e mais performático para estas operações.

## 4. Como Executar

Para executar este projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado.

1.  Crie a estrutura de pastas sugerida acima e coloque os arquivos em seus respectivos lugares.
2.  Abra um terminal na pasta raiz do projeto.
3.  Execute o seguinte comando:

    ```bash
    node index.js
    ```

O console exibirá uma demonstração passo a passo de todas as funcionalidades do carrinho.