<template>
    <div>
      <h1>Download Example File</h1>
      <a :href="fileUrl" download class="btn btn-primary">
        Download PDF
      </a>
    </div>
  </template>
  
  <script setup>
  const fileUrl = '/Joseph Vanegas Caicedo curriculum.pdf'; // Path to your file in the public directory
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>