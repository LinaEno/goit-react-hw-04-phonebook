// import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Form from './ContactForm/Form';
import Filter from './Filter';
import { Container, MainTitle, Title, Message } from './App.styled';
import useLocalStorage from './hooks/useLocalStorage';

export function App() {
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = newContact => {
    const sameName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(newContact.name.toLowerCase());

    if (sameName) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(10),
      ...newContact,
    };

    setContacts([contact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <Form onSubmit={addContact} />
      <Title>Contacts</Title>
      {contacts.length === 0 ? (
        <Message>There is no contacts</Message>
      ) : (
        <>
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </>
      )}
    </Container>
  );
}
