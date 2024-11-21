<template>
    <div class="chat-page">
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
        <div class="divider"></div>
        <NuxtLink to="/events" class="btn">Мероприятия</NuxtLink>
        </div>
        <NuxtLink to="/account" class="btn">Профиль</NuxtLink>
        </nav>
        <div class="divider1" style="margin-bottom: 10px;"></div>
        <!-- Основной контент -->
        <div class="content">
        <!-- Левая панель: Список чатов -->
        <aside class="sidebar">
            <h2>Чаты клубов</h2>
            <div
                class="club-chat"
                v-for="club in clubs"
                :key="club.id"
                @click="selectChat('club', club)"
                :class="{ active: activeChat.id === club.id && activeChat.type === 'club' }"
            >
                {{ club.name }}
            </div>
            <hr />
            <h2>Личные чаты</h2>
            <div
                class="user-chat"
                v-for="user in users"
                :key="user.id"
                @click="selectChat('user', user)"
                :class="{ active: activeChat.id === user.id && activeChat.type === 'user' }"
            >
                {{ user.name }}
            </div>
        </aside>

        <!-- Правая панель: Окно чата -->
        <main class="chat-window">
            <header class="chat-header">
                <h2 v-if="activeChat.type === 'club'">{{ activeChat.name }}</h2>
                <h2 v-else>Чат с: {{ activeChat.name }}</h2>
            </header>

            <!-- Сообщения -->
            <div class="chat-messages">
                <div
                class="message"
                v-for="message in activeMessages"
                :key="message.id"
                >
                <p><strong>{{ message.sender }}:</strong></p>
                <div v-if="message.type === 'text'">{{ message.text }}</div>
                <div v-else-if="message.type === 'audio'" class="audio-container">
                    <audio controls :src="message.audioUrl"></audio>
                </div>
                </div>
            </div>

            <!-- Футер -->
            <footer class="chat-footer">
                <div class="input-container">
                <input
                    type="text"
                    placeholder="Написать сообщение..."
                    v-model="newMessage"
                />
                <!-- Кнопка микрофона -->
                <button
                    class="icon-btn mic-btn"
                    @mousedown="startRecording"
                    @mouseup="stopRecording"
                    @mouseleave="cancelRecording"
                >
                    <img src="/img/mic.png" alt="Mic" />
                </button>
                <!-- Кнопка отправки текста -->
                <button class="icon-btn send-btn" @click="sendTextMessage">
                    <img src="/img/send.png" alt="Send" />
                </button>
                </div>
            </footer>
        </main>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            // Список клубов и пользователей
            clubs: [
                { id: 1, name: "Программирование" },
                { id: 2, name: "Футбол" },
            ],
            users: [
                { id: 1, name: "Иван" },
                { id: 2, name: "Ольга" },
            ],
            // Активный чат
            activeChat: { id: null, type: null, name: "" },
            // Сообщения (для каждого чата свои)
            chats: {
                club: {
                1: [
                    { id: 1, sender: "Админ", type: "text", text: "Добро пожаловать в Клуб 1!" },
                ],
                2: [
                    { id: 2, sender: "Модератор", type: "text", text: "Привет из Клуба 2!" },
                ],
                },
                user: {
                1: [
                    { id: 3, sender: "Иван", type: "text", text: "Привет!" },
                ],
                2: [
                    { id: 4, sender: "Ольга", type: "text", text: "Здравствуйте!" },
                ],
                },
            },
            newMessage: "",
            mediaRecorder: null,
            audioChunks: [],
            isRecording: false,
            };
        },
        computed: {
            // Сообщения для текущего активного чата
            activeMessages() {
            if (this.activeChat.type && this.activeChat.id) {
                return this.chats[this.activeChat.type][this.activeChat.id] || [];
            }
            return [];
            },
        },
        methods: {
            // Выбор чата
            selectChat(type, chat) {
            this.activeChat = { id: chat.id, type, name: chat.name };
            },

            // Отправка текстового сообщения
            sendTextMessage() {
            if (this.newMessage.trim() && this.activeChat.id && this.activeChat.type) {
                this.chats[this.activeChat.type][this.activeChat.id].push({
                id: Date.now(),
                sender: "Вы",
                type: "text",
                text: this.newMessage,
                });
                this.newMessage = "";
            }
            },

            // Начало записи голосового сообщения
            startRecording() {
            if (this.isRecording) return;

            if (!navigator.mediaDevices || !window.MediaRecorder) {
                alert("Ваш браузер не поддерживает запись голоса.");
                return;
            }

            this.isRecording = true;
            this.audioChunks = [];

            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                    }
                };
                this.mediaRecorder.start();
                })
                .catch((error) => {
                console.error("Ошибка записи:", error);
                });
            },

            // Остановка записи
            stopRecording() {
            if (this.mediaRecorder && this.isRecording) {
                this.mediaRecorder.stop();
                this.isRecording = false;

                this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
                const audioUrl = URL.createObjectURL(audioBlob);

                // Добавляем аудиосообщение в чат
                this.chats[this.activeChat.type][this.activeChat.id].push({
                    id: Date.now(),
                    sender: "Вы",
                    type: "audio",
                    audioUrl: audioUrl,
                });
                };
            }
            },

            // Отмена записи
            cancelRecording() {
            if (this.isRecording) {
                this.mediaRecorder.stop();
                this.isRecording = false;
                this.audioChunks = [];
            }
            },
        },
        };


