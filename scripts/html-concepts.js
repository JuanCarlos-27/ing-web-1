// Objeto que lista la información a renderizar en la página
const HTML_IMPORTANT_TAGS = [
  {
    title: `&lt;header&gt;`,
    description:
      'Define la cabecera de un documento o sección. Puede contener un grupo de elementos de encabezado, un logo o un formulario de búsqueda.',
  },
  {
    title: `&lt;nav&gt;`,
    description:
      'Define un conjunto de enlaces de navegación. Puede contener enlaces a otras páginas, a secciones de la página actual o a otras páginas web.',
  },
  {
    title: `&lt;main&gt;`,
    description:
      'Define el contenido principal de un documento. Debe contener el contenido central de la página, excluyendo cualquier contenido que se repita en múltiples páginas.',
  },
  {
    title: `&lt;article&gt;`,
    description:
      'Define un contenido independiente y autocontenido, como un artículo, un mensaje de un foro o un comentario.',
  },
  {
    title: `&lt;section&gt;`,
    description:
      'Define una sección de un documento. Puede contener un grupo de elementos relacionados, como un grupo de artículos o una lista de enlaces.',
  },
  {
    title: `&lt;aside&gt;`,
    description:
      'Define contenido relacionado pero independiente del contenido principal, como un anuncio, una biografía del autor o una lista de enlaces relacionados.',
  },
  {
    title: `&lt;footer&gt;`,
    description:
      'Define el pie de un documento o sección. Puede contener información sobre derechos de autor, enlaces a páginas relacionadas o información de contacto.',
  },
  {
    title: `&lt;h1&gt; a &lt;h6&gt;`,
    description:
      'Define un encabezado de nivel 1 a 6. Los encabezados se utilizan para definir la estructura de un documento y proporcionar una jerarquía visual de los títulos y subtítulos.',
  },
  {
    title: `&lt;p&gt;`,
    description:
      'Define un párrafo de texto. Se utiliza para agrupar un bloque de texto o contenido en un documento.',
  },
  {
    title: `&lt;img&gt;`,
    description:
      'Define una imagen en un documento. Puede contener una imagen, un logotipo o una ilustración.',
  },
];

// Objeto que lista las características de HTML 5 a renderizar en la página
const HTML_CHARACTERISTICS = [
  {
    title: 'Semántica',
    description:
      'HTML5 introduce nuevos elementos semánticos que permiten a los desarrolladores web crear páginas más estructuradas y significativas. Estos elementos incluyen &lt;header&gt;, &ltnav&gt;, &ltmain&gt;, &ltarticle&gt;, &ltsection&gt;, &ltaside&gt; y &ltfooter&gt;.',
  },
  {
    title: 'Multimedia',
    description:
      'HTML5 incluye nuevas capacidades para la reproducción de audio y video sin necesidad de complementos externos. Los elementos &ltaudio&gt y &ltvideo&gt permiten a los desarrolladores web integrar contenido multimedia directamente en sus páginas.',
  },
  {
    title: 'Gráficos',
    description:
      'HTML5 introduce capacidades de gráficos 2D y 3D a través de la API Canvas y WebGL. Estas tecnologías permiten a los desarrolladores web crear gráficos interactivos, juegos y visualizaciones de datos directamente en el navegador.',
  },
  {
    title: 'Interactividad',
    description:
      'HTML5 incluye nuevas API y elementos que permiten a los desarrolladores web crear experiencias interactivas y dinámicas. Estas características incluyen elementos de formulario mejorados, soporte para arrastrar y soltar, geolocalización, notificaciones push y mucho más.',
  },
  {
    title: 'Accesibilidad',
    description:
      'HTML5 se centra en mejorar la accesibilidad web al introducir nuevas características y elementos que facilitan la creación de sitios web accesibles para todos los usuarios. Estas características incluyen atributos ARIA, elementos de formulario mejorados y soporte para lectores de pantalla.',
  },
];

// Objeto que lista las referencias a renderizar en la página
const REFERENCES = [
  {
    title:
      'Idevik, X. (2024). ¿Qué es una etiqueta HTML y cuáles son las más importantes? Iebschool.com. https://www.iebschool.com/blog/que-es-etiqueta-html-analitica-usabilidad/',
    link: 'https://www.iebschool.com/blog/que-es-etiqueta-html-analitica-usabilidad',
  },
  {
    title: 'Casado Vara, R. C. (2019). Introducción a HTML.',
    link: 'https://gredos.usal.es/bitstream/handle/10366/139647/BISITE_CasadoVaraR_HTML.pdf?sequence=1',
  },
];

const $navLinks = document.querySelectorAll('header ul li a');

// Se agregan los tips al DOM
HTML_IMPORTANT_TAGS.forEach((tip) => {
  const article = document.createElement('article');
  article.innerHTML = `
        <h3 class="highlighter-color">${tip.title}</h3>
        <p>${tip.description}</p>
      `;
  document.querySelector('.tips-section > .tips-content').appendChild(article);
});

// Se agregan las características al DOM
HTML_CHARACTERISTICS.forEach((characteristic) => {
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
