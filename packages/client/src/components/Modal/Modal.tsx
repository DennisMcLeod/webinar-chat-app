import './modal.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal')!;
export class Modal extends React.Component<{className?: string}> {
  el: HTMLElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('aside');
    this.el.classList.add('modal');
    if (this.props.className) this.el.classList.add(this.props.className);
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
    modalRoot.classList.add('open');
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    modalRoot.classList.remove('open');
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}
