//storage/auth
const key = "chave_secreta_do_jwt";

export function setToken(value) {
  return localStorage.setItem(key, value);
}

export function getToken() {
  return localStorage.getItem(key);
}

export function delToken() {
  return localStorage.removeItem(key);
}
