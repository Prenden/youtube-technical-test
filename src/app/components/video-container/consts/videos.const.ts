import { VideoInterface } from '../interfaces';

export const VIDEOS: VideoInterface[] = [
    {
        img: 'assets/images/video1.jpg',
        title: '300 Close up takeoffs and LANDINGS in 3 hours | Melbourne',
        views: '1.3M',
        duration: '3:11:06',
        createdAt: '1 year ago',
        creator: {
            name: 'HD Melbourne Aviation',
            img: 'assets/images/creator1.jpg',
            isVerified: true,
        },
    },
    {
        img: 'assets/images/video2.jpg',
        title: 'Spiderman takes on Spiral Bridge Stunt Ride on Motorcycle',
        views: '230k',
        duration: '01:22:56',
        createdAt: '3 years ago',
        creator: {
            name: 'Creator 2',
            img: 'assets/images/creator2.jpg',
            isVerified: false,
        },
    },
    {
        img: 'assets/images/video2.jpg',
        title: 'Video 3',
        views: '1.2M',
        duration: '22:56',
        createdAt: '1 day ago',
        creator: {
            name: 'Creator 2',
            img: 'assets/images/creator2.jpg',
            isVerified: false,
        },
    }
];
