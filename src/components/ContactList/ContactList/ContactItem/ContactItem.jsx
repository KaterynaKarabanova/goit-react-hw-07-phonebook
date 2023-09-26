import PropTypes from 'prop-types';
import { StyledContactItem, StyledContactButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <StyledContactItem>
      {name}:{` ` + number}
      <StyledContactButton
        type="button"
        onClick={() => dispatch(deleteContact({ id }))}
      >
        Delete
      </StyledContactButton>
    </StyledContactItem>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
