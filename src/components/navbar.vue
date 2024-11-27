<template>
    <nav class="navbar navbar-expand-lg bg-primary-subtle" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand text-light">Angel</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-light">Sobre Mi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/proyectos" class="nav-link text-light">Proyectos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/habilidades" class="nav-link text-light">Habilidades</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/experiencia" class="nav-link text-light">Experiencia</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contacto" class="nav-link text-light">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>