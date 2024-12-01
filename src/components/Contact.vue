<template>
    <h1>{{ t('contact_title') }}</h1>
    <div class="col-12 mb-3">{{ t('contact_description') }}</div>
    <div class="card col-12 mb-3">
      <p><label for="exampleFormControlInput1" class="form-label">{{ t('contact_name') }}</label>
      <input type="text" class="form-control" id="name" v-model="name">
      <label for="exampleFormControlTextarea1" class="form-label">{{ t('contact_msg') }}</label>
      <textarea class="form-control" id="msg" rows="15"  v-model="message"></textarea></p>
      
      <button class="btn btn-secondary" @click="send()">{{ t('contact_btn') }}</button>
  </div>
</template>
    
<script lang="ts">
    export default {
      name: 'Contact'
    }
</script>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { ref } from "vue";
    import { db } from "../firebase";
    import { collection, addDoc } from "firebase/firestore";
    const { t } = useI18n();
    const name = ref<string>("");
    const message = ref<string>("");
    const send = async () => {
      await addDoc(collection(db, 'msg'), {
        name: name.value,
        message: message.value
      });
      name.value = "";
      message.value = "";
      alert('Mensaje enviado')
    }
</script>

    