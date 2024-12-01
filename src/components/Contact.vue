<script setup>
  import { useI18n } from "vue-i18n";
  import DBConnection from "../firebase.js";
  
  const { locale, t } = useI18n();
//   const dbconnection = DBConnection();

//   function sendMessage() {
//     const data = {
//         "author": document.getElementById("username").value,
//         "message": document.getElementById("message").value
//     };

//     dbconnection.addFile(data);
//   }
</script>

<template>
    <section id="contact">
        <h1>{{ $t("contact") }}</h1>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">{{ $t("contact-page.username-label") }}</label>
                <input type="text" class="form-control" id="username">
            </div>
            <div class="form-floating">
                <textarea class="form-control" id="message" style="height: 400px;"></textarea>
                <label for="message">{{ $t("contact-page.message-label") }}</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3" v-on:click="sendMessage()">{{ $t("contact-page.submit") }}</button>
        </form>
    </section>
</template>