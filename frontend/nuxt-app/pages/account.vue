<template>
    <div class="account-page">
        <!-- Навигационная панель -->
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
        </div>
        <nuxt-link to="account" class="menu-item"><img src="public/img/student.png" alt="" /></nuxt-link>
        </nav>
        <div class="divider1"></div>

        <!-- Основной контент -->
        <div class="content">
        <h2>Ваш профиль</h2>
        <form class="profile-form" @submit.prevent="saveProfile">
            <div class="formUP">
                <div class="form-group">
                <input type="text" id="login" v-model="profile.login" disabled />
                </div>

                <div class="form-group">
                <input type="text" id="role" v-model="profile.role" disabled />
                </div>
            </div>
                

            <div class="form-group">
                <input type="email" id="email" v-model="profile.email" />
            </div>

            <div class="form-group">
            <input type="text" id="specialty" v-model="profile.specialty" disabled />
            </div>

            <!-- Выпадающий список -->
            <div class="form-group">
            <label for="interests">Интересы:</label>
            <div class="dropdown">
                <button type="button" class="dropdown-btn" @click="toggleDropdown">
                Выберите интересы
                </button>
                <ul v-show="dropdownOpen" class="dropdown-list">
                <li v-for="interest in availableInterests" :key="interest">
                    <label>
                    <input type="checkbox" :value="interest" v-model="profile.interests" />
                    {{ interest }}
                    </label>
                </li>
                </ul>
            </div>
            </div>

            <button type="submit" class="save-btn">Сохранить</button>
            <button type="button" class="back-btn" @click="goToMain">Назад</button>
        </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            login: "{login}",
            dropdownOpen: false,
            availableInterests: [
                "Волонтерство",
                "Участие в конкурсах",
                "Творчество",
                "Чтение книг",
                "Спорт",
                "Организация мероприятий",
                "Юмор",
                "Комп.игры",
                "Ведение блога",
                "Фильмы/Сериалы",
            ],
            profile: {
                login: "student123",
                role: "Студент",
                email: "student@example.com",
                specialty: "Программная инженерия",
                interests: [],
            },
            };
        },
        methods: {
            saveProfile() {
            alert("Профиль сохранён!");
            },
            goToMain() {
            this.$router.push("/");
            },
            toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
            },
        },
        };
</script>

<style scoped>
    .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    }

    .profile-icon img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #e91e63;
    }

    /* Контент */
    .content {
    background: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    }

    h2 {
    color: #105d75;
    text-align: center;
    margin-bottom: 20px;
    }

    .profile-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    }

    /* Выпадающий список */
    .dropdown-btn {
    background-color: #105d75;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    }

    .dropdown-list {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 10px;
    padding: 10px;
    list-style: none;
    }

    .dropdown-list li {
    margin-bottom: 5px;
    }

    .dropdown-list li label {
    display: flex;
    align-items: center;
    gap: 10px;
    }
    /* Адаптивность */
    @media (max-width: 768px) {
    .content {
        width: 90%;
    }

    .menu {
        flex-wrap: wrap;
    }
    }
    .btn{
    padding: 10px 20px;
    }
    .formUP{
        display: flex;
        gap: 10%;
        justify-content: center;
    }
    .form-group input{
        width: 100%;
        padding: 10px;
        border-radius: 8px;
    }
    #email{
        width: 100%;
        padding: 10px;
        border-radius: 8px;
    }
    #specialty{
        width: 100%;
        padding: 10px;
        border-radius: 8px;
    }
</style>
