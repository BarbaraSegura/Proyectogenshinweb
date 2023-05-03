<template>
  <footer class="footer">
    <div class="footer-nav">
    </div>
    <div class="footer-info">
      <p class="text-center">© 2023 | Todos los derechos reservados | </p>
      <p class="text-center">Genshin Impact es una marca registrada de miHoYo Co., Ltd.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #23272a;
  color: #fff;
  font-size: 1.2rem;
  z-index: 800;
}

.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}

.footer-info p:last-of-type {
  margin-top: 0.5rem;
}
</style>
