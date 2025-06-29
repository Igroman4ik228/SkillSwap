import type { Meta, StoryObj, Decorator } from '@storybook/react-vite';
import { Notification } from './notification';

const meta: Meta<typeof Notification> = {
	title: 'Widgets/Notification',
	component: Notification,
	tags: ['autodocs'],
};

const ContainerDecorator: Decorator = (Story) => (
	<div style={{ display: 'flex' }}>
		<div
			style={{
				padding: 20,
				width: 324,
				margin: '0 auto',
				background: '#fff',
				boxSizing: 'border-box',
			}}
		>
			<h2 style={{ textAlign: 'center', fontWeight: 800, marginBottom: 30 }}>
				Container width: 324px
			</h2>
			<Story />
		</div>

		<div
			style={{
				padding: 20,
				width: 500,
				margin: '0 auto',
				background: '#fff',
				boxSizing: 'border-box',
			}}
		>
			<h2 style={{ textAlign: 'center', fontWeight: 800, marginBottom: 30 }}>
				Container width: 500px
			</h2>
			<Story />
		</div>
	</div>
);

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
	args: {
		appearance: 'main',
		isChecked: false,
		status: 'Pending',
		name: 'Олег',
		createDate: new Date('June 25, 2025 14:15:30'),
	},
	decorators: [ContainerDecorator],
};

export const Modal: Story = {
	args: {
		appearance: 'inProfilePopup',
		isChecked: false,
		status: 'Accepted',
		name: 'Николай',
		createDate: new Date('June 24, 2025 14:15:30'),
	},
	decorators: [ContainerDecorator],
};

export const ModalChecked: Story = {
	args: {
		appearance: 'inProfilePopup',
		isChecked: true,
		status: 'Pending',
		name: 'Олег',
		createDate: new Date('May 23, 2025 14:15:30'),
	},
	decorators: [ContainerDecorator],
};
