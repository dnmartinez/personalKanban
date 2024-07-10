import TrashIcon from "../../icons/TrashIcon"

type DeleteColBtnProps = {
	onClick: () => void
	disabled?: boolean
}

export default function AddTaskBtn({ onClick, disabled }: DeleteColBtnProps) {
	const handleClick = () => {
		if (!disabled) {
			onClick()
		}
	}

	return (
		<div className='tooltip text-white font-semibold' data-tip='Add Task'>
			<button className='m-0 p-0' onClick={handleClick} disabled={disabled}>
				<TrashIcon />
			</button>
		</div>
	)
}
