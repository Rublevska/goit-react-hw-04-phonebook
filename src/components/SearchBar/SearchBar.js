import { FilterField } from './SearchBar.styled';

export const SearchBar = ({ filter, filterContacts }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <FilterField
        type="text"
        value={filter}
        onChange={evt => {
          filterContacts(evt.target.value);
        }}
        name="filter"
      />
    </label>
  );
};
