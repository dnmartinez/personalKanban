import '../styles/Task.css'
export default function Task({ title, content, importance, handleDelete }) {
	return (
		<>
			<div className='card w-96 bg-[#f4d738] border-black border-[1px] rounded-xl rectangle'>
				<div className='card-body'>
					<h2 className='card-title'>{title}</h2>
					<p>{content}</p>
					<span></span>
				</div>
			</div>
		</>
	)
}
