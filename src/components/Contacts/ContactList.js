import {
  ListOfContacts,
  ContactItem,
  DeleteBtn,
  ContactWrapper,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListOfContacts>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <ContactWrapper>
              <p>
                {contact.firstName}: {contact.phoneNumber}
              </p>
              <DeleteBtn
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </DeleteBtn>
            </ContactWrapper>
          </ContactItem>
        );
      })}
    </ListOfContacts>
  );
};
