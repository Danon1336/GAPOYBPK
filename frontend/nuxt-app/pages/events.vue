<template>
    <div class="page-container">
        <br>
        <!-- Навигационная панель -->
        <nav class="navbar">
        <div class="logo">
            <NuxtLink to="/"><img class="logo-img" src="/img/logo.png" alt="Логотип" /></NuxtLink>
            <NuxtLink to="/"><h1>StudLink</h1></NuxtLink>
        </div>
        <div class="menu">
        <NuxtLink to="/clubs" class="btn" style="padding: 10px 20px;">Клубы</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/chat" class="btn" style="padding: 10px 20px;">Чаты</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/faq" class="btn" style="padding: 10px 20px;">Обратная связь</NuxtLink>
        <div class="divider"></div>
        <NuxtLink to="/events" class="btn" style="padding: 10px 20px;">Мероприятия</NuxtLink>
        </div>
        <NuxtLink to="/account" class="btn" style="padding: 10px 20px;">Профиль</NuxtLink>
        </nav>
        <div class="divider1"></div>

        <!-- Основная часть -->
        <div class="content">
        <div class="header">
            <div class="event">
                <h1 class="title" >Мероприятия</h1>
            </div>
            <div class="dropdown">
                <button class="btn" @click="showAddEventForm = !showAddEventForm" style="padding: 10px 20px;">
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
            <h2 class="event-date">Дата: 19.10.24 - 21.10.24</h2>
            <div class="divider1"></div>
            <p class="event-description">
            <h2>Описание</h2><br>
            19 ноября в Республике Башкортостан на базе Белорецкого педагогического колледжа стартовал региональный этап
            Всероссийского конкурса «Моя профессия – ИТ» - категория Б (студенты)!
            </p>
            <div class="divider1"></div>
            <div class="about">
                <p class="event-location">Место: <b>Белорецк</b></p>
                <p class="event-organizer">Организатор: <b>БПК</b></p>
            </div>
                
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
.persistent-event h2{
    text-align: center;

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

.title {
    font-size: 32px;
    color: #333;
}

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
    text-align: center;
    }

.persistent-event .event-date,
.persistent-event .event-description,
.persistent-event .event-location,
.persistent-event .event-organizer {
    font-size: 14pt;
    color: #555;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 18px;
    }
.persistent-event img{
    width: 100%;
    margin-right: 10px;
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

.persistent-event p{
    font-size: 24pt;
}
.about{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 5%;
}
iframe{
    border-radius: 18px;
}
.divider1{
    margin-top: 12px;
}
.event{
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
}
/* Плавающая кнопка добавления мероприятия */
.add-event-btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #71a3a1;
    color: white;
    font-size: 32px;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s;
}

.add-event-btn:hover {
    background-color: #5a8f8c;
}

/* Остальной стиль */
.add-event-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    position: absolute;
    margin-top: 2%;
    justify-content: center;
    right: 2%;
    background: #71a3a1;
    padding: 10px 20px;
    border-radius: 18px;
}

.add-event-form textarea,
.add-event-form input {
    border-radius: 18px;
    padding: 10px 20px;
    outline: none;
    border: 1px solid black;
}

.add-event-form button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
}

.add-event-form button:hover {
    background-color: #555;
}
@media (max-width: 414px) {
    .content {
        padding: 20px;
    }

    .events {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .event-card {
        padding: 15px;
    }

    .event-title {
        font-size: 18px;
    }

    .event-date,
    .event-description,
    .event-location,
    .event-organizer {
        font-size: 12px;
    }

    .navbar {
        flex-wrap: wrap;
        justify-content: space-between;
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
}

</style>
