<template>
    <div class="admin-panel">
      <div class="columns">
        <h1>Админ панель</h1><!-- Поставить по центру сверху и отцентровать -->
        <!-- Колонка для добавления клубов -->
        <div class="column">
          <h2>Управление клубами</h2>
          <form @submit.prevent="addClub">
            <div>
              <label for="clubName">Название клуба:</label>
              <input
                type="text"
                id="clubName"
                v-model="newClub.name"
                placeholder="Введите название клуба"
                required
              />
            </div>
            <button type="submit">Добавить клуб</button>
          </form>
  
          <h3>Список клубов</h3>
          <ul>
            <li v-for="club in clubs" :key="club.id">
              <span>{{ club.name }}</span>
              <button @click="deleteClub(club.id)">Удалить</button>
            </li>
          </ul>
        </div>
  
        <!-- Колонка для добавления ивентов -->
        <div class="column">
          <h2>Управление ивентами</h2>
          <form @submit.prevent="addEvent">
            <div>
              <label for="eventName">Название ивента:</label>
              <input
                type="text"
                id="eventName"
                v-model="newEvent.name"
                placeholder="Введите название ивента"
                required
              />
            </div>
            <div>
              <label for="eventDate">Дата ивента:</label>
              <input
                type="date"
                id="eventDate"
                v-model="newEvent.date"
                required
              />
            </div>
            <div>
              <label for="eventClub">Клуб:</label>
              <select id="eventClub" v-model="newEvent.clubId" required>
                <option v-for="club in clubs" :key="club.id" :value="club.id">
                  {{ club.name }}
                </option>
              </select>
            </div>
            <button type="submit">Добавить ивент</button>
          </form>
  
          <h3>Список ивентов</h3>
          <ul>
            <li v-for="event in events" :key="event.id">
              <span>
                {{ event.name }} — {{ event.date }} ({{ getClubName(event.clubId) }})
              </span>
              <button @click="deleteEvent(event.id)">Удалить</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clubs: [], // Список клубов
        events: [], // Список ивентов
        newClub: {
          name: "",
        },
        newEvent: {
          name: "",
          date: "",
          clubId: null,
        },
      };
    },
    methods: {
      // Получение списка клубов и ивентов
      fetchData() {
        // Пример данных
        this.clubs = [
          { id: 1, name: "Клуб 1" },
          { id: 2, name: "Клуб 2" },
        ];
        this.events = [
          { id: 1, name: "Ивент 1", date: "2024-11-25", clubId: 1 },
        ];
      },
      // Добавление клуба
      addClub() {
        if (!this.newClub.name.trim()) return;
  
        const newId = this.clubs.length
          ? Math.max(...this.clubs.map((club) => club.id)) + 1
          : 1;
  
        const newClub = { id: newId, name: this.newClub.name };
        this.clubs.push(newClub);
        this.newClub.name = "";
      },
      // Удаление клуба
      deleteClub(id) {
        this.clubs = this.clubs.filter((club) => club.id !== id);
        // Удаляем все ивенты, связанные с клубом
        this.events = this.events.filter((event) => event.clubId !== id);
      },
      // Добавление ивента
      addEvent() {
        if (!this.newEvent.name.trim() || !this.newEvent.date || !this.newEvent.clubId)
          return;
  
        const newId = this.events.length
          ? Math.max(...this.events.map((event) => event.id)) + 1
          : 1;
  
        const newEvent = {
          id: newId,
          name: this.newEvent.name,
          date: this.newEvent.date,
          clubId: this.newEvent.clubId,
        };
        this.events.push(newEvent);
  
        this.newEvent = { name: "", date: "", clubId: null };
      },
      // Удаление ивента
      deleteEvent(id) {
        this.events = this.events.filter((event) => event.id !== id);
      },
      // Получение имени клуба по его ID
      getClubName(id) {
        const club = this.clubs.find((club) => club.id === id);
        return club ? club.name : "Неизвестно";
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.admin-panel {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
.columns {
  display: flex;
  gap: 20px;
}
.column {
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
form {
  margin-bottom: 20px;
}
form div {
  margin-bottom: 10px;
}
input,
select {
  padding: 5px;
  font-size: 14px;
  width: 100%;
}
button {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
body {
  background: linear-gradient(120deg, #ff7eb3, #ff758c);
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}
h1 {
  color: white;
  font-size: 3rem;
}
</style>