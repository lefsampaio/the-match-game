const textArea = (props) => {
  const template = `
      <textarea class="${props.class}" placeholder="${props.placeholder}")"></textarea>`;

  return template;
};

window.textarea = {
  handleKeyup: (e, callBack) => {
    callBack(e);
  },
};

export default textArea;
