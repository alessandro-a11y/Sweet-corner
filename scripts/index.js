const WHATSAPP_NUMBER = "558781583215"; // Coloque aqui o número real, mas como string!

let cart = [];

const MASSAS = [
    "Selecione",
    "Tradicional",
    "Brigadeiro",
    "Chocolate",
    "Baunilha",
    "Choc c/ avelã"
];

const RECHEIOS_BOLO = [
    "Selecione",
    "Ninho",
    "Doce de leite",
    "Brigadeiro",
    "Beijinho",
    "Prestigio",
    "Bem casado",
    "Olho d'sogra",
    "Doce leite c/ ameixa",
    "Ninho c/ morango"
];

const CATEGORIES_ORDER = [
    { id: 'bolos-1-andar', name: 'Bolos Decorados (1 Andar)', desc: 'Escolha a massa e dois recheios.' },
    { id: 'bolos-2-andares', name: 'Bolos de Andares', desc: 'Perfeitos para grandes celebrações.' },
    { id: 'docinhos-classicos', name: 'Docinhos Clássicos (Unidade)', desc: 'Brigadeiros, beijinhos e outras delícias.' },
    { id: 'sobremesas-especiais', name: 'Sobremesas Especiais', desc: 'Taças, pudins, pavês e tortas geladas.' },
    { id: 'tortas', name: 'Tortas Salgadas', desc: 'Opções deliciosas para complementar sua festa.' }
];


const products = [
    { id: 101, name: "Bolo (10 fatias)", desc: "Aprox. 1.2kg.", price: 100.00, category: "bolos-1-andar", type: "bolo", image: "images/10-fatias.jpeg" },
    { id: 102, name: "Bolo (15 fatias)", desc: "Aprox. 1.8kg.", price: 120.00, category: "bolos-1-andar", type: "bolo", image: "images/15-fatias.jpeg" },
    { id: 103, name: "Bolo (20 fatias)", desc: "Aprox. 2.4kg.", price: 150.00, category: "bolos-1-andar", type: "bolo", image: "images/20-fatias.jpeg" },
    { id: 104, name: "Bolo (25 fatias)", desc: "Aprox. 3.0kg.", price: 180.00, category: "bolos-1-andar", type: "bolo", image: "images/25-fatias.jpeg" },
    { id: 105, name: "Bolo (30 fatias)", desc: "Aprox. 3.6kg.", price: 210.00, category: "bolos-1-andar", type: "bolo", image: "images/30-fatias.png" },
    { id: 106, name: "Bolo (40 fatias)", desc: "Aprox. 4.8kg.", price: 240.00, category: "bolos-1-andar", type: "bolo", image: "images/40-fatias.png" },
    { id: 107, name: "Bolo (50 fatias)", desc: "Aprox. 6.0kg.", price: 270.00, category: "bolos-1-andar", type: "bolo", image: "images/50-fatias.png" },
    { id: 108, name: "Bolo (60 fatias)", desc: "Aprox. 7.2kg.", price: 310.00, category: "bolos-1-andar", type: "bolo", image: "images/60-fatias.png" },

    { id: 201, name: "Bolo 2 Andares (40 fatias)", price: 280.00, desc: "Aprox. 4.8kg.", category: "bolos-2-andares", type: "bolo", image: "images/40-2-andares.jpeg" },
    { id: 202, name: "Bolo 2 Andares (50 fatias)", price: 380.00, desc: "Aprox. 6.0kg.", category: "bolos-2-andares", type: "bolo", image: "images/50-2-andares.jpeg" },
    { id: 203, name: "Bolo 2 Andares (70 fatias)", price: 480.00, desc: "Aprox. 8.4kg.", category: "bolos-2-andares", type: "bolo", image: "images/70-2-andares.png" },
    { id: 204, name: "Bolo 2 Andares (100 fatias)", price: 600.00, desc: "Aprox. 12kg.", category: "bolos-2-andares", type: "bolo", image: "images/100-2-andares.png" },

    { id: 301, name: "Brigadeiro Tradicional", desc: "Clássico! (Apenas venda em Kit de 10+)", price: 3.00, category: "docinhos-classicos", type: "doce", image: "images/brigadeiro.jpeg" },
    { id: 302, name: "Beijinho de Coco", desc: "Coco fresco e irresistível. (Apenas venda em Kit de 10+)", price: 3.00, category: "docinhos-classicos", type: "doce", image: "images/image.png" },
    { id: 303, name: "Pavê de Oreo", desc: "O favorito, na sua melhor versão. (Apenas venda em Kit de 10+)", price: 3.50, category: "docinhos-classicos", type: "doce", image: "images/oreo.jpeg" },
    { id: 304, name: "Bem-casado", desc: "Doce delicado e tradicional.", price: 4.00, category: "docinhos-classicos", type: "doce", image: "images/bem-casado.jpeg" },

    { id: 401, name: "Taça Doce", desc: "Combinação de camadas cremosas e pedaços de bolo na taça. Sabor do dia sob consulta. Porção individual.", price: 20.00, category: "sobremesas-especiais", type: "sobremesa", image: "images/ta.png" },
    { id: 402, name: "Pavê", desc: "Leve, cremoso e delicioso! Camadas de biscoito intercaladas com um creme aveludado, com a doçura na medida certa.", price: 70.00, category: "sobremesas-especiais", type: "sobremesa", image: "images/pave.png" },
    { id: 403, name: "Mini Vulcão", desc: "Mini bolo fofo com recheio cremoso transbordando, no formato vulcão. Porção individual.", price: 3.50, category: "sobremesas-especiais", type: "sobremesa", image: "images/vulcao.png" },
    { id: 404, name: "Bolo no Pote", desc: "Sabores variados.", price: 15.00, category: "sobremesas-especiais", type: "sobremesa", image: "images/pote.png" },
    { id: 405, name: "Pudin", desc: "Pudim de textura suave e aveludada, com o sabor inconfundível do caramelo.", price: 22.00, category: "sobremesas-especiais", type: "sobremesa", image: "images/pudim.jpeg" },
    { id: 406, name: "Mousses", desc: "Diversos sabores, individual.", price: 22.00, category: "sobremesas-especiais", type: "sobremesa", image: "images/mousse.jpeg" },
];


