<template>
    <div class="page-container">
        <!-- Навигационная панель -->
        <nav class="navbar">
            <div class="logo">
                <img class="logo-img" src="/img/logo.png" alt="Логотип" />
                <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
            </div>
            <div class="menu">
                <div class="search">
                    <img src="public/img/search.png" alt="">
                    <input class="menu-item" placeholder="Поиск мероприятий"></input>
                </div>
                <div class="divider"></div>
                <nuxt-link to="/" class="menu-item">Клубы</nuxt-link>
                <div class="divider"></div>
                <nuxt-link to="/" class="menu-item">Студенты</nuxt-link>
                <div class="divider"></div>
                <nuxt-link to="/" class="menu-item">Обратная связь</nuxt-link>
            </div>
            <img src="public/img/student.png" alt="">
        </nav>
        <div class="divider1"></div>
        <!-- Основная часть -->
        <div class="content">
        <div class="header">
            <div class="event">
                <img src="public/img/filter.png" alt="">
                <div class="filter">
                    <select v-model="role" name="" id="" placeholder="Категории">
                        <option value="Категории" selected disabled>Категории</option>
                        <option value="Applicant">Абитуриент</option>
                        <option value="Student">Студент</option>
                    </select>
                </div>
                <h1 class="title">Мероприятия</h1>
            </div>
            <button class="btn" @click="showAddEventForm = !showAddEventForm">
            Добавить мероприятие
            </button>
        </div>

        <!-- Форма добавления мероприятия -->
        <form
            v-if="showAddEventForm"
            class="add-event-form"
            @submit.prevent="addEvent"
        >
            <input
            type="text"
            v-model="newEvent.title"
            placeholder="Название мероприятия"
            required
            />
            <input
            type="date"
            v-model="newEvent.startDate"
            placeholder="Дата начала"
            required
            />
            <input
            type="date"
            v-model="newEvent.endDate"
            placeholder="Дата окончания"
            required
            />
            <textarea
            v-model="newEvent.description"
            placeholder="Описание"
            rows="3"
            required
            ></textarea>
            <input
            type="text"
            v-model="newEvent.location"
            placeholder="Место проведения"
            required
            />
            <input
            type="text"
            v-model="newEvent.organizer"
            placeholder="Организаторы"
            required
            />
            <button type="submit" class="btn">Сохранить</button>
        </form>

        <!-- Список мероприятий -->
        <div class="events">
            <div class="event-card" v-for="event in events" :key="event.id">
            <h2 class="event-title">{{ event.title }}</h2>
            <p class="event-date">
                {{ event.startDate }} - {{ event.endDate }}
            </p>
            <p class="event-description">{{ event.description }}</p>
            <p class="event-location">Место: {{ event.location }}</p>
            <p class="event-organizer">Организатор: {{ event.organizer }}</p>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
    export default {
    data() {
        return {
        showAddEventForm: false,
        events: [],
        newEvent: {
            title: "",
            startDate: "",
            endDate: "",
            description: "",
            location: "",
            organizer: "",
        },
        };
    },
    methods: {
        addEvent() {
        if (
            this.newEvent.title &&
            this.newEvent.startDate &&
            this.newEvent.endDate &&
            this.newEvent.description &&
            this.newEvent.location &&
            this.newEvent.organizer
        ) {
            const newEvent = {
            ...this.newEvent,
            id: Date.now(),
            };
            this.events.push(newEvent);
            this.newEvent = {
            title: "",
            startDate: "",
            endDate: "",
            description: "",
            location: "",
            organizer: "",
            };
            this.showAddEventForm = false;
        }
        },
    },
    };
</script>
<style scoped>
*{
    text-decoration: none;
    margin:0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
h1{
    color: black;
}
.page-container {
    padding: 0;
    margin: 0;
}

.navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 40px;
}
.navbar img{
    width: 80px;
    height: 80px;
}
.logo {
    display: flex;
    align-items: center;
}
.logo h1{
    font-size: 30pt;
}
.logo-img {
    width: 50px;
    height: 50px;
}

.menu {
    display: flex;
    align-items: center;
    gap: 20px;
}

.menu-item {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    font-size: 20pt;
}

.divider {
    height: 20px;
    width: 1px;
    background-color: black;
}
.divider1{
    width: 100%;
    height: 1px;
    background-color: black;
}
/* Основной контент */
.content {
    padding: 40px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 32px;
    color: #333;
}

.btn {
    background-color: #854980;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

/* Карточки мероприятий */
.events {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.event-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.event-date,
.event-description,
.event-location,
.event-organizer {
    font-size: 14px;
    color: #555;
}
.search{
    display: flex;
    align-items: center;
    background: #000;
    padding: 10px;
    border-radius: 20px;
}
.search img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.search input{
    background: none;
    border: none;
    outline: none;
    color: #ffffff;
    width: 100%;
}
.event{
    display: flex;
    align-items: center;
    gap: 20px;
}
.event img{
    width: 30px;
    height: 30px;
}
.filter{
    display: flex;
    align-items: center;
}
.filter select{
    background: #000;
    padding: 10px;
    color: white;
    width: 150px;
    border-radius: 18px ;
}
.add-event-form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    justify-content: center;
}
</style>
