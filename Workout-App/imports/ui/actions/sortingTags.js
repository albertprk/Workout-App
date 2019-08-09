export const addSortingTag = (sortingTag) => {
    return {
        type: 'ADD_SORTING_TAG',
        sortingTag: sortingTag
    };
};

export const removeSortingTag = (sortingTag) => {
    return {
        type: 'REMOVE_SORTING_TAG',
        sortingTag: sortingTag
    }
};

export const removeAllSortingTags = () => {
    return {
        type: 'REMOVE_ALL_SORTING_TAGS'
    }
};