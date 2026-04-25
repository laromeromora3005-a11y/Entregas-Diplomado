const instrumentos = [
  { nombre: "Guitarra Eléctrica", precio: "450.000 COP", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzwrU1ZCA_NHOOqHFczg0HMUshncYsWx3JA&s" },
  { nombre: "Guitarra Acústica", precio: "380.000 COP", img: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400" },
  { nombre: "Piano de Cola", precio: "3.500.000 COP", img: "https://hinves.com/wp-content/uploads/2017/02/Cloud-Piano-un-piano-de-cola-que-toca-con-el-movimiento-de-las-nubes.jpg" },
  { nombre: "Teclado Yamaha", precio: "850.000 COP", img: "https://casajayes.com/cdn/shop/files/PSR-E283.jpg?v=1729610768=400" },
  { nombre: "Batería Acústica", precio: "1.200.000 COP", img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400" },
  { nombre: "Batería Electrónica", precio: "1.800.000 COP", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Visulite.jpg" },
  { nombre: "Violín Clásico", precio: "350.000 COP", img: "https://tiendadelmusico.com/23979-large_default/greko-mv1413at-violin-clasico-con-diapason-en-ebano-y-estuche.jpg" },
  { nombre: "Violonchelo", precio: "900.000 COP", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqUhl2ZhwDekVoep6nBOKej36veUHG0CIog&s=400" },
  { nombre: "Saxofón Alto", precio: "700.000 COP", img: "https://tecnimusic.com.co/storage/beauty/products/d-nq-np-2x-937959-mco49961345267-052022-f.jpg" },
  { nombre: "Trompeta", precio: "650.000 COP", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUNH-OjhRH7wTRfJGGChHO8M1qT4BSAOjMTYtuhaJQ-JV_U01OFy7QAQwiiwpNedcgiW9_RpRNPUeb0hpyHwv09nOJTaYuBSS0aHMpfsR-wJbalyiNj0xIuQ" },
  { nombre: "Flauta Traversa", precio: "220.000 COP", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc9a0z8WBqC0gPhfPkr0rqT-pTdkYO4A4Yh1O2cDSsnVdpjyx6" },
  { nombre: "Clarinete", precio: "300.000 COP", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1ynPtk1x9C5pbSN5tpsMvfyMxi-Y76BIzblPIq-joItEehGdmKSvzL4uOPC1wIBnkIhOMd70s3hfDd5rtPpFpCXHlkEk_whPYeZnZcFMOvWMWkSyr1JMVq_0" },
  { nombre: "Bajo Eléctrico", precio: "500.000 COP", img: "https://www.pianosbogota.com/wp-content/uploads/2017/08/bajo-electrico-gsr200bk-B.jpg" },
  { nombre: "Ukelele", precio: "180.000 COP", img: "https://m.media-amazon.com/images/I/6134gZwAXFL.jpg" },
  { nombre: "Arpa", precio: "2.500.000 COP", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/A_musical_instrument._A_harp.jpg/250px-A_musical_instrument._A_harp.jpg?utm_source=es.wikiquote.org&utm_campaign=parser&utm_content=thumbnail=400" }
];

let usuarioLogueado = null;

/* MOSTRAR */
function mostrarInstrumentos(lista) {
  const cont = document.getElementById("resultado");
  cont.innerHTML = "";

  lista.forEach(i => {
    cont.innerHTML += `
      <div class="card">
        <img src="${i.img}">
        <h3>${i.nombre}</h3>
        <p>${i.precio}</p>
      </div>
    `;
  });
}

/* BUSCAR */
function buscarInstrumento() {
  const texto = document.getElementById("instrumento").value.toLowerCase();

  const filtrados = instrumentos.filter(i =>
    i.nombre.toLowerCase().includes(texto)
  );

  mostrarInstrumentos(filtrados);
}

/* LOGIN */
function mostrarLogin() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user && pass) {
    usuarioLogueado = user;
    cerrarModal();
    actualizarNavbar();
  }
}

/* SALIR */
function salir() {
  usuarioLogueado = null;
  actualizarNavbar();
}

/* NAVBAR */
function actualizarNavbar() {
  const auth = document.getElementById("auth");

  if (usuarioLogueado) {
    auth.innerHTML = `
      <span>👤 ${usuarioLogueado}</span>
      <button onclick="salir()">Salir</button>
    `;
  } else {
    auth.innerHTML = `
      <button onclick="mostrarLogin()">Login</button>
    `;
  }
}

/* INICIO */
window.onload = () => {
  mostrarInstrumentos(instrumentos);
  actualizarNavbar();
};
