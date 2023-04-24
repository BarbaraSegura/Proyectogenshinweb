<template>
    <div class="header" style="transform: translateX(0px);">
        <div id="frame" class="root root-es" style="">
            <div class="audio-controller" style="transform: translateX(0px);"><img src="/src/assets/descarga.png"
                    class="audio-controller--off"></div>
        </div>
        <div class="header__logo">
            <img src="/src/assets/descarga logo.png" alt="logo">
        </div>
        <div class="header__navwrap">
            <div class="header__navbar">
                <a href="/" aria-current="page" class="header__navitem">Inicio</a>
                <a href="/es/news" class="header__navitem">Noticias</a>
                <a href="/personajes" class="header__navitem">Personajes</a>
                <div class="header__navitem header__navitem__more">
                    <p>Recursos</p>
                    <ul class="header__navitem__sublist">
                        <li><a href="/es/game" class="header__navlink">Presentación del juego</a></li>
                        <li><a href="/es/map" class="header__navlink">Mundo</a></li>
                        <li><a href="/es/town" class="header__navlink">Explorar</a></li>
                        <li><a href="/es/manga" class="header__navlink">Manga</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
.header--scroll {
    background-color: rgba(17, 17, 17, 0.85);
}

.root .audio-controller--on,
.root .audio-controller--off {
    width: 30px;
    height: 30px;
    cursor: pointer
}

.root .audio-controller {
    position: fixed;
    top: 18px;
    left: 70px;
    z-index: 10000
}
.header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    min-width: 1280px;
    height: 66px;
    background-color: rgba(17, 17, 17, 0.85);
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35);
}
.header__logo {
    float: left ;
    width: 317px;
    height: 105px;
    margin-left: 60px;
}
.header__navwrap {
    display: inline-block;
    position: relative;
    margin-left: -34px;
}

.header__navbar {
    display: inline-block;
    list-style-type: none;
    padding-right: 10px;
    margin-left: 40px;
}

.header__navbar .header__navitem {
    font-size: 14px;
    margin: 0 15px !important;
}

.header__navitem {
    display: flex;
    align-items: center;
    position: relative;
    float: left;
    width: auto;
    height: 66px;
    margin: 0 20px !important;
    line-height: 66px;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ccc;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
}
.header__navitem__sublist {
    position: absolute;
    top: 66px;
    left: -20px;
    background: #272626;
    opacity: 0;
    transition: all 0.2s ease-in;
    border-radius: 1px;
    pointer-events: none;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
</style>
