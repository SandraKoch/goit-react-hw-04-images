import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    if (event.charCode === 0) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.openModal) {
      return (
        <div className={css.overlay}>
          <div className={css.modal}>
            {this.props.children}
            <button className={css.closeButton} onClick={this.props.onClose}>
              X
            </button>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
