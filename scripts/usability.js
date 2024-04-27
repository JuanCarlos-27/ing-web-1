// Objeto con los tips para mejorar la usabilidad de una aplicación web
const TIPS_IMPROVE_WEB = [
  {
    title: 'Velocidad de carga',
    description:
      'Cada página debería demorar menos de tres (3) segundos en cargar, y menos de un segundo en la mayoría de los casos. Estudios han demostrado que los usuarios se ponen impacientes luego del primer segundo.',
    image: 'https://cdn.pixabay.com/photo/2019/03/01/17/49/speed-4028234_1280.jpg',
  },
  {
    title: 'Tipografía',
    description:
      'Mantener coherencia en las familias y tamaños de fuente (o tipos de letra). No mezclar Arial con Times New Roman y Courier New. Esto no sólo causa confusión en los usuarios sino que también hace que las páginas se vean desorganizadas',
    image:
      'https://images.unsplash.com/photo-1511548774318-563182fe8d03?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Diseño responsivo',
    description:
      'El diseño responsivo es una técnica de diseño web que permite que las páginas se adapten automáticamente al tamaño de la pantalla del dispositivo en el que se visualizan. Esto garantiza una experiencia de usuario óptima en cualquier dispositivo.',
    image: 'https://cdn.pixabay.com/photo/2016/08/26/18/19/responsive-1622825_1280.png',
  },
  {
    title: 'Navegación intuitiva',
    description:
      'La navegación intuitiva es aquella que permite a los usuarios encontrar la información que buscan de manera rápida y sencilla. Para lograr una navegación intuitiva, es importante que la estructura de la página sea clara y que los menús y enlaces estén bien organizados.',
    image: 'https://cdn.pixabay.com/photo/2016/08/24/06/17/seo-1616306_1280.png',
  },
  {
    title: 'Colores y contraste',
    description:
      'Los colores y el contraste son elementos fundamentales en el diseño de una página web. Es importante elegir una paleta de colores que sea atractiva y que refleje la identidad de la marca, pero también es importante asegurarse de que los colores y el contraste no dificulten la lectura o la navegación.',
    image:
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Imágenes y listas',
    description:
      'Al utilizar imágenes siempre es recomendable agregar un atributo alt con una descripción de la imagen. Esto no solo mejora la accesibilidad de la página, sino que también puede mejorar el posicionamiento en los motores de búsqueda. Por otro lado, al utilizar listas en lugar de párrafos largos, se facilita la lectura y la comprensión de la información.',
    image: 'https://www.digitalmaas.com/wp-content/uploads/2019/07/Amplify-Alt-Tags.png',
  },
];

// Objeto con las características de un sistema usable
const CHARACTERISTICS = [
  {
    title: 'Fácil de aprender',
    description: `Un sistema usable es aquel que tiene facilidad de uso, de tal manera que un usuario
    novato puede hacer uso de todos sus beneficios en el menor tiempo posible.`,
  },
  {
    title: 'Eficiencia de uso',
    description: `Se trata de que el usuario alcance el nivel máximo de productividad con un sistema al
    que ya ha aprendido a usar.`,
  },
  {
    title: 'Retención sobre el tiempo',
    description: `Significa la disminución del tiempo de aprendizaje del usuario al utilizar el sistema
    de manera intermitente.`,
  },
  {
    title: 'Tasa de error',
    description: `Un sistema usable es aquel que logra que el usuario cometa el mínimo de errores y
    cuando los comete es capaz de ayudarlo a salir de ellos.`,
  },
  {
    title: 'Satisfacción',
    description: `Es una medida subjetiva que se logra por el cumplimiento de las características
    expuestas anteriormente.`,
  },
];

// Objeto que lista las referencias a renderizar en la página
const REFERENCES = [
  {
    title:
      'Carrión, R. A. (2014). Usabilidad WEB: Pensando en el bienestar del usuario. Revista Tecnológica-ESPOL, 27(2).',
    link: 'https://www.rte.espol.edu.ec/index.php/tecnologica/article/view/302/219',
  },
  {
    title: 'Frege Issa, T. C. (2011). Usabilidad Web. Acta Nova, 5(1), 138–160.',
    link: 'http://www.scielo.org.bo/pdf/ran/v5n1/v5n1a07.pdf',
  },
  {
    title: 'Qué es la usabilidad web? Sigue estos consejos para mejorarla. (2021). UNIR.',
    link: 'https://www.unir.net/marketing-comunicacion/revista/que-es-usabilidad-web/',
  },
];

// Se agregan los tips al DOM
TIPS_IMPROVE_WEB.forEach((tip) => {
  const article = document.createElement('article');
  article.innerHTML = `
          <h3>${tip.title}</h3>
          <img src="${tip.image}" alt="${tip.title}" />
          <p>${tip.description}</p>
        `;
  document.querySelector('.tips-section > .tips-content').appendChild(article);
});

CHARACTERISTICS.forEach((characteristic) => {
  const article = document.createElement('li');
  article.innerHTML = `
        <h4>${characteristic.title}</h3>
        <p>${characteristic.description}</p>
      `;
  document.querySelector('.principles-section > ul').appendChild(article);
});

// Se agregan las referencias al DOM
REFERENCES.forEach((reference) => {
  const article = document.createElement('li');
  article.innerHTML = `
          <a href="${reference.link}" target="_blank">${reference.title}</a>
        `;
  document.querySelector('.references-section > ul').appendChild(article);
});
