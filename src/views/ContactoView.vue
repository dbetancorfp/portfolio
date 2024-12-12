<template>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
          <div class="col-12">
            <label for="fullname" class="form-label">{{ $t('FULLNAME') }} <span class="text-danger">*</span></label>
            <input type="text" v-model="form.fullname" class="form-control" id="fullname" required>
          </div>
          <div class="col-12 col-md-6">
            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
            <input type="email" v-model="form.email" class="form-control" id="email" required>
          </div>
          <div class="col-12 col-md-6">
            <label for="phone" class="form-label">{{ $t('PHONE') }}</label>
            <input type="tel" v-model="form.phone" class="form-control" id="phone">
          </div>
          <div class="col-12">
            <label for="message" class="form-label">{{ $t('MESSAGE') }}<span class="text-danger">*</span></label>
            <textarea v-model="form.message" class="form-control" id="message" rows="3" required></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-primary btn-lg" type="submit">{{ $t('SUBMIT') }}</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase'; 
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const docRef = await addDoc(collection(db, "contacts"), this.form);
        console.log("Document written with ID: ", docRef.id);
        // Optionally reset the form
        this.form = { fullname: '', email: '', phone: '', message: '' };
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
};
</script>

<style scoped>
</style>