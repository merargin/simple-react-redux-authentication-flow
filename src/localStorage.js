const TOKEN = 'token';

export const getToken = () => {
    try {
        const token = localStorage.getItem(TOKEN);
        return token === null ? null : JSON.parse(token);
    } catch(err){
        return null;
    }
};


export const setToken = (value) => {
    try {
        localStorage.setItem(TOKEN, JSON.stringify(value));
    } catch(err){
        console.log('Error while saving at localStorage ', err);
    }
};

export const removeToken = () => {
    try {
        localStorage.removeItem(TOKEN);
    } catch(err){
        console.log('Error while removing token in localStorage ', err);
    }
};
