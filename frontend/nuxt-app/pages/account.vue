<template>
    <div class="account-page">
        <!-- Навигационная панель -->
        <nav class="navbar">
        <div class="logo">
            <img class="logo-img" src="/img/logo.png" alt="Логотип" />
            <h1>StudLink</h1>
        </div>
        <div class="menu">
            <span class="menu-item">{{ login }}</span>
            <button class="logout-btn">ВЫХОД</button>
        </div>
        </nav>

        <!-- Основной контент -->
        <div class="content">
        <h2>Сведения об учетной записи</h2>
        <form class="profile-form" @submit.prevent="saveProfile">
            <div class="form-group">
            <label for="login">login:</label>
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
            <label for="specialty">Курс/Специальность:</label>
            <input type="text" id="specialty" v-model="profile.specialty" />
            </div>

            <div class="form-group">
            <label for="interests">Интересы:</label>
            <input type="text" id="interests" v-model="profile.interests" />
            <button type="button" class="edit-btn">Изменить</button>
            </div>

            <div class="form-group avatar-group">
            <label for="avatar">img</label>
            <div class="avatar-preview">
                <img :src="profile.avatar || '/img/student.png'" alt="Аватар" />
                <button type="button" class="choose-btn">выбрать</button>
            </div> 
            </div>

            <button type="submit" class="save-btn">Сохранить</button>
            <button type="button" class="back-btn" @click="goToMain">Вернуться на главную</button>
        </form>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        login: "{login}",
        profile: {
            login: "student123",
            role: "Студент",
            email: "student@example.com",
            specialty: "Программная инженерия",
            interests: "Программирование, спорт",
            avatar: "",
        },
        };
    },
    methods: {
        saveProfile() {
        alert("Профиль сохранён!");
        // Логика сохранения данных
        },
        goToMain() {
        this.$router.push("/");
        },
    },
    };
</script>

<style scoped>
/* Общие стили */
.account-page {
    font-family: Arial, sans-serif;
    background-color: #eaf3ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
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
    font-size: 16px;
    font-weight: bold;
}

.logout-btn {
    background-color: transparent;
    border: none;
    color: #007bff;
    font-size: 14px;
    cursor: pointer;
    }

    /* Основной контент */
    .content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.profile-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.form-group label {
    flex: 0 0 150px;
    font-size: 14px;
}

.form-group input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.avatar-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.avatar-preview {
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar-preview img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
}

.choose-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.save-btn,
.back-btn {
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.save-btn {
    background-color: #007bff;
    color: white;
}

.back-btn {
    background-color: #ccc;
    color: #333;
}
</style>