</script>

<style scoped>
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

    /* Основной контент */
    .content {
    display: flex;
    flex: 1;
    }

    /* Левая панель */
    .sidebar {
    width: 25%;
    background-color: #D0E1F9;
    padding: 20px;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    }

    .club-chat,
    .user-chat {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    }

    .club-chat.active,
    .user-chat.active {
    background-color: #d1e8ff;
    border-radius: 4px;
    padding: 5px;
    }

    .user-avatar {
    width: 30px;
    height: 30px;
    background-color: #647485;
    border-radius: 50%;
    margin-right: 10px;
    }

    /* Правая панель */
    .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    }

    .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    }

    .chat-messages {
    flex: 1;
    margin: 20px 0;
    overflow-y: auto;
    }

    .message {
    margin-bottom: 10px;
    font-size: 16px;
    }

    .chat-footer {
    display: flex;
    align-items: center;
    gap: 10px;
    }
    .chat-footer {
    display: flex;
    justify-content: center;
    padding: 10px;
    }

    .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 25px;
    overflow: hidden;
    padding: 5px 10px;
    }

    .input-container input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 10px;
    background-color: transparent;
    }

    .icon-btn {
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    }

    .icon-btn img {
    width: 20px;
    height: 20px;
    }

    .mic-btn img {
    filter: grayscale(0);
    }

    .send-btn img {
    filter: grayscale(0);
    }

    /* Hover effect for buttons */
    .icon-btn:hover img {
    filter: brightness(1.2);
    }
    .chat-page {
    font-family: Arial, sans-serif;
    background-color: #eaf3ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    }

    .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    }

    .chat-header {
    background-color: #607b97;
    color: white;
    padding: 10px;
    text-align: center;
    }

    .chat-messages {
    flex: 1;
    margin: 20px 0;
    overflow-y: auto;
    background-color: #f7faff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    }

    .message {
    margin-bottom: 10px;
    }

    .chat-footer {
    display: flex;
    gap: 10px;
    }

    .input-container {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px;
    }

    input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    }

    .icon-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    }

    .mic-btn img {
    width: 24px;
    height: 24px;
    }

    .send-btn img {
    width: 24px;
    height: 24px;
    }

    .mic-btn.recording img {
    animation: pulse 1s infinite;
    filter: brightness(1.5) saturate(2);
    }

    @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.9);
    }
    100% {
        transform: scale(1);
    }
    }
    .btn{
    padding: 10px 20px;
    }
    @media (max-width:768px){
        .sidebar {
            width: 100%;
            padding: 0;
        }
        .content {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            padding: 10px 20px
        }
    }
</style>
