import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, whatsapp, timestamp, source } = body;

    // Validate required fields
    if (!email || !whatsapp) {
      return NextResponse.json(
        { error: 'Email y WhatsApp son requeridos' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // TODO: Save to database or send to external service
    // Example: await saveToDatabase({ email, whatsapp, timestamp, source });
    // Example: await sendToEmailService({ email, whatsapp });
    // Example: await sendWhatsAppNotification(whatsapp);

    console.log('Waitlist submission:', {
      email,
      whatsapp,
      timestamp,
      source,
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true,
        message: 'Registro exitoso',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
