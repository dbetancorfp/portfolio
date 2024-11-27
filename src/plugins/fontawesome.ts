import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Iconos sólidos
import { fab } from '@fortawesome/free-brands-svg-icons'; // Iconos de marcas

// Agrega los iconos que necesitas a la librería
library.add(fas, fab);

export default FontAwesomeIcon;
