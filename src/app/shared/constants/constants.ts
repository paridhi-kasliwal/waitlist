import { environment } from 'src/environments/environment';

export const Constants = {
    header: 'TheAwaited',
    backendUrl : environment.backend_url,

    welcome_screen: {
        welcome_text: 'Welcome to TheAwaited',
        about: `We will be unveiling our streaming service TheAwaited shortly, We are going to change the streaming of animated movies and web series as a whole.
        We take yet another momentous step in staying committed to our promise of delivering high-quality impactful stories for everyone across the globe that
        have not only entertained but also made a difference in people’s lives.
        We hope the power of TheAwaited storytelling, delivered through high speed streaming technology, will help our viewers find moments of comfort, happiness, and inspiration during these difficult times of coronavirus.`,
        early_access: 'To Get Early Access and Win Amazing Rewards, ',
        subscribe: 'SUBSCRIBE NOW !!!'
    },

    thankyou_screen: {
        thank_you: 'Thank you!',
        added_email: 'We have added your email address to the signup queue.',
        position: 'Your current position is',
        position_text: 'people are ahead of you !',
        offer_text: 'Interested in earning rewards ?',
        share: 'Get amazing rewards by referring your friends. The more the friends join, the more you can win.',
        share_now: 'SHARE NOW !',
        view_leader_borad: 'View Leader Board',
    },

    timer: {
        time_left: 'Time left to go LIVE !!!',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    },

    footer: '© 2020 TheAwaited. All Rights Reserved.'
};