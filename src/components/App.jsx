import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList/ContactList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilterValue } from '../redux/filterSlice';
import { getContactsItems } from '../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks, addContacts } from 'redux/operations';

export const App = () => {
  const { items, isLoading, error } = useSelector(getContactsItems);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (items.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts({ name, number }));
  };

  const onSearch = () => {
    if (filter) {
      return items.filter(el =>
        el.name.toLowerCase().includes(filter.value.toLowerCase())
      );
    }
    return items;
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={onFormSubmit} />
      </div>
      <div
        style={{
          marginLeft: '700px',
        }}
      >
        <h2>Contacts</h2>

        <Filter />
        {isLoading && (
          <p
            style={{
              fontSize: '100px',
            }}
          >
            Loading contacts...
          </p>
        )}
        {error && (
          <p
            style={{
              fontSize: '100px',
            }}
          >
            {error}
          </p>
        )}
        {!isLoading && <ContactList contacts={onSearch()} />}
      </div>
    </div>
  );
};
