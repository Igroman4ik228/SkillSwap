export type NotificationProps = {
	appearance?: 'main' | 'inProfilePopup';
	isChecked: boolean;
	status: 'Accepted' | 'Pending' | 'Declined';
	name: string;
	createDate: Date;
};
