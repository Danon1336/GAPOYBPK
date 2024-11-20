<template>
    <div class="admin-clubs">
      <h1>Админ панель</h1>
      <!-- Форма добавления клуба -->
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
  
      <h2>Список клубов</h2>
      <ul>
        <li v-for="club in clubs" :key="club.id">
          <span>{{ club.name }}</span>
          <button @click="deleteClub(club.id)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clubs: [], // Список клубов
        newClub: {
          name: "", // Данные нового клуба
        },
      };
    },
    methods: {
      // Получение списка клубов (можно заменить на запрос к API)
      fetchClubs() {
        // Пример данных
        this.clubs = [
          { id: 1, name: "Клуб 1" },
          { id: 2, name: "Клуб 2" },
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
  
        // Очистка поля ввода
        this.newClub.name = "";
      },
      // Удаление клуба
      deleteClub(id) {
        this.clubs = this.clubs.filter((club) => club.id !== id);
      },
    },
    mounted() {
      this.fetchClubs();
    },
  };
  </script>
  
  <style scoped>
  .admin-clubs {
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  form {
    margin-bottom: 20px;
  }
  form div {
    margin-bottom: 10px;
  }
  input {
    padding: 5px;
    font-size: 14px;
  }
  button {
    padding: 5px 10px;
    margin-left: 10px;
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
  </style>