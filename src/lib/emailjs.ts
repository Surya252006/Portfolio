import emailjs from '@emailjs/browser';

export type EmailJSParams = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  name: string;
  email: string;
  message: string;
};

export async function sendEmailJS(params: EmailJSParams) {
  const { serviceId, templateId, publicKey, name, email, message } = params;

  // Expected EmailJS template variables: { user_name, user_email, message }
  return emailjs.send(serviceId, templateId, { user_name: name, user_email: email, message }, publicKey);
}

