import { setCommentsIntoStateActionCreator } from "./actionCreators";
import commentsTableReducer from "./reducer";


let initialState = {
    comments: [
        {
            body: null,
            email: null,
            id: null,
            name: null,
            postId: null
        }
    ]
};

const responseFromSerrver = [
    {
        postId: 3,
        id: 15,
        name: "debitis magnam hic odit aut ullam nostrum tenetur",
        email: "Maynard.Hodkiewicz@roberta.com",
        body: "nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium deserunt molestias tempora quo quia"
    },
    {
        postId: 4,
        id: 16,
        name: "debitis magnam hic odit aut ",
        email: "Maynard.Hodkiewicz@roberta.ru",
        body: "nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium"
    }
]


/* Тест при удачном ответе от сервера длина записанного в стейт массива === длинне масива пришедшего с сервера */
it("Тест при удачном ответе от сервера длина записанного в стейт массива === длинне масива пришедшего с сервера", () => {
    // 1. test data
    let action = setCommentsIntoStateActionCreator(responseFromSerrver);

    // 2. action
    let newState = commentsTableReducer(initialState, action);

    // 3. expectation
    expect(newState.comments.length).toBe(responseFromSerrver.length);
});
/* / Тест при удачном ответе от сервера длина записанного в стейт массива === длинне масива пришедшего с сервера */

/* Тест при удачном ответе от сервера все свойства в объектах ответа от сревера равны свойствам в стейте, запись в стейт прошла успешно */
it("Тест при удачном ответе от сервера все свойства в объектах ответа от сревера равны свойствам в стейте, запись в стейт прошла успешно", () => {
    // 1. test data
    let action = setCommentsIntoStateActionCreator(responseFromSerrver);

    // 2. action
    let newState = commentsTableReducer(initialState, action);

    // 3. expectation
    expect(newState.comments[0].postId).toBe(responseFromSerrver[0].postId);
    expect(newState.comments[0].id).toBe(responseFromSerrver[0].id);
    expect(newState.comments[0].name).toBe(responseFromSerrver[0].name);
    expect(newState.comments[0].email).toBe(responseFromSerrver[0].email);
    expect(newState.comments[0].body).toBe(responseFromSerrver[0].body);
    
    expect(newState.comments[1].postId).toBe(responseFromSerrver[1].postId);
    expect(newState.comments[1].id).toBe(responseFromSerrver[1].id);
    expect(newState.comments[1].name).toBe(responseFromSerrver[1].name);
    expect(newState.comments[1].email).toBe(responseFromSerrver[1].email);
    expect(newState.comments[1].body).toBe(responseFromSerrver[1].body);
});
/* / Тест при удачном ответе от сервера все свойства в объектах ответа от сревера равны свойствам в стейте, запись в стейт прошла успешно */