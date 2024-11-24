<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-6">
                <h2>{{ $t('home.greetings') }} <span id="initials">ISAÍAS TOLEDO POLEGRE</span></h2>
                <p>{{ $t('home.occupation') }}</p>
                <span>{{ $t('home.currentlyDoing') }}</span>
                <div class="col-2 d-flex gap-3 mt-2 justify-content-between">
                    <a class="text-decoration-none github" href="https://github.com/IsaiasTolP"><i class="bi bi-github icon"></i></a>
                    <a class="text-decoration-none linkedin" href="https://www.linkedin.com/in/isa%C3%ADas-t-70906030b/"><i class="bi bi-linkedin icon"></i></a>
                    <a class="text-decoration-none instagram" href="https://www.instagram.com/isaias_tdp/"><i class="bi bi-instagram icon"></i></a>
                </div>
            </div>
            <div class="col-4" id="pfp-container"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>

<style>
    .icon {
        font-size: 24px;
    }

    .github {
        color: black;
    }
    .linkedin {
        color: #0e76a8;
    }

    .instagram {
        color: #dd2a7b;
    }
    
    #pfp-container {
        border-radius: 50%;
        background-image: url(../assets/images/pfp.jpg);
        height: 300px;
        width: 300px;
        background-size: cover;
    }
</style>