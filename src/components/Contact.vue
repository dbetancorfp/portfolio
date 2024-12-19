<template>
  <div class="container mt-5">
    <div class="card shadow-lg rounded-lg">
      <div class="card-header bg-gradient text-white">
        <h4>{{ $t("ContactForm") }}</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="form-label">{{ $t("name") }}</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required />
          </div>

          <div class="mb-4">
            <label for="email" class="form-label">{{ $t("email") }}</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required />
          </div>

          <div class="mb-4">
            <label for="subject" class="form-label">{{ $t("Affair") }}</label>
            <input type="text" class="form-control" id="subject" v-model="form.subject" required />
          </div>

          <div class="mb-4">
            <label for="message" class="form-label">{{ $t("Message") }}</label>
            <textarea class="form-control" id="message" v-model="form.message" rows="5" required></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary w-100">{{ $t("SendMessage") }}</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="submitted" class="alert alert-success mt-4" role="alert">
      {{ $t("feedback") }}
    </div>
  </div>
</template>

<script>
import { db, collection, setDoc, doc } from "../firebase.js";

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
      };

      await setDoc(doc(db, "messages", `${this.form.email}`), data);
      console.log("Registro hecho");
      this.submitted = true;

      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
h4 {
  color: #007bff;
  font-weight: bolder;
}

.dev-icons {
  font-size: 2.5rem;
}

.dev-icons li {
  display: inline-block;
  margin: 15px;
}

.icon {
  width: 45px;
  height: 45px;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

.card {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  background: linear-gradient(135deg, #007bff, #00c6ff);
  padding: 1.5rem;
  border-radius: 15px 15px 0 0;
}

.card-body {
  padding: 2rem;
}

.form-label {
  font-weight: bold;
  color: #333;
}

.form-control {
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.1rem;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.alert {
  font-weight: bold;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
}

.text-center {
  text-align: center;
}
</style>
