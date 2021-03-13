import React from "react";

const CV = () => {
    return (
        <div className="container">
            <div style={{lineHeight: "25px", fontSize:"20px"}}>Мои стек: JS (прошел тест на linkedIn, результат: TOP 5%), TypeScript, React, Redux, react-router-dom ( Route, Switch, Redirect ), react hooks ( useEffect, useState ), redux-thunk, 
            react-redux ( connect ), react hook form ( validation ), reselect, axios, HTML, CSS ( Grid, Flexbox )
            Я начинающий специалист в области разработки Frontend с использованием библиотеки React.<br></br>

            Закончил курс IT-KAMASUTRA React JS – Путь самурая 1.0. Разработал Frontend для приложения (SPA) с использованием API курсов. Архитектура приложения разработана мной 
            самостоятельно, отличается от архитектуры в курсе. Верстка выполнена самостоятельно с использование Grid и Flexbox</div><br></br>
            <a style={{lineHeight: "25px", fontSize:"20px"}} href="https://github.com/AlexMozyrskiy/socialReactApp" target="_blank">Ссылка на проект GIT</a><br></br>
            <a style={{lineHeight: "25px", fontSize:"20px"}} href="https://alexmozyrskiy.github.io/socialReactApp/" target="_blank">Ссылка на сайт с проектом</a>
            <div style={{lineHeight: "25px", fontSize:"20px"}}>Используйте Email: free@samuraijs.com Password: free для входа</div><br></br>

            <div style={{lineHeight: "25px", fontSize:"20px"}}>Чтобы оценить мой уровень Вы можете посмотреть мои домашние проекты и тестовые задания от различных компаний 
            (название таких заданий начинается с префикса _test_task)
            на GITHUB.
            </div><br></br>
            <div style={{lineHeight: "25px", fontSize:"20px"}}>
            В данные момент для меня первостепенно получение опыта в сильной компании профессионалов. Я уверен, что смогу принести Вам значительную пользу в 
            будущем и занять место среди профессионалов Вашей компании.
            </div><br></br>
            <a style={{lineHeight: "25px", fontSize:"20px"}} href="https://rostov.hh.ru/resume/5de4fa20ff08b4f21b0039ed1f67724763526b" target="_blank">Ссылка на hh.ru</a><br></br>
        </div>
    );
}

export default CV;