import { Component } from 'react';
import css from './Searchbar.module.css';
import debounce from 'lodash.debounce';
import background from 'loupe.png';

export class Searchbar extends Component {
  debouncedQueryChange = debounce(query => {
    this.props.onSearch(query);
  }, 500);

  handleQueryChange = e => {
    this.debouncedQueryChange(e.target.value);
  };

  render() {
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
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