const toggleCart = () => {
    const sidebar = document.getElementById('cart-sidebar');
    const backdrop = document.getElementById('cart-backdrop');
    const body = document.body;
    const isOpen = sidebar.classList.contains('carrinho-aberto');
    
    if (isOpen) {
        sidebar.classList.remove('carrinho-aberto');
        body.classList.remove('cart-open');
        setTimeout(() => {
            backdrop.classList.add('hidden');
        }, 400);
    } else {
        backdrop.classList.remove('hidden');
        sidebar.classList.add('carrinho-aberto');
        body.classList.add('cart-open');
        renderCart();
    }
};

const checkCheckoutPossibility = () => {
    const checkoutButton = document.getElementById('checkout-button');
    const nameInput = document.getElementById('client-name-input');
    
    if (checkoutButton && nameInput) {
        const totalItemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
        
        // Desativa o botão se não houver itens OU se o nome estiver vazio
        checkoutButton.disabled = totalItemsInCart === 0 || nameInput.value.trim() === "";
    }
};

const updateCart = (productId, change) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.type === 'bolo') {
        if (change === 1) {
            // Bolos são tratados como itens únicos no carrinho devido às opções
            const newItem = { 
                ...product, 
                quantity: 1, 
                uniqueId: Date.now() + Math.random(), 
                massa: MASSAS[0],
                recheio1: RECHEIOS_BOLO[0],
                recheio2: RECHEIOS_BOLO[0]
            };
            cart.push(newItem);
        } else if (change === -1) {
            // Remove o último bolo adicionado com aquele ID
            const lastItemIndex = cart.map(item => item.id).lastIndexOf(productId);
            if (lastItemIndex > -1) {
                cart.splice(lastItemIndex, 1);
            }
        }
    } else {
        // Outros itens são agrupados por quantidade
        const existingItemIndex = cart.findIndex(item => item.id === productId && item.type !== 'bolo');

        if (change === 1) {
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1,
                });
            }
        } else if (change === -1 && existingItemIndex > -1) {
            cart[existingItemIndex].quantity -= 1;
            if (cart[existingItemIndex].quantity <= 0) {
                cart.splice(existingItemIndex, 1);
            }
        }
    }
    
    renderCart();
    renderAllProducts();
};

