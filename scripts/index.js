import { WHATSAPP_NUMBER } from "./number.js";

let cart = [];

const MASSAS = [
    "Tradicional",
    "Brigadeiro",
    "Chocolate",
    "Baunilha",
    "Choc c/ avelã"
];

const RECHEIOS_BOLO = [
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

const GRID_CATEGORIES = ["1 Andar", "2 Andares", "Docinhos"];

const products = [
    { id: 101, name: "Bolo Decorado (10 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 100.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B10" },
    { id: 102, name: "Bolo Decorado (15 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 120.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B15" },
    { id: 103, name: "Bolo Decorado (20 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 150.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B20" },
    { id: 104, name: "Bolo Decorado (25 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 180.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B25" },
    { id: 105, name: "Bolo Decorado (30 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 210.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B30" },
    { id: 106, name: "Bolo Decorado (40 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 240.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B40" },
    { id: 107, name: "Bolo Decorado (50 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 270.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B50" },
    { id: 108, name: "Bolo Decorado (60 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 310.00, category: "1 Andar", type: "bolo", image: "https://placehold.co/100x100/F8BBD0/E91E63?text=B60" },
    { id: 201, name: "Bolo 2 Andares (40 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 280.00, category: "2 Andares", type: "bolo", image: "https://placehold.co/100x100/E91E63/F8BBD0?text=B40_2" },
    { id: 202, name: "Bolo 2 Andares (50 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 380.00, category: "2 Andares", type: "bolo", image: "https://placehold.co/100x100/E91E63/F8BBD0?text=B50_2" },
    { id: 203, name: "Bolo 2 Andares (70 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 480.00, category: "2 Andares", type: "bolo", image: "https://placehold.co/100x100/E91E63/F8BBD0?text=B70_2" },
    { id: 204, name: "Bolo 2 Andares (100 fatias)", desc: "Massa e 2 Recheios a escolher.", price: 600.00, category: "2 Andares", type: "bolo", image: "https://placehold.co/100x100/E91E63/F8BBD0?text=B100_2" },

    { id: 301, name: "Brigadeiro", desc: "Unidade", price: 3.00, category: "Docinhos", type: "doce", image: "https://placehold.co/100x100/E91E63/FFFFFF?text=BRIG" },
    { id: 302, name: "Bem Casado", desc: "Unidade", price: 3.50, category: "Docinhos", type: "doce", image: "https://placehold.co/100x100/E91E63/FFFFFF?text=BC" },
    { id: 303, name: "Surpresa de Uva", desc: "Unidade", price: 3.50, category: "Docinhos", type: "doce", image: "https://placehold.co/100x100/E91E63/FFFFFF?text=SUVA" },
    { id: 304, name: "Trufa", desc: "Unidade", price: 4.00, category: "Docinhos", type: "doce", image: "https://placehold.co/100x100/E91E63/FFFFFF?text=TRUFA" },
    
    { id: 401, name: "Bolo Pote", desc: "Sabor a escolher.", price: 15.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=POTE" },
    { id: 402, name: "Pavê", desc: "Grande", price: 70.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=PAVE" },
    { id: 403, name: "Taça Doce", desc: "Individual", price: 20.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=TAÇA" },
    { id: 404, name: "Mousse", desc: "Sabores variados.", price: 18.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=MOU" },
    { id: 405, name: "Tortilete Doce", desc: "Unidade", price: 12.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=TORT" },
    { id: 406, name: "Copo Felicidade", desc: "Sabor do dia.", price: 22.00, category: "Sobremesas", type: "sobremesa", image: "https://placehold.co/100x100/D81B60/FFFFFF?text=COPO" },
    { id: 501, name: "Torta Salgada", desc: "A consultar.", price: 80.00, category: "Tortas", type: "sobremesa", image: "https://placehold.co/100x100/9C27B0/FFFFFF?text=TSAL" },
    { id: 502, name: "Torta Doce", desc: "A consultar.", price: 75.00, category: "Tortas", type: "sobremesa", image: "https://placehold.co/100x100/9C27B0/FFFFFF?text=TDOC" },
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
        
        checkoutButton.disabled = totalItemsInCart === 0 || nameInput.value.trim() === "";
    }
};

const updateCart = (productId, change) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.type === 'bolo') {
        if (change === 1) {
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
            const lastItemIndex = cart.map(item => item.id).lastIndexOf(productId);
            if (lastItemIndex > -1) {
                cart.splice(lastItemIndex, 1);
            }
        }
    } else {
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
    renderGridProducts();
    renderCarouselItems();
};

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
                optionsHtml = `<p class="text-gray-500 font-corpo text-base mt-2">Categoria: ${item.category}</p>`;
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
        
        document.querySelectorAll('.cart-option-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const { uniqueId, type } = e.currentTarget.dataset;
                updateItemOption(uniqueId, type, e.target.value);
            });
        });
        
        document.querySelectorAll('.cart-remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const identifier = e.currentTarget.dataset.identifier;
                const type = e.currentTarget.dataset.type;

                if (type === 'bolo') {
                    const uniqueIdToRemove = parseFloat(identifier);
                    cart = cart.filter(item => item.uniqueId !== uniqueIdToRemove);
                } else {
                    const idToRemove = parseInt(identifier);
                    // Para docinhos/outros, remove apenas o primeiro item que corresponda ao ID, e não todos.
                    const indexToRemove = cart.findIndex(item => item.id === idToRemove);
                    if (indexToRemove > -1) {
                         cart.splice(indexToRemove, 1);
                    }
                }
                
                renderCart();
                renderGridProducts();
                renderCarouselItems();
            });
        });
    }

    if (nameInput) {
        nameInput.oninput = checkCheckoutPossibility;
    }

    cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    cartCountElement.textContent = totalItems > 99 ? '99+' : totalItems;
    
    // CORREÇÃO: Remove a classe opacity-0 para o contador flutuante sempre ser visível.
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
             message += `*Tipo:* ${item.category}\n`;
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


const renderGridProducts = () => {
    const container = document.getElementById('product-cards-container');
    if (!container) return;

    const gridProducts = products.filter(p => GRID_CATEGORIES.includes(p.category));
    
    const productCounts = cart.reduce((acc, item) => {
        const key = item.id;
        const qty = item.type === 'bolo' ? 1 : item.quantity;
        acc[key] = (acc[key] || 0) + qty;
        return acc;
    }, {});
    
    container.innerHTML = gridProducts.map(product => {
        const currentQty = productCounts[product.id] || 0;
        
        const minusButtonClass = currentQty > 0 
            ? 'product-action-btn w-8 h-8 rounded-full bg-red-200 text-red-700 hover:bg-red-300 transition text-lg'
            : 'w-8 h-8 rounded-full bg-gray-200 text-gray-400 cursor-not-allowed text-lg';
            
        const imageHtml = product.type.includes('bolo') 
            ? `<span class="ml-2">Categoria: ${product.category}</span>`
            : `<span class="ml-2">Toque para adicionar</span>`;
            
        return `
            <div class="card-produto sombra-doce flex flex-col justify-between">
                <div>
                    <div class="moldura-foto mb-4 flex flex-col items-center justify-center font-corpo text-2xl text-white/70">
                        <i class="fas fa-camera text-3xl mb-1"></i>
                        ${imageHtml}
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
    }).join('');
};


const renderCarouselItems = () => {
    const container = document.getElementById('carousel-items-container');
    if (!container) return;

    const carouselProducts = products.filter(p => !GRID_CATEGORIES.includes(p.category));

    const productCounts = cart.reduce((acc, item) => {
        const key = item.id;
        const qty = item.type !== 'bolo' ? item.quantity || 0 : 0; 
        acc[key] = (acc[key] || 0) + qty;
        return acc;
    }, {});
    
    container.innerHTML = carouselProducts.map(product => {
        const currentQty = productCounts[product.id] || 0;
        
        const minusButtonClass = currentQty > 0 
            ? 'product-action-btn w-6 h-6 rounded-full bg-red-200 text-red-700 hover:bg-red-300 transition text-md'
            : 'w-6 h-6 rounded-full bg-gray-200 text-gray-400 cursor-not-allowed text-md';

        return `
            <div class="carousel-item shadow-xl snap-start">
                <div class="carousel-item-img-container">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-titulo text-3xl text-gray-800">${product.name}</h3>
                    <p class="font-corpo text-sm text-gray-600 mb-2">${product.desc}</p>
                </div>
                <div class="flex flex-col items-center mt-3 pt-2 border-t border-dashed border-pink-200 w-full">
                    <span class="font-corpo text-3xl font-bold text-gray-800 mb-2">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <div class="flex items-center space-x-2">
                        <button class="${minusButtonClass}" data-product-id="${product.id}" data-action="remove" data-type="${product.type}" aria-label="Diminuir quantidade" ${currentQty === 0 ? 'disabled' : ''}>-</button>
                        <span id="qty-${product.id}" class="font-corpo text-xl font-bold w-5 text-center">${currentQty}</span>
                        <button class="product-action-btn w-6 h-6 rounded-full bg-green-200 text-green-700 hover:bg-green-300 transition text-md" data-product-id="${product.id}" data-action="add" data-type="${product.type}" aria-label="Aumentar quantidade">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
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

const setupCarousel = () => {
    const container = document.getElementById('carousel-items-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    if (container) {
        const scrollAmount = Math.max(250, container.clientWidth / 2);

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                container.scrollLeft -= scrollAmount;
            });
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                container.scrollLeft += scrollAmount;
            });
        }
    }
}


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
}

window.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    renderGridProducts();
    renderCarouselItems();
    setupCarousel();
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