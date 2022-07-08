import { faker } from '@faker-js/faker';
import Image from 'next/image';

const descriptions = [
    'i hope u find me cute :3',
    'I will play all night :3 do u want to join?'
];

const pictures = [
    'https://images.unsplash.com/photo-1601084195907-44baaa49dabd',
    'https://images.unsplash.com/photo-1618941716939-553df3c6c278',
    'https://images.unsplash.com/photo-1568392816241-44d223d4d490',
    'https://images.unsplash.com/photo-1607835498554-2c5519af1730',
    'https://images.unsplash.com/photo-1612549672719-2f1a3908ae31',
    'https://images.unsplash.com/photo-1590341758888-a5ac1fe37a24',
    'https://images.unsplash.com/photo-1563013021-bf6332216a59',
    'https://images.unsplash.com/photo-1582558006297-f996ed8adfec'
]

export default function OnlyFansCard() {
    let desc = faker.hacker.phrase()
    let likes = Math.floor(Math.random() * 1000);
    let liked = Math.round(Math.random());
    let name = faker.name.firstName('female');
    let at = faker.internet.userName(name);
    let profilePic = faker.image.abstract(100, 100, true);
    let picture = pictures[Math.floor(Math.random() * pictures.length)]
    let date = faker.date.past(1)

    return (
        <div className="flex flex-col border-t py-4 space-y-4">
            <div className="flex justify-between items-start px-4">
                <div className="flex space-x-4 items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image src={profilePic} height='100%' width='100%'></Image>
                    </div>
                    <div className="flex flex-col">
                        <span>{name}</span>
                        <span className="text-sm text-gray-400">@{at}</span>
                    </div>
                </div>
                <div className="flex text-sm text-gray-400 items-center space-x-2">
                    <span>
                        {date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()}
                    </span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                </div>
            </div>
            <div className='px-4'>
                {desc}
            </div>
            <div className="h-96 relative">
                <Image src={picture} className='h-full' objectFit='cover' objectPosition='center' layout='fill' alt='only a fan' />
            </div>
            <div className='flex justify-between items-center px-4'>
                <div className="flex items-center">
                    {liked ? (
                        <svg className="w-6 h-6 fill-red-500 stroke-red-500 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                    ) : (
                        <svg className="w-6 h-6 stroke-slate-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    )}
                    <svg className="w-6 h-6 stroke-slate-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                    <svg className="w-6 h-6 stroke-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className='text-slate-400 text-sm'>ENVOYER UN POURBOIRE</span>
                </div>
                <svg className="w-6 h-6 stroke-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            </div>
            <span className='px-4 text-sm'>
                <span className='font-bold'>{likes}</span> j&apos;aime
            </span>
        </div>
    )
}