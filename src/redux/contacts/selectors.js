export const getContacts = ({ contacts }) => contacts.items;

export const getState = ({ contacts }) => ({
    laoding: contacts.laoding,
    error: contacts.error, 
});

export const getFilteredContacts = ({ contacts, filter}) => {
    if(!filter) {
        return contacts.items;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.items.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
    });
    return filteredContacts;
};

export const getLoadingStatus = state => state.contacts.loading