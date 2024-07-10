import { useState, useMemo } from 'react'
import { Column as ColumnType, Id as IdType, Task as TaskType } from '../types'
import AddColBtn from '../components/buttons/AddColBtn'
import Column from '../components/Column'
import {
	DndContext,
	DragOverlay,
	DragStartEvent,
	DragEndEvent,
	useSensor,
	useSensors,
	PointerSensor,
} from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'

export default function CustomBoard() {
	const [columns, setColumns] = useState<ColumnType[]>([])
	const [tasks, setTasks] = useState<TaskType[]>([])
	const [colCount, setColCount] = useState(0)
	const colsIds = useMemo(() => columns.map((col) => col.id), [columns])
	const [activeCol, setActiveCol] = useState<ColumnType | null>(null)
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 3,
			},
		})
	)

	const createNewCol = () => {
		setColCount((prevCount) => prevCount + 1)
		const newCol: ColumnType = {
			id: generateId(),
			title: `Column ${colCount + 1}`,
		}
		setColumns((prevColumns) => [...prevColumns, newCol])
	}

	const generateId = () => {
		return Math.floor(Math.random() * 10001)
	}

	const deleteCol = (id: IdType) => {
		const filteredCols = columns.filter((col) => col.id !== id)
		setColumns(filteredCols)
	}

	const updateCol = (id: IdType, title: string) => {
		const newCols = columns.map((col) => {
			if (col.id != id) return col
			return { ...col, title }
		})
		setColumns(newCols)
	}

	const onDragStart = (event: DragStartEvent) => {
		if (event.active.data.current?.type === 'Column') {
			const columnId = event.active.id
			const column = columns.find((col) => col.id === columnId)
			if (column) {
				setActiveCol(column)
			}
		}
	}

	const createTask = (colId: Id) => {
		
	}










	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (!DragOverlay) return // not dragging over valid element

		const activeColId = active?.id
		const overColId = over?.id
		if (activeColId === overColId) return

		setColumns((columns) => {
			const activeColIndex = columns.findIndex((col) => col.id === activeColId)
			const overColIndex = columns.findIndex((col) => col.id === overColId)
			return arrayMove(columns, activeColIndex, overColIndex)
		})
	}

	return (
		<>
			<div className='flex flex-col items-center h-screen p-8'>
				<h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 text-center'>
					Custom Board
				</h1>

				<AddColBtn onClick={createNewCol} />

				<div className='h-full lg:h-4/5 m-auto overflow-x-auto w-full'>
					<DndContext
						onDragStart={onDragStart}
						onDragEnd={onDragEnd}
						sensors={sensors}
					>
						<div className='m-auto flex flex-row w-screen h-full'>
							<SortableContext items={colsIds}>
								{columns.map((column) => (
									<div key={column.id} className='h-full px-2'>
										<Column
											column={column}
											deleteCol={deleteCol}
											updateCol={updateCol}
											createTask={createTask}
										/>
									</div>
								))}
							</SortableContext>
						</div>
						{createPortal(
							<DragOverlay>
								{activeCol && (
									<Column
										column={activeCol}
										deleteCol={deleteCol}
										updateCol={updateCol}
										createTask={createTask}
									/>
								)}
							</DragOverlay>,
							document.body
						)}
					</DndContext>
				</div>
			</div>
		</>
	)
}
