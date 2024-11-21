
<template>
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
    <main class="FAQ-main">
        <section class="FAQ-section">

            <article class="contacts">
                <div class="element-cont">
                    <img src="public/img/geo.png" style="width: 27px; height: 27px;">
                    <p class="name">Адрес</p>
                    <p class="info">г. Белорецк,<br>ул. Карла Маркса, д. 85</p>
                </div>
                <div class="element-cont">
                    <img src="public/img/phone.png" style="width: 27px; height: 27px;">
                    <p class="name">Телефон</p>
                    <p class="info">+7 (347) 923-1682<br>+7 (347) 923-1907</p>
                </div>
                <div class="element-cont">
                    <img src="public/img/email.png" style="width: 27px; height: 27px;">
                    <p class="name">Еmail</p>
                    <p class="info">bpk1932@mail.ru</p>
                </div>
            </article>

            <div class="line"></div>

            <article class="faq-form">
                <p class="name">Отправьте нам сообщения</p>
                <p class="info">Если y вас есть какие-то вопросы, тех.проблемы,<br>предложения по улучшению, жалобы на пользователей</p>
                
                <form class="formall">
                    <input type="text" name="#" placeholder="ваш email" class="insert">
                    <textarea type="text" name="#" placeholder="сообщение"></textarea>
                    <button class="btn" id="btn" >отправить</button>
                </form>
            </article>

        </section>
    </main>
</template>

<style>
    @font-face {
        font-family: 'Munson';
        src: url('/Webfonts/Munson_Roman.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    * {
    margin: 0;
    padding: 0;
    font-family: 'Munson';
    text-decoration: none;
    overflow: none;
    }
    body {
        background-color: #D0E1F9;
        
    }
    .FAQ-main {
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .FAQ-main .FAQ-section {
        width: 70%;
        height: 70%;
        border-radius: 20px;
        border: #000 solid 3px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 2.5%;
    }
    .FAQ-section .line {
        width: 3px;
        background-color: black;
        height: 70%;
        border-radius: 5rem;
    }

    .FAQ-section .contacts {
        width: 20%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10%
    }
    .element-cont {
        width: 50%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2%
    }
    .element-cont p {
        text-align: center;
    }
    .element-cont .name {
        font-size: 1.2rem;
        font-style: italic;
    }
    .element-cont .info {
        font-size: .8rem;
    }
    .FAQ-section .faq-form {
        width: 70%;
        height: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2%;
    }
    .faq-form p {
        text-align: left;
        font-size: 1.5rem;
        color: #000;
    }
    .faq-form .name {
        font-size: 2rem !important;
    }
    .faq-form .info {
        font-style: italic;
    }
    .faq-form form {
        width: 100%;
        height: 60%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        gap: 5%;
    }
    .faq-form form input {
        width: 50%;
        height: 10%;
        border-radius: 10px;
        border: 3px solid #000;
        background-color: #ffffff00;
        padding: 2px 5px;
    }
    .faq-form form textarea {
        height: 15%;
        max-width: 50%;
        min-height: 15%;
        max-height: 50%;
        border-radius: 10px;
        border: 3px solid #000;
        padding: 2px 5px;
        background-color: #ffffff00;
    }

    .faq-form form button {
        width: 30%;
        height: 15%;
        border-radius: 10px;
        border:  3px solid #000;
        background-color: #ffffff00;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        margin-top: 10px;
        transition: .5s ease-in-out;
    }
    .btn{
    padding: 10px 20px;
    }
    #btn{
        background-color: #000000;
        color: #ffffff;
        cursor: pointer;
    }
    #btn:hover{
        background-color: #D0E1F9;
        color: #000000;
    }
</style>