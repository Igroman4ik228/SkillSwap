import { useRef, useState } from 'react';

import GalleryAdd from '@/shared/assets/icons/gallery-add.svg?react';
import cls from './dragAndDrop.module.scss';

export const DragAndDrop = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [isDragOver, setIsDragOver] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragOver(false);
		const droppedFiles = Array.from(e.dataTransfer.files);
		setFiles((prev) => [...prev, ...droppedFiles]);
	};

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files;
		if (selectedFiles) {
			setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
		}
	};

	const handleButtonClick = () => {
		inputRef.current?.click();
	};

	return (
		<div className={cls.container}>
			<div
				className={`${cls.dropZone} ${isDragOver ? cls.dragOver : ''}`}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
			>
				<div className={cls.inner}>
					<p className={cls.title}>
						Перетащите или выберите изображения навыка
					</p>
					<div className={cls.controls}>
						<GalleryAdd />
						{files.length > 0 ? (
							<div className={cls.fileCount}>
								Загружено изображений: {files.length}
							</div>
						) : (
							<button
								type='button'
								onClick={handleButtonClick}
								className={cls.button}
							>
								Выбрать изображения
							</button>
						)}
					</div>
				</div>
			</div>

			<input
				type='file'
				accept='image/*'
				multiple
				ref={inputRef}
				onChange={handleFileSelect}
				className={cls.hiddenInput}
			/>
		</div>
	);
};
