import PropTypes from 'prop-types';
import {
  StyledContactForm,
  StyledContactlabel,
  StyledContactInput,
  StyledContactButton,
} from './ContactForm.styled';
export const ContactForm = ({ onFormSubmit }) => {
  const reset = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <StyledContactForm
      onSubmit={e => {
        onFormSubmit(e);
        reset(e);
      }}
    >
      <StyledContactlabel>
        Name
        <StyledContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledContactlabel>
      <StyledContactlabel>
        Number
        <StyledContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledContactlabel>
      <StyledContactButton type="submit">Add contact</StyledContactButton>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
