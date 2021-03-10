import { setUserData } from "./actionCreators";
import authUserDataReducer from "./reducer";


let initialState = {
    id: null,
    login: "",
    email: "",
    isLoggedIn: false
};

const userAuthData = {
    userId: 123,
    userLogin: "SomeLogin",
    userEmail: "someEmail@email.com",
    isUserLoggedIn: true
}


/* Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по id */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = setUserData(userAuthData);

    // 2. action
    let newState = authUserDataReducer(initialState, action);

    // 3. expectation
    expect(newState.id).toBe(userAuthData.userId);
});
/* / Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по id */


/* Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по login */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = setUserData(userAuthData);

    // 2. action
    let newState = authUserDataReducer(initialState, action);

    // 3. expectation
    expect(newState.login).toBe(userAuthData.userLogin);
});
/* / Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по login */


/* Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по email */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = setUserData(userAuthData);

    // 2. action
    let newState = authUserDataReducer(initialState, action);

    // 3. expectation
    expect(newState.email).toBe(userAuthData.userEmail);
});
/* / Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по email */


/* Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по isLoggedIn */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = setUserData(userAuthData);

    // 2. action
    let newState = authUserDataReducer(initialState, action);

    // 3. expectation
    expect(newState.isLoggedIn).toBe(true);
});
/* / Тест при удачном логине перепишем стейт и внесем в него данные Юзера, в этом тесте проверим внеслись ли данные по isLoggedIn */