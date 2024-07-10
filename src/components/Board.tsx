import { useState } from 'react'
import AddColBtn from './buttons/AddColBtn'
import { Column as ColumnType } from '../types'
import Column from './Column'

export default function Board() {
	const [columns, setColumn] = useState<ColumnType[]>([])

	const createColumn = () => {
		const newCol: ColumnType = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		}

		setColumn([...columns, newCol])
		console.log(columns)
	}

	const generateId = () => {
		return Math.floor(Math.random() * 10001)
	}

	return (
		<>
			<div className='h-screen flex flex-col items-center main-container p-8'>
				<h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold mt-8 text-center'>
					Kanban Board
				</h1>
				<AddColBtn onClick={createColumn} disabled={columns.length >= 10} />
				<div className='flex overflow-x-scroll space-x-8 lg:space-x-4 w-full  justify-between mt-12'>
					{columns.map((column) => (
						<Column key={column.id} column={column} />
					))}
				</div>
			</div>

			{/* <Task
				title='card title'
				content='card content'
				importance='high'
			/> */}
		</>
	)
}
