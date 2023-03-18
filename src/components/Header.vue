<template>
    <header class="top-nav">
        <div><img class="logo" src="/src/assets/[CITYPNG.COM]HD White Genshin Impact Game Logo PNG - 2000x1205.png"></div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
        </label>
        <nav class="menu">
            <RouterLink class="link" to="/">Inicio</RouterLink>
            <RouterLink class="link" to="/personajes">Personajes</RouterLink>
            <RouterLink class="link" to="/contenidos">Contenidos</RouterLink>
        </nav>
        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                <v-btn color="amber">
                    Descarga
                </v-btn>
            </div>
    </header>
</template>        

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
    font-family: "Raleway";
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    height: 100%;
}


.logo {
    height: 100px;
}

.top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    //background: linear-gradient(to left, #f46b45, #eea849);
    //background: #A87551 0.5%;
    background: rgba(168, 117, 81, 0.8);
    color: #FFF;
    height: 75px;
    padding: 1em;
}

.menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    list-style-type: none;
    margin: 0 10px;
    padding: 0;
    text-decoration: none;

}

#menu-toggle {
    display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 8px;
}

#menu-toggle:checked+.menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
}

#menu-toggle:checked+.menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked+.menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
}

@media (max-width: 500px) {
    .menu-button-container {
        display: flex;
        height: 100%;
        width: 30px;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>