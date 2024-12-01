<template>
    <footer>
        <div class="d-flex px-3 py-3 text-white justify-content-around">
            <div class="d-flex flex-column">
                <div class="row">
                    <p>Copyright (c) 2024 Isaías</p>
                </div>

            </div>
            <div class="d-flex flex-column">
                <h5>{{ $t('footer.categories.socials') }}:</h5>
                <a href="https://github.com/IsaiasTolP"><span>Github</span></a>
                <a href="https://www.linkedin.com/in/isa%C3%ADas-t-70906030b/"><span>Linkedin</span></a>
                <a href="https://www.instagram.com/isaias_tdp/"><span>Instagram</span></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>