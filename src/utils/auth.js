export const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
};

export const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
};

export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};