<template>
    <div class="club-page">
        <nav class="navbar">
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
        <div class="menu">
        <NuxtLink to="/clubs" class="btn">Клубы</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/chat" class="btn">Чаты</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/faq" class="btn">Обратная связь</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/events" class="btn">Мероприятия</NuxtLink>
        </div>
        <NuxtLink to="/account" class="btn">Профиль</NuxtLink>
        </nav>
        <div class="divider1"></div>
        <!-- Контент страницы -->
        <div class="club-content">
        <h2>КЛУБЫ КОЛЛЕДЖА</h2>
        <div class="clubs-list">
            <div class="club-card" v-for="club in clubs" :key="club.id">
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
            },
            {
            id: 2,
            name: "Футбол",
            description: "Описание клуба",
            },
            {
            id: 3,
            name: "Волейбол",
            description: "Описание клуба",
            },
        ],
        };
    },
    };
</script>

<style scoped>
    .club-page {
    font-family: Arial, sans-serif;
    background-color: #D0E1F9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
    .btn{
    padding: 10px 20px;
    
    }
@media (max-width: 414px) {
    .content {
        padding: 20px;
    }
    .club-details h3{
        font-size: 16px;
    }

    .navbar .logo h1 {
        font-size: 18px;
    }

    .menu {
        flex-wrap: wrap;
        gap: 10px;
    }

    .btn {
        font-size: 12px;
        padding: 8px 16px;
    }

    .add-event-form {
        width: 90%;
        margin: 0 auto;
        right: 0;
        padding: 15px;
    }

    .persistent-event {
        width: 100%;
        padding: 10px;
        margin: 10px auto;
    }

    .persistent-event p {
        font-size: 16px;
    }

    iframe {
        height: 200px;
    }

    .about {
        flex-direction: column;
        gap: 10px;
    }

    .filter select {
        width: 100px;
    }

    .event img {
        width: 24px;
        height: 24px;
    }

    .dropdown button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #71a3a1;
        color: white;
        font-size: 12px;
        line-height: 50px;
        text-align: center;
        border: none;
    }
    .navbar {
        flex-direction: column;
        gap: 10px;
    }
    .menu {
        flex-direction: column;
    }
    .btn {
        font-size: 14px;
    }
    .event-card {
        padding: 15px;
    }
    h1 {
        font-size: 18px;
    }
    p {
        font-size: 12px;
    }
    .divider{
        display: none;
    }
    .club-card{
        width: 200px;
    }
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .navbar .logo {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .navbar .menu {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .navbar .btn {
        width: 100%;
        text-align: left;
        padding: 10px;
    }

    .divider {
        display: none;
    }
}

</style>
