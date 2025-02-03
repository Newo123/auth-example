import type React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { cn } from '../lib/utils';

// Скелетон профиля
// Анимация скелетона находится в файле global.css это корень папки src
function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-muted', className)}
			{...props}
		/>
	);
}

export function ProfileSkeleton() {
	return (
		<Card className='w-[300px] bg-[#0c1015] text-white border-none'>
			<CardHeader>
				<CardTitle className='text-lg font-normal text-center'>
					<Skeleton className='h-6 w-24 bg-[#1c2127] mx-auto' />
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='space-y-2'>
					<Skeleton className='h-4 w-20 bg-[#1c2127]' />
					<Skeleton className='h-9 w-full bg-[#1c2127]' />
				</div>
				<div className='space-y-2'>
					<Skeleton className='h-4 w-16 bg-[#1c2127] ' />
					<Skeleton className='h-9 w-full bg-[#1c2127]' />
				</div>
				<Skeleton className='h-9 w-full bg-[#1c2127] mt-4 ' />
			</CardContent>
		</Card>
	);
}
