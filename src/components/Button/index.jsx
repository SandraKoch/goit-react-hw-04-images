import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <div className={css.buttonWrap}>
        <button
          className={css.button}
          type="button"
          onClick={this.props.onClick}
        >
          Load more
        </button>
      </div>
    );
  }
}
