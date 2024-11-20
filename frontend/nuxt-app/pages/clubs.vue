<template>
    <div class="club-page">
        <!-- Навигация -->
        <nav class="navbar">
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
        <div class="menu">
            <nuxt-link to="/" class="menu-item">Мероприятия</nuxt-link>
            <nuxt-link to="/students" class="menu-item">Студенты</nuxt-link>
            <nuxt-link to="/feedback" class="menu-item">Обратная связь</nuxt-link>
            <div class="profile-icon">
            <img src="/img/student.png" alt="Профиль" />
            </div>
        </div>
        </nav>

        <!-- Контент страницы -->
        <div class="club-content">
        <h2>КЛУБЫ КОЛЛЕДЖА</h2>
        <button class="category-btn">📂 Категории</button>
        <div class="clubs-list">
            <div class="club-card" v-for="club in clubs" :key="club.id">
            <div class="club-image">
                <img :src="club.image" alt="Изображение клуба" />
            </div>
            <div class="club-details">
                <h3>{{ club.name }}</h3>
                <p>{{ club.description }}</p>
                <button class="join-btn">Вступить!</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        clubs: [
            {
            id: 1,
            name: "Программирование",
            description: "Описание клуба",
            image: "/img/progr.png",
            },
            {
            id: 2,
            name: "Футбол",
            description: "Описание клуба",
            image: "/img/soccer.png",
            },
            {
            id: 3,
            name: "Волейбол",
            description: "Описание клуба",
            image: "/img/volleyball.png",
            },
        ],
        };
    },
    };
</script>

<style scoped>
    .club-page {
    font-family: Arial, sans-serif;
    background-color: #eaf3ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    }

    /* Навигационная панель */
    .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .club-image{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }
    .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    }

    .logo-img {
    width: 40px;
    height: 40px;
    }

    .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    }

    .menu-item {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    }

    .profile-icon img {
    width: 30px;
    height: 30px;
    }

    /* Контент */
    .club-content {
    padding: 20px;
    text-align: center;
    }

    .club-content h2 {
    font-size: 24px;
    margin-bottom: 20px;
    }

    .category-btn {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    }

    .category-btn:hover {
    background-color: #333;
    }

    /* Список клубов */
    .clubs-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
    }

    .club-card {
    display: flex;
    background-color: #f0f8ff;
    border: 1px solid #000;
    padding: 20px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .club-image img {
    width: 150px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
    }

    .club-details {
    flex: 1;
    text-align: left;
    margin-left: 20px;
    }

    .club-details h3 {
    font-size: 20px;
    margin-bottom: 10px;
    }

    .join-btn {
    background-color: #fff;
    border: 1px solid #000;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    }

    .join-btn:hover {
    background-color: #f0f0f0;
    }
</style>
