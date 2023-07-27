import css from './Searchbar.module.css';
import debounce from 'lodash.debounce';
import background from 'loupe.png';

export const Searchbar = ({ onSearch }) => {
  const debouncedQueryChange = debounce(query => {
    onSearch(query);
  }, 500);

  const handleQueryChange = e => {
    debouncedQueryChange(e.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform}>
        <button
          type="submit"
          className={css.button}
          disabled
          style={{ backgroundImage: `url(${background})` }}
        >
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};
