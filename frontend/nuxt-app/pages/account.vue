<template>
    <div class="account-page">
        <!-- Навигационная панель -->
        <nav class="navbar">
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
        <div class="menu">
            <div class="divider"></div>
            <nuxt-link to="/events" class="btn">Мероприятия</nuxt-link>
            <div class="divider"></div>
            <nuxt-link to="/clubs" class="btn">Клубы</nuxt-link>
            <div class="divider"></div>
            <nuxt-link to="/faq" class="btn">Помощь</nuxt-link>
        </div>
        <nuxt-link to="account" class="menu-item"><img src="public/img/student.png" alt="" /></nuxt-link>
        </nav>
        <div class="divider1"></div>

        <!-- Основной контент -->
        <div class="content">
        <h2>Ваш профиль</h2>
        <form class="profile-form" @submit.prevent="saveProfile">
            <div class="form-group">
            <label for="login">Логин:</label>
            <input type="text" id="login" v-model="profile.login" disabled />
            </div>

            <div class="form-group">
            <label for="role">Роль:</label>
            <input type="text" id="role" v-model="profile.role" disabled />
            </div>

            <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="profile.email" />
            </div>

            <div class="form-group">
            <label for="specialty">Специальность:</label>
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
    /* Основной стиль */
    .account-page {
    font-family: Arial, sans-serif;

    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .logo{
        display:flex;
        align-items: center;

    }
    .logo img{
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
    .logo h1 {
    font-size: 20px;
    color: #e91e63;
    }

    .menu {
    display: flex;
    align-items: center;
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
    width: 100%;
    max-width: 600px;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    }

    h2 {
    color: #e91e63;
    text-align: center;
    margin-bottom: 20px;
    }

    .profile-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    }

    /* Выпадающий список */
    .dropdown-btn {
    background-color: #e91e63;
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

    /* Кнопки */
    .save-btn {
    background-color: #e91e63;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    }

    .back-btn {
    background-color: #ffc1e3;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
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
</style>
