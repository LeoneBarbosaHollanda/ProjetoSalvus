//api/auth
import API from ".";

export function login(loginParams) {
    console.log("veio até a apiauth", loginParams)
    return API("post", "http://localhost:4000/auth/login", loginParams, false)
        .then(response => {
            console.log("Response body:", response.data); // Exibe o corpo da resposta da API
            return response;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error; // Lança o erro para ser tratado pelo código que chamou essa função
        });

}
export function loginToken() {
    return API("post", "/auth/me");
}
export function logout() {
    return API("post", "/auth/logout");
}

const exportedObject = { login, loginToken, logout };

export default exportedObject;
