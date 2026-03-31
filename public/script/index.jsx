/* eslint-disable @typescript-eslint/no-unsafe-call */
import ReactDOM from 'react-dom';

const help = 'help txt!';

const inputClick = () => {
  // функция-обработчик клика
};

const rootElement = document.getElementById('jsx');
if (rootElement) {
  ReactDOM.render(
    <div className="name">
      <input placeholder={help} onClick={inputClick} />
      <p>{help === 'help text!' ? 'yes' : 'no'}</p>
    </div>,
    rootElement
  );
}
