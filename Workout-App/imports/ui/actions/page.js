
// update the current page the user have selected (page should be 'Gym' / 'Trainers' etc)
export const updatepage = page => {
  return {
      type: "UPDATE_PAGE",
      payload: page
    };
};
