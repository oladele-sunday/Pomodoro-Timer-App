export const logout = () => {
    localStorage.removeItem("isLoggedIn");
};

export const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
};