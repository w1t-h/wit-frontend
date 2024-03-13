import { StyleProvider } from '@with/foundation';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Create Turborepo',
	description: 'Generated by create turbo',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>
				<StyleProvider>{children}</StyleProvider>
			</body>
		</html>
	);
};

export default RootLayout;
