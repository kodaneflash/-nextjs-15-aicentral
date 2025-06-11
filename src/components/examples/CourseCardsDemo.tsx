import { type CourseCard, CourseCards } from '../CourseCards';

// Sample data based on the original code
const sampleCourses: CourseCard[] = [
    {
        id: 'ai-coding-basics',
        title: 'AI coding<br />Beyond basics',
        description: 'The ultimate Vibe Coding Guideline<br />to bring ideas to production',
        buttonText: 'Enroll now',
        videoUrl: 'https://www.aibuilderclub.com/3_learning/course1.mp4',
        buttonHref: '#' // Replace with actual URL
    },
    {
        id: 'production-agent',
        title: 'Build<br />Production<br />Agent',
        description: 'No framework, just build from scratch',
        buttonText: 'Get Started',
        videoUrl: 'https://www.aibuilderclub.com/3_learning/course2.mp4',
        buttonHref: '#' // Replace with actual URL
    }
];

export function CourseCardsDemo() {
    return (
        <div className='mx-auto max-w-7xl px-4 py-16'>
            <CourseCards courses={sampleCourses} />
        </div>
    );
}

// Alternative usage with custom click handlers
export function CourseCardsDemoWithHandlers() {
    const handleEnrollClick = () => {
        console.log('Enroll now clicked');
        // Add your enrollment logic here
    };

    const handleGetStartedClick = () => {
        console.log('Get Started clicked');
        // Add your get started logic here
    };

    const coursesWithHandlers: CourseCard[] = [
        {
            id: 'ai-coding-basics',
            title: 'AI coding<br />Beyond basics',
            description: 'The ultimate Vibe Coding Guideline<br />to bring ideas to production',
            buttonText: 'Enroll now',
            videoUrl: 'https://www.aibuilderclub.com/3_learning/course1.mp4',
            onButtonClick: handleEnrollClick
        },
        {
            id: 'production-agent',
            title: 'Build<br />Production<br />Agent',
            description: 'No framework, just build from scratch',
            buttonText: 'Get Started',
            videoUrl: 'https://www.aibuilderclub.com/3_learning/course2.mp4',
            onButtonClick: handleGetStartedClick
        }
    ];

    return (
        <div className='mx-auto max-w-7xl px-4 py-16'>
            <CourseCards courses={coursesWithHandlers} />
        </div>
    );
}

export default CourseCardsDemo;
