const productos = [
    { nombre: "Vape Modelo A", img: "https://via.placeholder.com/150", precio: "$20", link: "https://wa.me/TUNUMERO" },
    { nombre: "Vape Modelo B", img: "https://via.placeholder.com/150", precio: "$25", link: "https://wa.me/TUNUMERO" }
];

const catalogo = document.getElementById('catalogo');

productos.forEach(p => {
    catalogo.innerHTML += `
        <div class="card">
            <img src="${p.img}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.precio}</p>
            <a href="${p.link}" class="btn-wpp">Pedir por WhatsApp</a>
        </div>
    `;
});
