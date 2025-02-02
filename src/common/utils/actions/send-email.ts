'use server';

import { getErrorMessage, validateString } from '@/common/lib/utils';

const TELEGRAM_BOT_TOKEN = "7241135315:AAEjhM3RszPcewKGYuDunLurBS7COwfNikA";
const TELEGRAM_CHAT_ID = "5755113474";

export const sendTelegramMessage = async (formData: FormData) => {
  const senderPhone = formData.get('senderTg') as string;
  const message = formData.get('message') as string;

  const phoneRegex = /^[+]?[0-9]{6,15}$/;

  if (!phoneRegex.test(senderPhone)) {
    return {
      error: 'Invalid phone number',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  const text =
    `📬 *New Message from Contact Form*\n\n` +
    `📞 *Sender Phone*: ${senderPhone}\n` +
    `📝 *Message*:\n${message}`;

  const telegramAPIUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramAPIUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        error: `Failed to send message: ${error.description}`,
      };
    }

    const data = await response.json();
    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
