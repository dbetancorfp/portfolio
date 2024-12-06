<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const { t } = useI18n();
const email = ref("");
const message = ref("");
const errorMessage = ref("");

const sendMessage = async () => {
  errorMessage.value = "";

  try {
    await addDoc(collection(db, "messages"), {
      email: email.value,
      message: message.value,
      timestamp: new Date(),
    });
    email.value = "";
    message.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <header class="bg-success text-white text-center py-4">
    <h1 class="mb-0">{{ t("contact") }}</h1>
  </header>

  <main>
    <form class="p-4" @submit.prevent="sendMessage">
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

      <div class="mb-3">
        <label for="email" class="form-label">{{ t("contact-page.email") }}:</label>
        <input v-model="email" type="email" class="form-control" id="email" required />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">{{ t("contact-page.message") }}:</label>
        <textarea v-model="message" class="form-control" id="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn btn-success">
        {{ t("contact-page.submit") }}
      </button>
    </form>
  </main>
</template>
