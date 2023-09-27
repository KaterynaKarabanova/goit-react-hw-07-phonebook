import PropTypes from 'prop-types';
import { StyledContactItem, StyledContactButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

import { deleteContacts } from '../../../../redux/operations';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <StyledContactItem>
      <p> {name}:</p>
      <p>{` ` + number}</p>

      <StyledContactButton
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
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
};
