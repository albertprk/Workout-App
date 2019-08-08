export const manageSortingTagsReducer = (tagsList = [], action) => {
    switch (action.type) {
        case "ADD_SORTING_TAG":
            if (tagsList.indexOf(action.sortingTag) === -1) {
                return [...tagsList, action.sortingTag];
            }
            return tagsList;
        case "REMOVE_SORTING_TAG":
            return tagsList.filter((tag) => tag !== action.sortingTag);
        case "REMOVE_ALL_SORTING_TAGS":
            return [];
        default:
            return tagsList;
    }
};