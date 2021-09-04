import Image from 'next/image';
import {
	HomeIcon,
	CollectionIcon,
	BadgeCheckIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				
			</div>
			<Image
				className='object-contain'
				src='https://links.papareact.com/ua6'
				width={200}
				height={100}
			/>
		</header>
	);
};

export default Header;
