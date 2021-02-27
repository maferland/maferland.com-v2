import * as React from 'react';
import About from './about';
import './reach.module.scss';
import ReachContent from '../site/content/reach.json';

const Reach = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch(() => setLoading(false));
  }

  const Thanks = () => <p className="subtitle is-5 description">{ReachContent.thanks}</p>;

  return (
    <>
      <div className="content gradient-box active">
        <h4 className="title is-4">{ReachContent.title}</h4>
        <p className="subtitle is-5 description">{ReachContent.description}</p>
        {submitted ? (
          <Thanks />
        ) : (
          <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify={+true} netlify>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">
                <span>Name:</span>
                <input required type="text" name="name" placeholder="John Cena" />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                <span>Email:</span>
                <input required type="email" name="email" placeholder="john@cena.com" />
              </label>
            </p>
            <p>
              <label htmlFor="message">
                <span>Message:</span>
                <textarea required name="message" placeholder="You can't see me" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        )}
      </div>
      <div className="content">
        <About small />
      </div>
    </>
  );
};

export default Reach;
