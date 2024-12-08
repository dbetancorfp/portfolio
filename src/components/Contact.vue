<template>
  <section
    id="contact"
    class="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white"
  >
    <div class="container text-center">
      <h2
        class="display-4 text-warning mb-4 animate__animated animate__fadeInDown"
      >
        {{ $t('contact.title') }}
      </h2>
      <form
        @submit.prevent="handleSubmit"
        class="bg-light p-4 rounded shadow-lg animate__animated animate__zoomIn"
      >
        <div class="mb-3">
          <label for="name" class="form-label">{{ $t('contact.name') }}</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="form-control"
            placeholder="Your name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">{{ $t('contact.email') }}</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="form-control"
            placeholder="Your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">{{ $t('contact.message') }}</label>
          <textarea
            id="message"
            v-model="form.message"
            class="form-control"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-warning w-100 animate__animated animate__pulse animate__infinite"
        >
          {{ $t('contact.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { db } from "../firebase"; // Asegúrate de que el archivo `firebase.ts` está configurado correctamente
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default defineComponent({
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const docRef = await addDoc(collection(db, "contacts"), {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          timestamp: serverTimestamp(),
        });
        alert(this.$t("contact.success") + ` ID: ${docRef.id}`);
        this.resetForm();
      } catch (error) {
        console.error("Error submitting contact form: ", error);
        alert(this.$t("contact.error"));
      }
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
});
</script>

<style scoped>
#contact {
  background-color: #333;
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: #ffc107;
}

form {
  max-width: 600px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-weight: 600;
  color: #333;
}

.form-control {
  border-radius: 5px;
  border: 1px solid #ced4da;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #ffc107;
  box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}

button {
  font-weight: 600;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #e0a800;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

textarea {
  resize: none;
}
</style>
