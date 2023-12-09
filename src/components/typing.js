import React, { Component } from 'react';
import Typed from 'typed.js';

class TypingComponent extends Component {
  componentDidMount() {

    this.initTyped();
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  initTyped() {
    const element = this.typingElement;
    

    const options = {
      strings: [
        "Full Stack Developer....",
        "Web Developer....",
        "Backend Developer....",
        "Coder....",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    this.typed = new Typed(element, options);
  }

  render() {
    return (
      <div>
        <span className="role   text-violet-300  ml-32" ref={el => (this.typingElement = el)}></span>
      </div>
    );
  }
}

export default TypingComponent;
