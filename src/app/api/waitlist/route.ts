import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, whatsapp, source } = body;

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

    const { error } = await supabase.from('waitlist').insert({
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      source: source ?? 'waitlist-premium',
    });

    if (error) {
      // Duplicate email (unique constraint) - treat as success to avoid leaking info
      if (error.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Registro exitoso' },
          { status: 200 }
        );
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Error interno del servidor' },
        { status: 500 }
      );
    }

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
