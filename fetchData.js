const DATA = [
  {
    "nombre": "Curso de Pastelería Básica",
    "descripcion": "Aprende las técnicas básicas de la pastelería para empezar a hacer deliciosos postres.",
    "precio": 100,
    "tipo": "curso",
    "imagen": "imagenes/curso1.jpg",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Curso de Decoración de Tartas",
    "descripcion": "Curso especializado en la decoración de tartas con técnicas avanzadas.",
    "precio": 150,
    "tipo": "curso",
    "imagen": "imagenes/curso2.jpg",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Curso de Postres Sin Gluten",
    "descripcion": "Aprende a hacer deliciosos postres sin gluten para quienes tienen intolerancia.",
    "precio": 120,
    "tipo": "curso",
    "imagen": "imagenes/curso3.jpg",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Curso de Repostería Avanzada",
    "descripcion": "Domina las técnicas de repostería avanzada para crear postres impresionantes.",
    "precio": 200,
    "tipo": "curso",
    "imagen": "imagenes/curso4.png",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Curso de Panadería Artesanal",
    "descripcion": "Curso para aprender a hacer panes artesanales con masa madre y otras técnicas tradicionales.",
    "precio": 180,
    "tipo": "curso",
    "imagen": "imagenes/curso5.png",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Curso de Tartas y Pasteles Elegantes",
    "descripcion": "Aprende a hacer tartas y pasteles de aspecto profesional para ocasiones especiales.",
    "precio": 250,
    "tipo": "curso",
    "imagen": "imagenes/curso6.jpg",
    "videoUrl": "https://www.youtube.com/embed/POvklJcnALQ"
  },
  {
    "nombre": "Pastel de Chocolate",
    "descripcion": "Delicioso pastel de chocolate con crema de cacao.",
    "precio": 50,
    "tipo": "producto",
    "imagen": "imagenes/producto1.jpg"
  },
  {
    "nombre": "Galletas de Vainilla",
    "descripcion": "Galletas caseras de vainilla, perfectas para acompañar el té.",
    "precio": 30,
    "tipo": "producto",
    "imagen": "imagenes/producto2.jpg"
  },
  {
    "nombre": "Torta de Frutilla",
    "descripcion": "Deliciosa torta con capas de crema y frescas frutillas.",
    "precio": 60,
    "tipo": "producto",
    "imagen": "imagenes/producto3.jpg"
  },
  {
    "nombre": "Cupcakes de Vainilla",
    "descripcion": "Pequeños y esponjosos cupcakes con cobertura de vainilla.",
    "precio": 40,
    "tipo": "producto",
    "imagen": "imagenes/producto4.png"
  },
  {
    "nombre": "Tarta de Limón",
    "descripcion": "Tarta fresca y cremosa con limón, ideal para cualquier ocasión.",
    "precio": 45,
    "tipo": "producto",
    "imagen": "imagenes/producto5.jpg"
  },
  {
    "nombre": "Brownies de Chocolate",
    "descripcion": "Brownies suaves con mucho chocolate y nueces.",
    "precio": 55,
    "tipo": "producto",
    "imagen": "imagenes/producto6.jpg"
  },
  {
    "nombre": "Torta de Manzana",
    "descripcion": "Torta casera de manzana, perfecta para una merienda.",
    "precio": 50,
    "tipo": "producto",
    "imagen": "imagenes/producto7.jpg"
  },
  {
    "nombre": "Pastelito de Dulce de Leche",
    "descripcion": "Deliciosos pastelitos rellenos de dulce de leche.",
    "precio": 35,
    "tipo": "producto",
    "imagen": "imagenes/producto8.jpg"
  },
  {
    "nombre": "Bizcochos de Yogur",
    "descripcion": "Esponjosos bizcochos de yogur, ideales para el desayuno.",
    "precio": 25,
    "tipo": "producto",
    "imagen": "imagenes/producto9.png"
  },
  {
    "nombre": "Galletas de Chocolate",
    "descripcion": "Galletas crujientes con trozos de chocolate.",
    "precio": 40,
    "tipo": "producto",
    "imagen": "imagenes/producto2.jpg"
  },
  {
    "nombre": "Muffins de Plátano",
    "descripcion": "Muffins suaves y esponjosos de plátano con nueces.",
    "precio": 45,
    "tipo": "producto",
    "imagen": "imagenes/producto4.png"
  },
  {
    "nombre": "Tarta de Almendra",
    "descripcion": "Tarta con base de almendra y un relleno suave.",
    "precio": 55,
    "tipo": "producto",
    "imagen": "imagenes/producto5.jpg"
  }
]

;

async function fetchData() {
  try {
    //por problemas de CORS no pude hacer el fetch al json por eso utilizo una constante DATA
    // const response = await fetch("data.json");
    // const data = await response.json();
    // return data;
    return new Promise((resolve) => {
      setTimeout(() => resolve(DATA), 100);
    });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
}

function renderItems(items, container) {
  items.forEach((item) => {
    const contenedorCreado = document.createElement("div");
    contenedorCreado.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");
    contenedorCreado.innerHTML = `
      <div class="card shadow-sm">
        <img src="${item.imagen}" class="card-img-top img-fluid" alt="${item.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text">${item.descripcion}</p>
          <div class="card-footer d-flex justify-content-between align-items-center">
            ${item.videoUrl ? `<a href="${item.videoUrl}" class="btn btn-primary" target="_blank">Ver más</a>` : ""}
            <small class="text-muted">Precio: $${item.precio}</small>
          </div>
        </div>
      </div>
    `;
    container.append(contenedorCreado);
  });
}

function crearProductos(datos) {
  const contenedorCursos = document.getElementById("contenedorCursos");
  const contenedorProductos = document.getElementById("contenedorProductos");

  contenedorCursos.innerHTML = "";
  contenedorProductos.innerHTML = "";

  renderItems(datos.filter((item) => item.tipo === "curso"), contenedorCursos);
  renderItems(datos.filter((item) => item.tipo === "producto"), contenedorProductos);
}


async function init() {
  const datos = await fetchData();
  if (datos && datos.length > 0) {
    crearProductos(datos);
  }
}

document.addEventListener("DOMContentLoaded", init);