// Função para remover item de bolo por uniqueId
const removeItemFromCartByUniqueId = (uniqueIdToRemove) => {
    cart = cart.filter(item => item.uniqueId !== uniqueIdToRemove);
    renderCart();
    renderAllProducts();
}

// Função para remover item agrupado por Id
const removeItemFromCartById = (idToRemove) => {
    const indexToRemove = cart.findIndex(item => item.id === idToRemove);
    if (indexToRemove > -1) {
        cart.splice(indexToRemove, 1);
    }
    renderCart();
    renderAllProducts();
}


const updateItemOption = (uniqueId, type, value) => {
    const uniqueIdNumber = parseFloat(uniqueId);
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueIdNumber);
    if (itemIndex > -1) {
        cart[itemIndex][type] = value;
    }
    checkCheckoutPossibility();
};

const renderCart = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const nameInput = document.getElementById('client-name-input');
    
    let total = 0;
    let totalItems = 0;
    if (!cartItemsContainer || !cartTotalElement || !cartCountElement) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p id="empty-cart-message" class="font-corpo text-gray-600/80 text-2xl mt-8 text-center">Seu Cantinho Doce está vazio. Clique em '+' no cardápio para começar!</p>`;
    } else {
        
        cart.forEach((item) => {
            const itemQuantity = item.quantity || 1;
            const itemPriceTotal = item.price * itemQuantity;
            total += itemPriceTotal; 
            totalItems += itemQuantity;
            
            let optionsHtml = '';
            
            if (item.type === 'bolo') {
                const massaOptions = MASSAS.map(m => `<option value="${m}" ${item.massa === m ? 'selected' : ''}>${m}</option>`).join('');
                const recheioOptions1 = RECHEIOS_BOLO.map(r => `<option value="${r}" ${item.recheio1 === r ? 'selected' : ''}>${r}</option>`).join('');
                const recheioOptions2 = RECHEIOS_BOLO.map(r => `<option value="${r}" ${item.recheio2 === r ? 'selected' : ''}>${r}</option>`).join('');

                optionsHtml = `
                    <div class="grid grid-cols-3 gap-2 text-sm font-corpo mt-2">
                        <label class="block">
                            <span class="text-gray-600 font-bold text-base">Massa:</span>
                            <select data-unique-id="${item.uniqueId}" data-type="massa" class="cart-option-select mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-pink-50 border-2 text-gray-700">
                                ${massaOptions}
                            </select>
                        </label>
                        <label class="block">
                            <span class="text-gray-600 font-bold text-base">Recheio 1:</span>
                            <select data-unique-id="${item.uniqueId}" data-type="recheio1" class="cart-option-select mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-pink-50 border-2 text-gray-700">
                                ${recheioOptions1}
                            </select>
                        </label>
                        <label class="block">
                            <span class="text-gray-600 font-bold text-base">Recheio 2:</span>
                            <select data-unique-id="${item.uniqueId}" data-type="recheio2" class="cart-option-select mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-pink-50 border-2 text-gray-700">
                                ${recheioOptions2}
                            </select>
                        </label>
                    </div>
                `;
            } else {
                // Para Doces/Sobremesas agrupados
                const categoryInfo = CATEGORIES_ORDER.find(c => c.id === item.category);
                const categoryName = categoryInfo ? categoryInfo.name.replace(/\(.*\)/, '').trim() : item.category;
                optionsHtml = `<p class="text-gray-500 font-corpo text-base mt-2">Categoria: ${categoryName}</p>`;
            }

            const identifierToRemove = item.type === 'bolo' ? item.uniqueId : item.id;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carrinho-item flex flex-col bg-white p-3 rounded-xl sombra-doce mb-4 border-2 border-pink-200';
            itemDiv.innerHTML = `
                <div class="flex justify-between items-start border-b border-pink-100 pb-2 mb-2">
                    <div class="flex-grow">
                        <p class="font-corpo text-xl font-bold text-gray-700">${item.name}</p>
                        <p class="text-xs text-gray-500">${item.desc}</p>
                    </div>
                    <div class="flex items-center space-x-2 ml-4">
                        <span class="font-corpo text-xl font-bold text-cor-acento">${itemQuantity} un</span>
                        <button class="cart-remove-btn text-white bg-red-400 hover:bg-red-500 w-8 h-8 rounded-full text-lg transition shadow-md" data-identifier="${identifierToRemove}" data-type="${item.type}" aria-label="Remover item completo"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                ${optionsHtml}
                <p class="font-corpo text-right text-lg font-bold mt-2 pt-2 border-t border-pink-100 text-cor-acento">Subtotal: R$ ${itemPriceTotal.toFixed(2).replace('.', ',')}</p>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
        
        // Adiciona event listeners para as opções dos bolos
        document.querySelectorAll('.cart-option-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const { uniqueId, type } = e.currentTarget.dataset;
                updateItemOption(uniqueId, type, e.target.value);
            });
        });
        
        // Adiciona event listeners para os botões de remoção
        document.querySelectorAll('.cart-remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const identifier = e.currentTarget.dataset.identifier;
                const type = e.currentTarget.dataset.type;

                if (type === 'bolo') {
                    // Remove item de bolo (por uniqueId)
                    const uniqueIdToRemove = parseFloat(identifier);
                    removeItemFromCartByUniqueId(uniqueIdToRemove);
                } else {
                    // Remove item agrupado (por Id)
                    const idToRemove = parseInt(identifier);
                    removeItemFromCartById(idToRemove);
                }
            });
        });
    }

    if (nameInput) {
        nameInput.oninput = checkCheckoutPossibility;
    }

    cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    cartCountElement.textContent = totalItems > 99 ? '99+' : totalItems;
    
    cartCountElement.classList.remove('opacity-0'); 

    checkCheckoutPossibility();
};

