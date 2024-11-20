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
        </div>
        <div class="buttons">
          <NuxtLink to="/register" class="btn">Войти в систему</NuxtLink>
          <NuxtLink to="/events" class="btn">Мероприятия</NuxtLink>
        </div>
      </div>

      <div class="content">
        <h1 class="title">Начни общение сейчас</h1>
        <h2 class="subtitle">
          Онлайн платформа для общения студентов Белорецкого Педагогического Колледжа
        </h2>
        
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
  margin: 20px 0;
}

.right {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 12%
}

.books {
  width: 560px;
  height: auto;
}
.logotype {
  width: 80%;
  height: 80%;
}
.btn{
  padding: 10px 20px;
}

</style>
