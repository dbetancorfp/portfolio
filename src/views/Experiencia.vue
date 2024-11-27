<script lang="ts" setup>
import html2pdf from 'html2pdf.js';

function downloadPdf() {
    const content = document.getElementById('pdf-content'); // Selecciona el contenido que deseas exportar

    if (content) {
        const clonedContent = content.cloneNode(true) as HTMLElement;

        clonedContent.removeChild();

        const bootstrapStyle = document.createElement('style');
        bootstrapStyle.innerText = `
            @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        `;
        clonedContent.prepend(bootstrapStyle);

        const options = {
            margin: 1,
            filename: 'cv_angel_example.pdf',
            html2canvas: {
                scale: 2,
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait',
            },
        };

        html2pdf().set(options).from(clonedContent).save();
    } else {
        console.error('No se encontró el contenido para el PDF');
    }
}
</script>

<template>
    <div class="container mt-5" id="pdf-content">
        <h2 class="text-center">Experiencia</h2>
        <div class="mt-4">
            <ul class="list-group">
                <li class="list-group-item">
                    <h5>Desarrollador Frontend en Tech Solutions</h5>
                    <p><strong>Duración:</strong> Junio 2022 - Actualidad</p>
                    <p>
                        Desarrollo de interfaces web interactivas utilizando Vue.js, Vue Router y Pinia para la gestión del
                        estado.
                        Implementación de sistemas de diseño responsivo con Bootstrap y mejora del rendimiento en
                        producción.
                    </p>
                    <p><strong>Correo:</strong> ejemplo@correo.com</p>
                </li>

                <li class="list-group-item">
                    <h5>Desarrollador Full Stack Freelance</h5>
                    <p><strong>Duración:</strong> Enero 2021 - Mayo 2022</p>
                    <p>
                        Colaboré con startups y pequeñas empresas desarrollando aplicaciones web completas. Usé tecnologías
                        como Node.js, Vue.js, y bases de datos SQL/NoSQL.
                    </p>
                    <p><strong>Correo:</strong> ejemplo@correo.com</p>
                </li>

                <li class="list-group-item">
                    <h5>Prácticas en Desarrollo Web en Innovatech</h5>
                    <p><strong>Duración:</strong> Marzo 2020 - Diciembre 2020</p>
                    <p>
                        Creación de prototipos funcionales y mantenimiento de aplicaciones existentes. Aprendí buenas
                        prácticas de desarrollo y testing automatizado.
                    </p>
                    <p><strong>Correo:</strong> ejemplo@correo.com</p>
                </li>

                <li class="list-group-item">
                    <button class="btn btn-outline-success" @click="downloadPdf">Descargar PDF</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  