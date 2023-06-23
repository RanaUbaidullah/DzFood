export const setLocalStorage=(key,data)=>{
    if (key && data) {
        
        localStorage.setItem(key,data);
    }

}

export const getLocalStorage=(key)=>{
    if (key) {
        
        localStorage.getItem(key);
    }

}