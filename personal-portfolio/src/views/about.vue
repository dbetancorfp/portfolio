<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-4 d-flex align-items-center">
                <img id="pfp" class="border" src="../assets/images/pfp.jpg" alt="Profile Picture">
            </div>
            <div class="col-8">
                <h2>ABOUT</h2>
                <hr>
                <h2 class="mb-3" id="introduction">{{ $t('aboutme.introduction') }}</h2>
                <h4>{{ $t('aboutme.objectives.title') }}</h4>
                <hr class="border border-black opacity-75">
                <p v-html="$t('aboutme.objectives.text')"></p>
                <h4>{{ $t('aboutme.mind.title') }}</h4>
                <hr class="border border-black opacity-75">
                <p>{{ $t('aboutme.mind.text') }}</p>
                <h4>{{ $t('aboutme.knowledge.title') }}</h4>
                <hr class="border border-black opacity-75">
                <p>{{ $t('aboutme.knowledge.text') }}</p>
            </div>
        </div>
    </div>
    
    
    <p></p>
</template>

<script>
    export default {
        name: 'About',
    };
</script>

<style>
    #pfp {
        width: 100%;
        border-radius: 1em;
    }
    #introduction {
        text-align: justify;
    }
</style>