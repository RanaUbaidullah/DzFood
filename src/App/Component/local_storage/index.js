export const setLocalStorage = (key, data) => {
    if (key && data) {
      localStorage.setItem(key, data);
    }
  };
  
  export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  export const userDzfoodLoginToken = getLocalStorage('userDzfoodLoginToken');
  