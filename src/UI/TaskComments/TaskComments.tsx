import React from "react";

const TaskComments = () => {
    return (
        <div className="container">
            <div style={{lineHeight: "25px", fontSize:"20px"}}>Здравствуйте. Выполнено тестовое задание: Необходимо разработать javascript-компонент для построения таблицы с дополнительными возможностями для пользователя.

                Функционал: Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу, необходимо предоставить пользовательскую навигацию для перехода по страницам.
                Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию.
                Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется на каждое изменение значения поля.
            </div><br></br><br></br>
            <div style={{lineHeight: "30px", fontSize:"30px"}}>Я хочу поблагодарить компанию "Crazy Panda" за возможность поработать над этим заданием, оно захватило меня полностью на 3 дня, 
                я получил огромное удовольсвия решая задачи. Большое Вам спасибо=)
            </div>
        </div>
    );
}

export default TaskComments;