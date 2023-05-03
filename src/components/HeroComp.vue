<template>
    <div>
        <section class="main">
            <div class="video-container">
                <video class="video-slide" src="../assets/Genshin Impact - 4 Archon [ Live Wallpaper ].mp4" autoplay muted
                    loop></video>
            </div>
            <section class="hero">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">Genshin Impact Wiki</h1>
                    <p class="hero-subtitle">La web que reune toda la información disponible sobre los personajes,
                        habilidades,
                        localizaciones, misiones ¡y más! de Genshin Impact.</p>
                </div>
            </section>
        </section>    
    </div>
</template>

<style lang="scss" scoped>
/* Estilos para la sección hero */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    text-shadow: 0 0 10px rgba(114,71,21,0.68);
    font-family: Tahoma, Helvetica, Arial, sans-serif;
}

.hero-title {
    font-size: 72px;
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 28px;
    font-weight: 400;
    color: white;
    letter-spacing: 2px;
}

/* Estilos para la sección principal */
.main {
    position: relative;
    height: 88vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.video-slide {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
}

</style> 
