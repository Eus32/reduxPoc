export const softwaresReducer = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_SOFTWARES_SUCCESS':
        return action.softwares;
    default:
        return state;
    }
};
  
export const softwareReducer = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_SOFTWARE_BY_ID_SUCCESS':
        return action.software;
    default:
        return state;
    }
};