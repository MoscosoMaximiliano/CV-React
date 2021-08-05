import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

import {
  Container,
  FormStyled,
  FormSection, 
  LabelText, 
  Input, 
  TextArea, 
  Btn
} from './Contact.styled'


function Contact() {
  const [state, handleSubmit] = useForm('mdoewkzk');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <Container>
      <FormStyled onSubmit={handleSubmit}>
        <FormSection>
          <LabelText htmlFor="email">Email</LabelText>
          <Input id="email" type="email" name="email" placeholder="Enter your email" />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <LabelText htmlFor="Message">Message</LabelText>
          {/* <Input id="Message" type="text" name="Message" /> */}
          <TextArea id="message" name="message" placeholder="Enter your message"></TextArea>
          <ValidationError
            prefix="message"
            field="message"
            errors={state.errors}
          />
        </FormSection>
        <Btn type="submit" disabled={state.submitting}>Send</Btn>
      </FormStyled>
    </Container>
  )
}

export default Contact;