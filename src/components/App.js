import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './phoneForm/NewPhoneForm';
import { ContactList } from './Contacts/ContactList';
import { Section } from './Section/Section';
import { SearchBar } from './SearchBar/SearchBar';

const initialContacts = [
  { id: '1', firstName: 'Rosie Simpson', phoneNumber: '4591256' },
  { id: '2', firstName: 'Hermione Kline', phoneNumber: '4438912' },
  { id: '3', firstName: 'Eden Clements', phoneNumber: '6451779' },
  { id: '4', firstName: 'Annie Copeland', phoneNumber: '2279126' },
];

const LS_KEY_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem(LS_KEY_CONTACTS));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        LS_KEY_CONTACTS,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const duplicateContact = this.state.contacts.find(
      contact =>
        contact.firstName.toLowerCase() === newContact.firstName.toLowerCase()
    );
    if (duplicateContact !== undefined) {
      return alert(`${duplicateContact.firstName} is already in contacts`);
    } else {
      const contactToAdd = { ...newContact, id: nanoid() };
      this.setState(prevState => {
        return {
          contacts: [contactToAdd, ...prevState.contacts],
        };
      });
    }
  };

  deleteContact = idForDelete => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idForDelete
        ),
      };
    });
  };

  filterContacts = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.firstName.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div>
        <Section title="Phonebook">
          <FormContact onAdd={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <SearchBar filter={filter} filterContacts={this.filterContacts} />
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          </Section>
        )}
        <GlobalStyle />
      </div>
    );
  }
}
