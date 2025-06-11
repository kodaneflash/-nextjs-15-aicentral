'use client';

import { useCallback, useState } from 'react';

interface SubscriptionState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
    error: string | null;
}

interface UseNewsletterSubscriptionReturn extends SubscriptionState {
    subscribe: (email: string) => Promise<void>;
    reset: () => void;
}

const initialState: SubscriptionState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    error: null
};

export function useNewsletterSubscription(): UseNewsletterSubscriptionReturn {
    const [state, setState] = useState<SubscriptionState>(initialState);

    const subscribe = useCallback(async (email: string) => {
        // Reset state
        setState(initialState);

        // Basic client-side validation
        if (!email || !email.trim()) {
            setState({
                ...initialState,
                isError: true,
                error: 'Email address is required'
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setState({
                ...initialState,
                isError: true,
                error: 'Please enter a valid email address'
            });
            return;
        }

        // Set loading state
        setState({
            ...initialState,
            isLoading: true
        });

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email.trim().toLowerCase() })
            });

            const data = await response.json();

            if (response.ok) {
                setState({
                    ...initialState,
                    isSuccess: true,
                    message: data.message || 'Successfully subscribed to newsletter!'
                });
            } else {
                setState({
                    ...initialState,
                    isError: true,
                    error: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setState({
                ...initialState,
                isError: true,
                error: 'Network error. Please check your connection and try again.'
            });
        }
    }, []);

    const reset = useCallback(() => {
        setState(initialState);
    }, []);

    return {
        ...state,
        subscribe,
        reset
    };
}
