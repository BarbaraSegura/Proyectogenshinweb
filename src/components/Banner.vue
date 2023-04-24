<template>
    <div class="wrapper">
        <div class="container">
            <div class="main-text">
                <h1>Lanzamiento mundial <br> en múltiples plataformas</h1>
                <h3>28 de septiembre de 2020 (10:00) (GTM +8)</h3>
            </div>
        </div>
        <div class="spacer"></div> <!-- Agregar un espacio vacío -->
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    background: url(../assets/1105631.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.container {
    padding-top: 600px; /* Ajustar la propiedad para evitar que se superponga con el footer */
    padding-left: 530px;
}

.container .main-text{
    position: absolute;
    z-index: 2;
    margin-bottom: 50px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
}

.container .main-text h1 {
    font-weight: bold;
    line-height: 1.5;
}

.spacer {
    height: 100px; /* Agregar un espacio vacío con altura igual a la propiedad ajustada en .container */
}
</style>
