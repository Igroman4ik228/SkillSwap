import type { TUsers } from '@/entities';
import type { TUserCard } from '@/widgets/userCard/model';

/**
 * Возвращает возраст в полных годах по дате рождения в формате * 'YYYY-MM-DD' (ISO).
 */
function calculateAge(bornDate: string): number {
	const birthDate = new Date(bornDate);
	if (Number.isNaN(birthDate.getTime()))
		throw new Error(`Invalid date: ${bornDate}`);

	const today = new Date();
	const birthYear = birthDate.getFullYear();
	const birthMonth = birthDate.getMonth(); // 0–11
	const birthDay = birthDate.getDate(); // 1–31

	let age = today.getFullYear() - birthYear;

	// Если текущий месяц меньше месяца рождения
	// или тот же месяц, но число меньше — днюхи ещё не было
	if (
		today.getMonth() < birthMonth ||
		(today.getMonth() === birthMonth && today.getDate() < birthDay)
	)
		age--;

	return age;
}

/**
 * Преобразует TUsers → TUserCard
 */
export function transformUserToUserCard(user: TUsers): TUserCard {
	return {
		id: user.id,
		name: user.name,
		city: user.city,
		age: calculateAge(user.bornDate),
		teach: user.teach,
		learn: user.learn,
		avatar: user.avatar,
		isFavorite: user.isFavorite,
		isExchangeRequested: user.isExchangeRequested,
		description: user.description,
	};
}
