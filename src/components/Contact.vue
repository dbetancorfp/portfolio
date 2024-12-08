<template>
  <div class="contact-container">
    <h1>{{ $t("navbar.contact") }}</h1>
    <form @submit.prevent="saveContactMessage">
      <div class="form-group">
        <label for="name">{{ $t("contact.name.label") }}</label>
        <input v-model="name" id="name" type="text" required />
      </div>
      <div class="form-group">
        <label for="email">{{ $t("contact.email.label") }}</label>
        <input v-model="email" id="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="message">{{ $t("contact.message.label") }}</label>
        <textarea v-model="message" id="message" required></textarea>
      </div>
      <button type="submit">{{ $t("contact.send.button") }}</button>
    </form>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default defineComponent({
  name: "Contact",
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");

    const saveContactMessage = async () => {
      try {
        await addDoc(collection(db, "messages"), {
          name: name.value,
          email: email.value,
          message: message.value,
          timestamp: new Date(),
        });

        name.value = "";
        email.value = "";
        message.value = "";
        alert("Message sent successfully!");
      } catch (error) {
        console.error("Error sending message:", error);
        alert("There was an error sending your message. Please try again.");
      }
    };

    return {
      name,
      email,
      message,
      saveContactMessage,
    };
  },
});
</script>


<style scoped>
.contact-container {
  width: 600px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffffff, #e9ecef);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: none;
  transition: transform 0.3s ease;
}

.contact-container h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #343a40;
  font-weight: 700;
}

.contact-container form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-container .form-group {
  display: flex;
  flex-direction: column;
}

.contact-container label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #495057;
}

.contact-container input,
.contact-container textarea {
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-container input:focus,
.contact-container textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.contact-container button {
  padding: 12px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact-container button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.contact-container button:active {
  transform: translateY(0);
}

</style>

