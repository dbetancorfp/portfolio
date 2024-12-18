<template>
  <div class="container mt-5">

    <div class="header text-center mb-5">
      <h1 class="display-4 font-weight-bold text-primary">David Luis Mora</h1>
      <h3 class="text-muted">{{ $t("qualification") }}</h3>
    </div>

    <div class="card">
      <div class="section-title"> {{ $t("contact") }}</div>
      <ul class="list-unstyled contact-info">
        <li><i class="bi bi-envelope icon"></i><strong>{{ $t("email") }}</strong> <a href="mailto:davidluismora@gmail.com">davidluismora@gmail.com</a></li>
      </ul>
    </div>

    <div class="card mt-4">
      <div class="section-title">{{ $t("Competencies") }}</div>
      <ul class="list-unstyled competence-info">
        <li><i class="bi bi-check-circle-fill icon"></i> {{ $t("Autodidact") }}</li>
        <li><i class="bi bi-check-circle-fill icon"></i> {{ $t("Problemsolvingskills") }}</li>
        <li><i class="bi bi-check-circle-fill icon"></i> {{ $t("Teamwork") }}</li>
        <li><i class="bi bi-check-circle-fill icon"></i> {{ $t("Adaptability") }}</li>
        <li><i class="bi bi-check-circle-fill icon"></i> {{ $t("Objetives") }}</li>
      </ul>
    </div>

    <div class="card mt-4">
      <div class="section-title">{{ $t("Training") }}</div>
      <p><strong>{{ $t("CFGS") }}</strong></p>
      <p>{{ $t("IES") }}</p>
    </div>

    <div class="card mt-4">
      <div class="section-title">{{ $t("skills") }}</div>
      <ul class="list-unstyled skills-info">
        <li><i class="bi bi-code-slash icon"></i> C#</li>
        <li><i class="bi bi-code-slash icon"></i> PHP</li>
        <li><i class="bi bi-code-slash icon"></i> Python</li>
        <li><i class="bi bi-code-slash icon"></i> Kotlin</li>
        <li><i class="bi bi-code-slash icon"></i> HTML5 & CSS3</li>
        <li><i class="bi bi-database-fill icon"></i> MySQL</li>
        <li><i class="bi bi-database-fill icon"></i> PostgreSQL</li>
      </ul>
    </div>

    <div class="card mt-4">
      <div class="section-title">{{ $t("Languages") }}</div>
      <ul class="list-unstyled languages-info">
        <li><i class="bi bi-flag-fill icon"></i> {{ $t("Castilian") }}</li>
      </ul>
    </div>

    <div class="text-center mt-5">
      <button class="btn btn-primary" @click="downloadPDF">{{ $t("CV") }}   </button>
    </div>

    <div class="footer text-center mt-5">
      <p>{{ $t("up") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumComponent",
  methods: {
    downloadPDF() {
      const link = document.createElement("a");
      link.href = "/pdf/CV.pdf";
      link.download = "CV-.pdf";  
      link.click();  
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fb;
  color: #333;
}
.container {
  max-width: 900px;
  margin-top: 50px;
}
.header {
  margin-bottom: 30px;
}
.header h1 {
  font-size: 2.5rem;
  color: #007bff;
}
.header h3 {
  font-size: 1.2rem;
  color: #6c757d;
}
.section-title {
  color: #000000;
  font-weight: bold;
  margin-bottom: 10px;
}
.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.contact-info li,
.competence-info li,
.skills-info li,
.languages-info li {
  margin-bottom: 10px;
}
.contact-info a {
  color: #007bff;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}
.icon {
  margin-right: 10px;
  color: #007bff;
}
.competence-info li, 
.skills-info li {
  display: flex;
  align-items: center;
}
.competence-info i, 
.skills-info i {
  margin-right: 10px;
}
.footer {
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
