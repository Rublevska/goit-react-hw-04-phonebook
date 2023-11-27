import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './phoneForm/NewPhoneForm';
import { ContactList } from './Contacts/ContactList';
import { Section } from './Section/Section';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';

const initialContacts = [
  { id: '1', firstName: 'Rosie Simpson', phoneNumber: '4591256' },
  { id: '2', firstName: 'Hermione Kline', phoneNumber: '4438912' },
  { id: '3', firstName: 'Eden Clements', phoneNumber: '6451779' },
  { id: '4', firstName: 'Annie Copeland', phoneNumber: '2279126' },
];

const getInitialContacts = () => {
  const localContacts = JSON.parse(
    window.localStorage.getItem(LS_KEY_CONTACTS)
  );
  if (localContacts) {
    return localContacts;
  }
  return initialContacts;
};

const LS_KEY_CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter(contact => {
    return contact.firstName.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    window.localStorage.setItem(LS_KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const duplicateContact = contacts.find(
      contact =>
        contact.firstName.toLowerCase() === newContact.firstName.toLowerCase()
    );
    if (duplicateContact !== undefined) {
      return alert(`${duplicateContact.firstName} is already in contacts`);
    } else {
      const contactToAdd = { ...newContact, id: nanoid() };
      setContacts(prevContact => [contactToAdd, ...prevContact]);
    }
  };

  const deleteContact = idForDelete => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== idForDelete)
    );
  };

  const filterContacts = filterValue => {
    setFilter(filterValue);
  };

  return (
    <div>
      <Section title="Phonebook">
        <FormContact onAdd={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <SearchBar filter={filter} filterContacts={filterContacts} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </Section>
      )}
      <GlobalStyle />
    </div>
  );
};
