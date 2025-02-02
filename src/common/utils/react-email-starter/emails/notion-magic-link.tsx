// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const formData = await request.formData();
//     const senderPhone = formData.get('senderTg') as string;
//     const message = formData.get('message') as string;

//     // Replace these with your actual Telegram bot token and chat ID
//     const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
//     const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

//     const phoneRegex = /^[+]?[0-9]{6,15}$/;

//     if (!phoneRegex.test(senderPhone)) {
//       return NextResponse.json(
//         { error: 'Invalid phone number' },
//         { status: 400 }
//       );
//     }

//     if (!message || message.length > 5000) {
//       return NextResponse.json(
//         { error: 'Invalid message' },
//         { status: 400 }
//       );
//     }

//     const text = `📬 *New Message from Contact Form*\n\n📞 *Sender Phone*: ${senderPhone}\n📝 *Message*:\n${message}`;

//     const telegramAPIUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

//     const response = await fetch(telegramAPIUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         chat_id: TELEGRAM_CHAT_ID,
//         text: text,
//         parse_mode: 'Markdown',
//       }),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       return NextResponse.json(
//         { error: `Failed to send message: ${error.description}` },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, message: 'Message sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Server error' },
//       { status: 500 }
//     );
//   }
// }