const generateWhatsAppMessage = (clientName) => {
    if (cart.length === 0) return "Olá! Gostaria de falar sobre os bolos do Cantinho Doce. Meu carrinho está vazio, mas quero fazer uma encomenda!";
    
    let message = `*PEDIDO CANTINHO DOCE*\n\n`;
    message += `Olá, meu nome é *${clientName}* e eu gostaria de confirmar a seguinte encomenda:\n\n`;
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemQuantity = item.quantity || 1;
        const itemTotal = item.price * itemQuantity; 
        total += itemTotal;
        
        message += `-----------------------------\n`;
        message += `*Item ${index + 1}:* ${item.name} (x${itemQuantity})\n`;

        if (item.type === 'bolo') {
            message += `*Massa:* ${item.massa || '❗ FALTA ESCOLHER'}\n`;
            message += `*Recheios:* ${item.recheio1 || '❗ FALTA ESCOLHER'} e ${item.recheio2 || '❗ FALTA ESCOLHER'}\n`;
        } else {
             // Tenta buscar o nome da categoria para melhor clareza no WhatsApp
            const categoryInfo = CATEGORIES_ORDER.find(c => c.id === item.category);
            const categoryName = categoryInfo ? categoryInfo.name.replace(/\(.*\)/, '').trim() : item.category;
            message += `*Categoria:* ${categoryName}\n`;
        }

        message += `*Valor Total do Item:* R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
    });
    
    message += `-----------------------------\n\n`;
    
    message += `*Total Geral do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    
    message += `Gostaria de confirmar a disponibilidade e combinar a forma de pagamento e retirada/entrega. Aguardo seu contato! :)`;
    
    return encodeURIComponent(message);
};

const checkout = () => {
    const nameInput = document.getElementById('client-name-input');
    const clientName = nameInput ? nameInput.value.trim() : "";

    if (!nameInput || clientName === "") {
        alert("Ops! Por favor, preencha seu nome para fechar o pedido.");
        nameInput.focus();
        return;
    }

    if (WHATSAPP_NUMBER === "55XX9XXXXXXXX") {
        const errorModal = document.getElementById('error-modal');
        if (errorModal) {
            errorModal.classList.remove('hidden');
        } else {
            console.error("ERRO: Configure o número do WhatsApp no arquivo number.js");
        }
        return;
    }
    const message = generateWhatsAppMessage(clientName);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
};


