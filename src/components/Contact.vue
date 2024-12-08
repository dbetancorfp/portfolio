<template>
    <section class="contact-section container">
      <h1 class="text-center">{{ $t('contactTitle') }}</h1>
  
      <form @submit.prevent="sendMessage" class="mt-4 ">
        <div class="mb-3">
          <label for="name" class="form-label">{{ $t('nameLabel') }}</label>
          <input type="text" id="name" v-model="name" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">{{ $t('emailLabel') }}</label>
          <input type="email" id="email" v-model="email" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">{{ $t('messageLabel') }}</label>
          <textarea id="message" v-model="message" class="form-control" rows="4" required></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">{{ $t('submitButton') }}</button>
      </form>
  
      <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { messagesCollection, addDoc } from "@/firebase"; 
  
  export default defineComponent({
    name: "Contact",
    data() {
      return {
        name: "",
        email: "",
        message: "",
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      async sendMessage() {
        try {
         
          await addDoc(messagesCollection, {
            name: this.name,
            email: this.email,
            message: this.message,
            timestamp: new Date(),
          });
          
          
          this.successMessage = this.$t("successMessage");
          this.errorMessage = "";
          
         
          this.name = "";
          this.email = "";
          this.message = "";
        } catch (error) {
          
          this.errorMessage = this.$t("errorMessage");
          this.successMessage = "";
          console.error("Error al enviar el mensaje: ", error);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .contact-section {
    margin-top: 100px;
  }
  
  h1 {
    color: #0d6efd;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  button {
    margin-top: 10px;
  }
  
  .alert {
    text-align: center;
  }
  .contact-section {
  margin-top: 100px;
}



    .form-input {
    font-size: 1.25rem;
    padding: 15px;
    height: 50px;
    }

    textarea.form-input {
    height: 200px;
    resize: vertical;
    }

    button {
    font-size: 1.25rem;
    padding: 10px 20px;
    }

    button:focus {
    outline: none;
    box-shadow: none;
    }
  </style>
  