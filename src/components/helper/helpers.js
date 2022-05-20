export const isEmpty = (obj) => {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
};

export const money = (amount) => {
    return amount.toFixed(2);
};

export const fetchApi = async (url) => {
    const data = await fetch(url);
    const dataJson = await data.json();
  
    return dataJson;
};
