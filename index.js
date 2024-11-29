class ProductManager {
    constructor() {
        // Inicializa o array de produtos vazio
        this.products = [];
        this.currentId = 1; // Para o ID de incremento automático
    }

    // Método para adicionar um novo produto
    addProduct(product) {
        const { title, description, price, thumbnail, code, stock } = product;

        // Validação para verificar se todos os campos estão presentes
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Erro: Todos os campos são obrigatórios!");
            return;
        }

        // Verificar se o código já existe
        const codeExists = this.products.some((prod) => prod.code === code);
        if (codeExists) {
            console.error(`Erro: Já existe um produto com o código "${code}"`);
            return;
        }

        // Cria o novo produto com ID automático
        const newProduct = {
            id: this.currentId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        // Adiciona o novo produto ao array
        this.products.push(newProduct);
        console.log("Produto adicionado com sucesso:", newProduct);
    }

    // Método para buscar um produto pelo ID
    getProductById(id) {
        const product = this.products.find((prod) => prod.id === id);

        if (!product) {
            console.error("Erro: Produto não encontrado");
            return;
        }

        return product;
    }
}

// Testando a classe ProductManager
const productManager = new ProductManager();

// Adicionando produtos
productManager.addProduct({
    title: "Produto 1",
    description: "Descrição do produto 1",
    price: 100,
    thumbnail: "imagem1.png",
    code: "1234",
    stock: 10
});

productManager.addProduct({
    title: "Produto 2",
    description: "Descrição do produto 2",
    price: 200,
    thumbnail: "imagem2.png",
    code: "5678",
    stock: 5
});

// Tentativa de adicionar um produto com código repetido
productManager.addProduct({
    title: "Produto 3",
    description: "Descrição do produto 3",
    price: 150,
    thumbnail: "imagem3.png",
    code: "1234", // Código já existente
    stock: 20
});

// Buscando um produto pelo ID
console.log("Buscando produto pelo ID:", productManager.getProductById(1));

// Tentando buscar um ID inexistente
productManager.getProductById(99);