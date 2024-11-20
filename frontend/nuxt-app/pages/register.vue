<script setup lang="ts">
    const login = ref("");
    const email =  ref("");
    const password = ref("");
    const role = ref("");

    const handleRegister = async () => {
        var request = await $fetch("http://localhost:3000/api/user/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: {
            "login" : login.value,
            "email" : email.value,
            "password" : password.value,
            "role" : role.value
        }
        })

        if (request.status != 404) {
        return navigateTo("/")
        }
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
            <h2 class="title">Регистрация</h2>
            <form @submit.prevent = "handleRegister" class="form">
                <input v-model="login" type="text" placeholder="Имя пользователя" />
                <input v-model="email" type="email" placeholder="Email" />
                <input v-model="password" type="password" placeholder="Пароль" />
                <select v-model="role" name="" id="">
                    <option value="Applicant">Абитуриент</option>
                    <option value="Student">Студент</option>
                </select>
                <button type="submit">Зарегистрироваться</button>
                <NuxtLink to="/login" class="btn">Уже есть аккаунт?</NuxtLink>
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
    text-decoration: none;
    }
select{
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 16px;
    width: 300px;
    height: 40px;
    transition: .5s linear;
}
/* Общие стили */
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

/* Полоска */
.divider {
    width: 100%;
    height: 3px;
    background-color: #333;
    margin: 20px 0;
}

/* Центр страницы */
.content {
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
form select{
    width: 100%;
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
