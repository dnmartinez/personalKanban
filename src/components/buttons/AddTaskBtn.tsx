import PlusIcon from '../../icons/PlusIcon'

type AddTaskBtnProps = {
	onClick: () => void
	disabled?: boolean
}

export default function AddTaskBtn({ onClick, disabled }: AddTaskBtnProps) {
	const handleClick = () => {
		if (!disabled) {
			onClick()
		}
	}

	return (
		<div className='tooltip text-white font-semibold' data-tip='Add Task'>
			<button className='m-0 p-0' onClick={handleClick} disabled={disabled}>
				<PlusIcon />
			</button>
		</div>
	)
}
