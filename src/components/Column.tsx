import { Column as ColumnType, Id, Id as IdType } from '../types'
import TrashIcon from '../icons/TrashIcon'
import PlusIcon from '../icons/PlusIcon'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useEffect, useRef, useState } from 'react'

interface ColumnProps {
	column: ColumnType
	borderColor?: string
	textColor?: string
	deleteCol: (id: IdType) => void
	updateCol: (id: IdType, title: string) => void
	createTask: (columnId: IdType) => void
}

export default function Column({
	column,
	borderColor = 'bg-black',
	textColor = 'text-white',
	deleteCol,
	updateCol,
	createTask,
}: ColumnProps) {
	const [editMode, setEditMode] = useState(false)
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: column.id,
		data: {
			type: 'Column', // Corrected type to match DragStartEvent check
			column,
		},
		disabled: editMode,
	})
	const inputRef = useRef()
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target as Node)
			) {
				setEditMode(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	if (isDragging) {
		return (
			<div
				ref={setNodeRef}
				style={style}
				className={`border-4 rounded-3xl px-8 py-6 ${borderColor} h-full min-w-[250px] lg:min-w-[300px] bg-red-500`}
			></div>
		)
	}

	return (
		<>
			<div
				className={`flex flex-col border-4 rounded-3xl px-8 py-6 ${borderColor} h-full min-w-[250px] lg:min-w-[300px]`}
				ref={setNodeRef}
				style={style}
			>
				<div
					className={`flex flex-row justify-between border-b-4 ${borderColor} mb-4 cursor-grab`}
					{...attributes}
					{...listeners}
					onClick={() => setEditMode(true)}
				>
					<h2 className={`sticky top-0  pb-2 font-bold text-lg`}>
						{!editMode && column.title}
						{editMode && (
							<input
								className='text-black'
								value={column.title}
								onChange={(e) => updateCol(column.id, e.target.value)}
								autoFocus
								onBlur={() => setEditMode(false)}
								onKeyDown={(event) => {
									if (event.key != 'Enter') return
									setEditMode(false)
								}}
							/>
						)}
					</h2>
					<div className='flex justify-evenly'>
						<div
							className='tooltip text-white font-semibold'
							data-tip='Add Task'
						>
							<button className='m-0 p-0' onClick={() => deleteCol(column.id)}>
								<PlusIcon />
							</button>
						</div>
						<div
							className='tooltip text-white font-semibold'
							data-tip='Delete Column'
						>
							<button className='m-0 p-0' onClick={() => deleteCol(column.id)}>
								<TrashIcon />
							</button>
						</div>
					</div>
				</div>
				<div className='flex-1 overflow-y-auto'>
					{Array.isArray(column.content) ? (
						column.content.map((content, index) => (
							<p key={index} className={`mb-2 ${textColor}`}>
								{content}
							</p>
						))
					) : (
						<p className={`${textColor}`}>{column.content}</p>
					)}
				</div>
			</div>
		</>
	)
}
