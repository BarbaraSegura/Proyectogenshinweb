<template>
  <footer>
    <div class="footer-nav">
    </div>
    <div class="footer-info">
      <p>© 2023 | Todos los derechos reservados | </p>
      <p>Genshin Impact es una marca registrada de miHoYo Co., Ltd.</p>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
footer {
  /*position: fixed;*/
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 10rem; /* Ajusta la altura máxima según tus necesidades */
  background-color: #23272a;
  color: #fff;
  padding: 2rem 0;
  font-size: 1.2rem;
}
.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

main {
  margin-bottom: 10rem; /* La misma altura máxima del footer */
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