const renderAllProducts = () => {
    const productsSection = document.getElementById('products-master-container');
    if (!productsSection) return;

    productsSection.innerHTML = ''; 

    const productCounts = cart.reduce((acc, item) => {
        const key = item.id;
        // Bolos sempre contam 1 para o card do menu, doces usam a quantidade
        const qty = item.type === 'bolo' ? 1 : item.quantity; 
        
        // Se for bolo, contamos a quantidade de itens únicos com aquele ID
        if (item.type === 'bolo') {
             acc[key] = (acc[key] || 0) + 1;
        } else {
             // Para doces, somamos a quantidade
             acc[key] = (acc[key] || 0) + item.quantity;
        }
        
        return acc;
    }, {});
    
    // Corrige a contagem para que doces/sobremesas mostrem o total correto
    const uniqueItemCounts = cart.reduce((acc, item) => {
        if (item.type === 'bolo') {
            acc[item.id] = (acc[item.id] || 0) + 1; // Bolos são contados individualmente
        } else {
            // Doces e outros são agrupados
            acc[item.id] = (acc[item.id] || 0) + item.quantity;
        }
        return acc;
    }, {});


    CATEGORIES_ORDER.forEach(categoryInfo => {
        const categoryProducts = products.filter(p => p.category === categoryInfo.id);

        if (categoryProducts.length > 0) {
            const sectionHtml = `
                <section id="${categoryInfo.id}" class="mb-16 pt-10">
                    <h2 class="font-titulo text-6xl text-center text-gray-800 mb-4">${categoryInfo.name}</h2>
                    <p class="font-corpo text-center text-xl max-w-3xl mx-auto mb-8 text-gray-700/80">${categoryInfo.desc}</p>
                    <div class="product-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        ${categoryProducts.map(product => {
                            // Usa a contagem correta (uniqueItemCounts)
                            const currentQty = uniqueItemCounts[product.id] || 0;
                            const minusButtonClass = currentQty > 0 
                                ? 'product-action-btn w-8 h-8 rounded-full bg-red-200 text-red-700 hover:bg-red-300 transition text-lg'
                                : 'w-8 h-8 rounded-full bg-gray-200 text-gray-400 cursor-not-allowed text-lg';
                                
                            return `
                                <div class="card-produto sombra-doce flex flex-col justify-between">
                                    <div>
                                        <div class="moldura-foto mb-4 h-64 flex justify-center items-center p-2"> 
                                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain rounded-2xl">
                                        </div>
                                        <h3 class="font-titulo text-4xl text-center text-gray-800 mb-1">${product.name}</h3>
                                        <p class="font-corpo text-center text-lg text-gray-600 mb-3">${product.desc}</p>
                                    </div>
                                    <div class="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-pink-200">
                                        <span class="font-corpo text-3xl font-bold text-gray-800">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                                        <div class="flex items-center space-x-2">
                                            <button class="${minusButtonClass}" data-product-id="${product.id}" data-action="remove" data-type="${product.type}" aria-label="Diminuir quantidade" ${currentQty === 0 ? 'disabled' : ''}>-</button>
                                            <span id="qty-${product.id}" class="font-corpo text-2xl font-bold w-6 text-center">${currentQty}</span>
                                            <button class="product-action-btn w-8 h-8 rounded-full bg-green-200 text-green-700 hover:bg-green-300 transition text-lg" data-product-id="${product.id}" data-action="add" data-type="${product.type}" aria-label="Aumentar quantidade">+</button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>
            `;
            productsSection.insertAdjacentHTML('beforeend', sectionHtml);
        }
    });
};

const setupProductListeners = () => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    mainContent.addEventListener('click', (e) => {
        const target = e.target.closest('.product-action-btn');
        if (!target) return;

        const productId = parseInt(target.dataset.productId);
        const action = target.dataset.action;

        if (productId && action) {
            if (action === 'add') {
                updateCart(productId, 1);
            } else if (action === 'remove') {
                updateCart(productId, -1);
            }
        }
    });
}

/**
 * 🛠️ FUNÇÃO CORRIGIDA: Implementa a rolagem suave com offset E o destaque dinâmico do botão.
 */
const setupSmoothScrolling = () => {
    const menuFiltros = document.getElementById('menu-filtros-fixo');
    const todosOsBotoes = document.querySelectorAll('.btn-filtro-menu');
    
    // Define os estilos de destaque para facilitar a gestão via JS
    const activeBgColor = 'var(--cor-acento)';
    const activeTextColor = 'white';
    const inactiveBgColor = 'transparent'; 
    const inactiveTextColor = 'rgb(55, 65, 81)'; // text-gray-700

    /**
     * Aplica o destaque no link clicado e remove dos outros.
     * @param {Element} clickedLink O elemento <a> que foi clicado.
     */
    const highlightButton = (clickedLink) => {
        todosOsBotoes.forEach(btn => {
            // Remove o destaque de todos
            btn.style.backgroundColor = inactiveBgColor;
            btn.style.color = inactiveTextColor;
            btn.classList.remove('font-bold');
            btn.classList.add('font-medium');
            btn.classList.remove('shadow-lg');
            btn.classList.add('hover:bg-pink-100'); // Garante o hover de volta
        });

        // Aplica o destaque ao botão clicado
        clickedLink.style.backgroundColor = activeBgColor;
        clickedLink.style.color = activeTextColor;
        clickedLink.classList.remove('font-medium');
        clickedLink.classList.add('font-bold');
        clickedLink.classList.add('shadow-lg'); // Adiciona uma sombra para enfatizar
        clickedLink.classList.remove('hover:bg-pink-100');
    }

    // 1. Garante que o primeiro botão esteja ativo ao carregar a página
    // Isso deve ser compatível com a cor inicial definida no seu HTML.
    if (todosOsBotoes.length > 0 && todosOsBotoes[0].getAttribute('href') === '#bolos-1-andar') {
        // Se o primeiro link tiver o estilo inicial no HTML, precisamos apenas garantir que os outros não tenham.
        // Já que você definiu o estilo inline no primeiro link do HTML, garantimos que os outros sigam o padrão:
        todosOsBotoes.forEach((btn, index) => {
             if (index > 0) {
                btn.style.backgroundColor = inactiveBgColor;
                btn.style.color = inactiveTextColor;
             }
        });
        // Remove a chamada highlightButton(todosOsBotoes[0]) para não conflitar com o estilo inline do HTML
    }
    
    // Delega o evento de clique para o contêiner do menu
    menuFiltros?.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        // 1. Previne o comportamento padrão (pular imediatamente)
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 2. ADICIONA O DESTAQUE
            highlightButton(link);

            // 3. Calcula o offset. Altura da barra de menu fixo.
            const offset = menuFiltros.offsetHeight || 0; 

            // 4. Calcula a posição alvo corrigida
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset - 10; // -10px de margem extra

            // 5. Rola suavemente
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Opcional: Atualiza a URL sem o pulo imediato
            history.pushState(null, '', targetId);
        }
    });
};


const setupEventListeners = () => {
    document.getElementById('open-cart-btn')?.addEventListener('click', toggleCart);
    document.getElementById('close-cart-btn-icon')?.addEventListener('click', toggleCart);
    document.getElementById('cart-backdrop')?.addEventListener('click', toggleCart);
    document.getElementById('checkout-button')?.addEventListener('click', checkout);
    document.getElementById('close-error-modal-btn')?.addEventListener('click', () => {
        document.getElementById('error-modal')?.classList.add('hidden');
    });
    document.getElementById('client-name-input')?.addEventListener('input', checkCheckoutPossibility);
    
    setupProductListeners();
    setupSmoothScrolling();
}

window.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    renderAllProducts();
    renderCart();
});

window.addEventListener("load", () => {
    const overlay = document.getElementById("loader-overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 400);
    }
});