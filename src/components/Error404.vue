<template>
    <div class="body">
        <div class="container-error">
        <div class="illustration">🚧</div>
        <h1>404</h1>
        <h2>Oops, la página que buscas no se encuentra aquí.</h2>
        <p>Es posible que la dirección esté incorrecta o que la página haya sido eliminada.</p>
        <a href="/about">Volver al inicio</a>
    </div>
    </div>
</template>
<style>

.body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #1e293b, #334155);
            color: #ffffff;
            text-align: center;
        }
        .container-error {
            max-width: 600px;
        }
        .container-erro h1 {
            font-size: 6rem;
            margin: 0;
            color: #f87171;
        }
        .container-error h2 {
            font-size: 1.5rem;
            margin: 1rem 0;
            color: #94a3b8;
        }
        .container-error a {
            text-decoration: none;
            color: #38bdf8;
            font-weight: bold;
            border: 2px solid #38bdf8;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }
        .container-error a:hover {
            background-color: #38bdf8;
            color: #ffffff;
        }
        .illustration {
            font-size: 5rem;
            margin: 1rem 0;
        }

</style>