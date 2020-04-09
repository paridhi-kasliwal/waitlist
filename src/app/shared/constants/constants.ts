import { environment } from 'src/environments/environment';

export const Constants = {
    header: 'XYZ',
    backendUrl : environment.backend_url,

    welcome_screen: {
        welcome_text: 'Welcome to XYZ website',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci velit, pharetra vel sapien quis, varius pellentesque diam. Pellentesque ut pharetra leo. Pellentesque pellentesque sodales posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer pulvinar ultrices dolor, at venenatis arcu congue quis. Integer arcu lectus, sollicitudin scelerisque efficitur at, venenatis id nunc. In fermentum condimentum lorem nec feugiat. Sed mauris tortor, consectetur eget sagittis quis, laoreet porttitor est. Etiam nec consequat justo. Donec ornare eget lacus et venenatis. Etiam tincidunt dui at massa fermentum ultrices. Morbi elit tortor, molestie quis lorem in, ultricies aliquam dui. Aenean vitae tincidunt est, eu placerat ex. Donec luctus tellus eget dignissim aliquam. Duis laoreet erat nec nisl euismod varius.',
        subscribe_text: 'To get early access and earn 50 points, ',
        subscribe: 'SUBSCRIBE!!!',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    },

    thankyou_screen: {
        thank_you: 'Thank you!',
        position: 'Your position is 501.',
        position_text: 'There are 500 people ahead of you.',
        offer_text: 'People with top 3 positions will get exicting prizes.',
        share: 'To move up your position and earn bonus points of 10,',
        share_now: 'SHARE NOW !',
        view_leader_borad: 'View Leader Board'
    },

    footer: '@copyright 2020'
};