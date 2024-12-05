<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-between mb-3 mt-3">
                    <h1>Experience</h1>
                    <button class="btn btn-outline-dark pt-0 pb-0" @click="downloadPDF">
                        Descargar en PDF <i class="fa-solid fa-file-arrow-down ms-1"></i>
                    </button>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">AvanTIC</h5>
                        <p class="card-text">Practicas de tres meses de duración en la empresa de Santa Cruz de Tenerife
                            AvanTIC, realicé:</p>
                        <ul>
                            <li>Desarrollo en Java - Spring de Backend</li>
                            <li>Desarrollo en JS y JSP de Frontend</li>
                            <li>Gestion de Base de datos de Oracle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import html2pdf from 'html2pdf.js';

const downloadPDF = () => {
    const element = document.querySelector(".card");
    const options = {
        margin: 10,
        filename: "AvanTIC_Practicas.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Genera y descarga el PDF
    html2pdf().set(options).from(element).save();
};
</script>