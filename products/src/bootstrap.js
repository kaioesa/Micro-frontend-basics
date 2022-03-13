import faker from "faker";

// Tornando a execução da aplicação dinamica.
const mount = (el) => {
    let products = '';

    for (let i = 0; i < 10; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// Situação 1: Rodando em development, usando o local index.html 
// e o nome do component pode ser escolhido
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    if (el) {
        mount(el);
    }
}

// Situação 2: Rodando em production, usando o index.html do container 
// e o nome do component n pode ser escolhido

export { mount };