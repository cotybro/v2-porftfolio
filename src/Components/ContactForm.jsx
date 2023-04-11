import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './ContactForm.css'

function ContactForm() {
  const [state, handleSubmit] = useForm('myyabypj')
  if (state.succeeded) {
    return (
      <div className='success-container'>
        <h3 className='contacted-message'>
          Thank you for contacting me! I will get back to you as soon as I can.
        </h3>
      </div>
    )
  }
  return (
    <form
      action='https://formspree.io/f/myyabypj'
      method='POST'
      onSubmit={handleSubmit}
    >
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Enter Your Email'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        placeholder='Contact me about anything!'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App
