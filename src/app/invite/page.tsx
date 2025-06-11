'use client';

import { InteractiveEnvelope } from '@reverse-ui/react';

import { motion } from 'motion/react';

export default function InvitePage() {
    return (
        <main className='bg-background min-h-screen'>
            {/* Main Container */}
            <div className='flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
                {/* Animated Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className='flex flex-col items-center space-y-8'>
                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className='text-center'>
                        <h1 className='text-foreground mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
                            You&apos;ve been invited!
                        </h1>
                        <p className='text-clean-subtext max-w-md'>
                            You&apos;ve been invited to join AI Central! Click the envelope to accept your invitation
                            and start your journey.
                        </p>
                    </motion.div>

                    {/* Interactive Envelope */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className='flex items-center justify-center'>
                        <InteractiveEnvelope
                            onOpen={() => {
                                console.log('Envelope opened - Welcome to AI Central!');
                                // Add any additional logic here when envelope opens
                            }}
                            onClose={() => {
                                console.log('Envelope closed');
                            }}
                        />
                    </motion.div>

                    {/* Additional Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className='text-center'>
                        <p className='text-muted-foreground text-sm'>Ready to become a smarter AI builder?</p>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
