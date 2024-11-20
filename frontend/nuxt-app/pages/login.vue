<script setup lang="ts">
    const login = ref("");
    const password = ref("");

    const handleLogin = async () => {
        var request = await $fetch("http://localhost:3000/api/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: {
            "login" : login.value,
            "password" : password.value,
        }
        }).catch(err => {

        })

        return navigateTo("/")
    }
</script>

<template>
    <div class="container">
        <!-- Верхняя панель -->
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
    
        <!-- Полоска -->
        <div class="divider"></div>
    
        <!-- Центр страницы -->
        <div class="content">
            <h2 class="title">Вход</h2>
            <form @submit.prevent = "handleLogin" class="form">
                <input v-model="login" type="text" placeholder="Логин" />
                <input v-model="password" type="password" placeholder="Пароль" />
                <button type="submit">Войти</button>
                <NuxtLink to="/register" class="btn">Нет Аккаунта</NuxtLink>
            </form>
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
    font-family: 'Munson';
    }
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.im {
    width: 60px;
    height: 60px;
}

h1 {
    font-size: 28px;
    color: #333;
}

.divider {
    width: 100%;
    height: 3px;
    background-color: #333;
    margin: 20px 0;
}
  
.content {
    text-align: center;
    margin-top: 20px;
    text-align: center;
    margin-top: 50px;
    padding: 20px;
    background-color: #f8f8f86c;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;
}
  
.title {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
}
  
.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
  
input {
    width: 300px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    font-size: 16px;
}
  
button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #555;
}
.btn{
    font-size: 16pt;
    color: #333;
    transition: 0.3s;
}
</style>
