<template>
    <div class="page-container">
        <!-- Навигационная панель -->
        <nav class="navbar">
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
        <div class="menu">
            <div class="search">
                <img src="public/img/search.png" alt="" />
                <input class="menu-item" placeholder="Поиск мероприятий" />
            </div>
        <div class="divider"></div>
        <NuxtLink to="/clubs" class="btn">Клубы</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/chat" class="btn">Чаты</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/faq" class="btn">Обратная связь</NuxtLink>
        </div>
        <nuxt-link to="account" class="menu-item"><img src="public/img/student.png" alt="" /></nuxt-link>
        </nav>
        <div class="divider1"></div>

        <!-- Основная часть -->
        <div class="content">
        <div class="header">
            <div class="event">
                <h1 class="title">Мероприятия</h1>
            </div>
            <div class="dropdown">
                <button class="btn" @click="showAddEventForm = !showAddEventForm">
                Добавить мероприятие
                </button>
                    <form
                        v-if="showAddEventForm"
                        class="add-event-form"
                        @submit.prevent="addEvent">
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
            </div>
        </div>

        <!-- Постоянное мероприятие -->
        <div class="persistent-event">
            <h2 class="event-title">Хакатон</h2>
            <p class="event-date">19.10.24 - 21.10.24</p>
            <p class="event-description">
            19 ноября в Республике Башкортостан на базе Белорецкого педагогического колледжа стартовал региональный этап
            Всероссийского конкурса «Моя профессия – ИТ» - категория Б (студенты)!
            </p>
            <p class="event-location">Место: Белорецк</p>
            <p class="event-organizer">Организатор: БПК</p>
            <iframe src="https://vk.com/video_ext.php?oid=-153401417&id=456239519&hd=3" width="100%" height="400px" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
        </div>
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
    width: 300px;
    position: absolute;
    margin-top: 2%;
    justify-content: center;
    right: 2%;
}
.persistent-event {
    background-color: #f9f9f9;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-bottom: 30px;
    width:50%;
    height: fit-content;
    margin: 0 auto;
    margin-top: 3%;
    }

.persistent-event .event-title {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    }

.persistent-event .event-date,
.persistent-event .event-description,
.persistent-event .event-location,
.persistent-event .event-organizer {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 18px;
    }
.persistent-event img{
    width: 100%;
    margin-right: 10px;
}
.btn{
  padding: 10px 20px;
}
.add-event-form{
    background: #71a3a1;
    padding: 10px 20px;
    border-radius:18px;
}
.add-event-form textarea,
.add-event-form input
{
    border-radius: 18px;
    padding: 10px 20px;
    outline: none;
    border: 1px solid black;
}
</style>
