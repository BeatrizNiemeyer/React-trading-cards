'use strict';

function Homepage() {
  return (
  <div>
    <h3>Welcome!</h3>
    <a href='/cards'>Click here to see the Trading Cards</a>
    <img src= '/static/img/balloonicorn.jpg' />

  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
