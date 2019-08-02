export const gymSearchName = (searchName) => {
    console.log("gymSearchName action sent");
    console.log(searchName);
    return {
        type: 'GYM_SEARCH_NAME',
        searchName: searchName
    };
};