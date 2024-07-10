import PlusIcon from '../../icons/PlusIcon'
import ColSvg from '../../icons/ColIcon'

type AddColBtnProps = {
	onClick: () => void
	disabled?: boolean
}

export default function AddColBtn({ onClick, disabled }: AddColBtnProps) {
	const handleClick = () => {
		if (!disabled) {
			onClick()
		}
	}

	return (
		// <button
		// 	className='flex gap-x-2.5 bg-slate-100 px-6 py-3 border-black border-2 mt-10'
		// 	onClick={handleClick}
		// 	disabled={disabled}
		// >
		// 	<PlusIcon />
		// 	<h2>Add Column</h2>
		// </button>
		<button
			onClick={handleClick}
			className='flex items-center w-[16%] h-[10%] transform transition duration-500 ease-in-out hover:translate-x-1 hover:translate-y-1'
		>
			<ColSvg />
		</button>
	)
}
