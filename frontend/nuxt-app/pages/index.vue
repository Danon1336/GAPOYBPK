<script setup lang="ts">
</script>

<template>
  <div>
    <div class="container">
    <div class="left">
      <div class="logo">
        <img class="im" src="/img/logo.png" alt="Логотип" />
        <div class="logo-text">
          <h1>StudLink</h1>
          <p class="college">ГБПОУ БПК</p>
        </div>
      </div>

      <div class="content">
        <h1 class="title">Начни общение сейчас</h1>
        <h2 class="subtitle">
          Онлайн платформа для общения студентов Белорецкого Педагогического Колледжа
        </h2>
        <div class="buttons">
          <NuxtLink to="/register" class="btn">Войти в систему</NuxtLink>
          <NuxtLink to="/events" class="btn">Мероприятия</NuxtLink>
        </div>
          
      </div>
    </div>

    <div class="right">
      <img class="logotype" src="/img/logotype.png" alt="Логотип"/>
      <img class="books" src="/img/books.png" alt="Книги" />
    </div>
  </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Munson';
  src: url('/Webfonts/Munson_Roman.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Munson', Arial, sans-serif;
  text-decoration: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  padding: 40px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  max-width: 60%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.im {
  width: 60px;
  height: 60px;
}

.logo-text h1 {
  font-size: 28px;

}

.college {
  font-size: 14px;

}

.content {
  margin-top: 20px;
}

.title {
  font-size: 72pt;
  font-weight: bold;

}

.subtitle {
  font-size: 38pt;
  color: #555;
  margin: 20px 0;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.btn {
  text-decoration: none;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #555;
}

.right {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.books {
  width: 560px;
  height: auto;
}
.logotype {
  width: 46%;
  height: 28%;
}
.btn{
    font-size: 16pt;
    color: #ffffff;
    transition: 0.3s;
}

</style>
