<template>
  <v-app-bar app class="header" color="rgba(17, 17, 17, 0.85)" dark dense>
    <v-toolbar-title>
      <v-img src="/src/assets/descarga logo.png" alt="logo" height="64" class="header__logo"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <nav class="header__navbar">
      <a href="/" aria-current="page" class="header__navitem">Inicio</a>
      <a href="/game" class="header__navitem">Game</a>
      <a href="/regions" class="header__navitem">Explorar</a>
      <a href="/personajes" class="header__navitem nuxt-link-active" style="margin-left: auto;">Personajes</a>
    </nav>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header__navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding-right: 500px;
  position: relative;
}

.header__navitem {
  display: inline-block;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  line-height: 80px;
  border-bottom: 3px solid transparent;
}

.header {
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35);
}

.header__logo {
  /* Cambiar la posición de "absolute" a "relative" para que se ajuste al espacio del app bar */
  position: relative;
  top: 50%;
  /* Eliminar "left: 0" para que el logo no se posicione en la esquina superior izquierda */
}

</style>

