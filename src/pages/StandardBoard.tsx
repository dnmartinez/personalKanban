import { useState } from 'react'
import Column from '../components/Column'
import { Task as TaskType } from '../types'

export default function StandardBoard() {
	const columns = [
		{
			title: 'Backlog',
			id: 1,
			borderColor: 'border-[#ff3347]',
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nulla nec tortor posuere molestie. Quisque lobortis, mi vel elementum rutrum, risus leo tempor justo, nec vehicula erat risus in ante. Aenean varius justo ornare, tempus felis ut, scelerisque sem. Nunc ornare nisl quis semper porta. Maecenas lobortis urna lacus. Praesent tincidunt tempor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in aliquam libero, sit amet fringilla enim.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nulla nec tortor posuere molestie. Quisque lobortis, mi vel elementum rutrum, risus leo tempor justo, nec vehicula erat risus in ante. Aenean varius justo ornare, tempus felis ut, scelerisque sem. Nunc ornare nisl quis semper porta. Maecenas lobortis urna lacus. Praesent tincidunt tempor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in aliquam libero, sit amet fringilla enim. Ph',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nulla nec tortor posuere molestie. Quisque lobortis, mi vel elementum rutrum, risus leo tempor justo, nec vehicula erat risus in ante. Aenean varius justo ornare, tempus felis ut, scelerisque sem. Nunc ornare nisl quis semper porta. Maecenas lobortis urna lacus. Praesent tincidunt tempor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in aliquam libero, sit amet fringilla enim. Ph',
			],
		},
		{
			title: 'Ongoing',
			id: 2,
			borderColor: 'border-[#FFC107]',
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nulla nec tortor posuere molestie. Quisque lobortis, mi vel elementum rutrum, risus leo tempor justo, nec vehicula erat risus in ante. Aenean varius justo ornare, tempus felis ut, scelerisque sem. Nunc ornare nisl quis semper porta. Maecenas lobortis urna lacus. Praesent tincidunt tempor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in aliquam libero, sit amet fringilla enim. Ph',
			],
		},
		{
			title: 'Reviewing',
			id: 3,
			borderColor: 'border-[#33AFFF]',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nulla nec tortor posuere molestie. Quisque lobortis, mi vel elementum rutrum, risus leo tempor justo, nec vehicula erat risus in ante. Aenean varius justo ornare, tempus felis ut, scelerisque sem. Nunc ornare nisl quis semper porta. Maecenas lobortis urna lacus. Praesent tincidunt tempor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in aliquam libero, sit amet fringilla enim. Ph',
		},
		{ title: 'Done', id: 4, borderColor: 'border-[#228B22]' },
	]

	const [tasks, setTasks] = useState<TaskType[]>([])

	return (
		<>
			<section className='flex flex-col items-center h-full lg:h-screen p-8'>
				<h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold my-8 text-center'>
					Standard Kanban Board
				</h1>
				<div className='flex flex-col lg:flex-row gap-8 justify-center h-full lg:h-4/5'>
					{columns.map((column) => (
						<div key={column.id} className='w-full'>
							{/* Fixed width applied */}
							<Column 
								column={column} 
								borderColor={column.borderColor}
								deleteCol={deleteColumn}	
							/>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
