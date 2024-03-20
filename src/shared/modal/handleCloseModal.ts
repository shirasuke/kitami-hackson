import { closeModal } from 'svelte-modals';
import { backfaceFixed } from './backFaceFixed';

export const handleCloseModal = (): void => {
	backfaceFixed(false);
	closeModal();
};
