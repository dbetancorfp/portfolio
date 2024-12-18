<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h4>{{ $t("ContactForm") }}</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">{{ $t("name") }}</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">{{ $t("email") }}</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required />
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">{{ $t("Affair") }}</label>
            <input type="text" class="form-control" id="subject" v-model="form.subject" required />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">{{ $t("Message") }}</label>
            <textarea class="form-control" id="message" v-model="form.message" rows="5" required></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">{{ $t("SendMessage") }}</button>
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
import { db, collection, addDoc,setDoc,doc } from "../firebase.ts";

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
.card {
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.form-label {
  font-weight: bold;
}
.btn-primary {
  width: 100%;
}
.alert {
  font-weight: bold;
}
</style>
