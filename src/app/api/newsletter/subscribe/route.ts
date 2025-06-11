import { NextRequest, NextResponse } from 'next/server';

// Beehiiv API configuration
const BEEHIIV_API_URL = 'https://api.beehiiv.com/v2/publications';
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

interface BeehiivSubscribeRequest {
    email: string;
    reactivate_existing?: boolean;
    send_welcome_email?: boolean;
}

interface BeehiivSubscribeResponse {
    data?: {
        id: string;
        email: string;
        status: string;
        created: string;
    };
    errors?: Array<{
        code: string;
        message: string;
    }>;
}

export async function POST(request: NextRequest) {
    try {
        // Validate environment variables
        if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
            console.error('Missing Beehiiv configuration');
            return NextResponse.json({ error: 'Newsletter service configuration error' }, { status: 500 });
        }

        const { email } = await request.json();

        // Validate email format
        if (!email || typeof email !== 'string') {
            return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
        }

        // Prepare request to Beehiiv API
        const subscribeData: BeehiivSubscribeRequest = {
            email: email.toLowerCase().trim(),
            reactivate_existing: true,
            send_welcome_email: true
        };

        const response = await fetch(`${BEEHIIV_API_URL}/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${BEEHIIV_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscribeData)
        });

        const responseData: BeehiivSubscribeResponse = await response.json();

        if (!response.ok) {
            // Handle Beehiiv API errors
            if (responseData.errors && responseData.errors.length > 0) {
                const error = responseData.errors[0];

                // Handle specific error cases
                if (error.code === 'subscription_already_exists') {
                    return NextResponse.json(
                        { message: 'You are already subscribed to our newsletter!' },
                        { status: 200 }
                    );
                }

                console.error('Beehiiv API error:', error);
                return NextResponse.json(
                    { error: 'Failed to subscribe to newsletter. Please try again.' },
                    { status: 500 }
                );
            }

            console.error('Beehiiv API response error:', response.status, responseData);
            return NextResponse.json({ error: 'Newsletter service temporarily unavailable' }, { status: 500 });
        }

        // Success response
        return NextResponse.json(
            {
                message: 'Successfully subscribed! Check your email for confirmation.',
                data: responseData.data
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Newsletter subscription endpoint. Use POST to subscribe.' }, { status: 405 });
}
