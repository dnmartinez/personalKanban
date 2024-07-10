// import { useNavigate } from 'react-router-dom'
// import purpleBtn from '../assets/purpleBtn.svg'
// import yellowBtn from '../assets/yellowBtn.svg'
// import CreateBtn from '../components/CreateBtn'

// export default function Home() {
// 	const navigate = useNavigate()

// 	return (
// 		<>
// 			<div className='flex flex-col h-screen w-screen p-10 bg-black text-white'>
// 				<h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold mt-8 text-center'>
// 					Kanban Board
// 				</h1>
// 				<div className='flex flex-col md:flex-row flex-1 justify-center items-center flex-grow'>
// 					<div className=' border-4 border-[#c187f1] rounded-3xl m-6 p-6 md:m-10 md:p-10 w-full md:w-1/2 rectangle-1-home'>
// 						<h4 className='text-xl font-semibold'>Custom Kanban Board</h4>
// 						<p className='mt-4'>
// 							A Kanban board that allows you to customize and tailor it to your
// 							needs.
// 						</p>
// 						<button
// 							className='mt-4 transform transition duration-500 ease-in-out hover:translate-x-2 hover:translate-y-2'
// 							onClick={() => navigate('/custom-kanban')}
// 						>
// 							<CreateBtn color={'purple'} />
// 						</button>
// 					</div>
// 					<div className=' border-4 border-[#FF7EB9] rounded-3xl  m-6 p-6 md:m-10 md:p-10 w-full md:w-1/2 rectangle-2-home'>
// 						<h4 className='text-xl font-semibold'>Standard Kanban Board</h4>
// 						<p className='mt-4'>
// 							A standard Kanban board with predefined settings you are familiar
// 							with.
// 						</p>
// 						<button
// 							className='mt-4 transform transition duration-500 ease-in-out hover:translate-x-2 hover:translate-y-2'
// 							onClick={() => navigate('/standard-kanban')}
// 						>
// 							<CreateBtn color={'yellow'} />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

import { useNavigate } from 'react-router-dom'

import CreateBtn from '../components/buttons/CreateBtn'

export default function Home() {
	const navigate = useNavigate()

	return (
		<>
			<div className='flex flex-col h-screen w-screen p-10 bg-black text-white relative'>
				<h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold mt-8 text-center'>
					Kanban Board
				</h1>
				<div className='flex flex-col md:flex-row flex-1 justify-center items-center flex-grow'>
					<div className='border-4 border-[#39FF14] rounded-3xl m-6 p-6 md:m-10 md:p-10 w-full md:w-1/2 rectangle-home relative'>
						<h4 className='text-xl font-semibold'>Custom Kanban Board</h4>
						<p className='mt-4'>
							A Kanban board that allows you to customize and tailor it to your
							needs.
						</p>
						<button
							className='mt-4 transform transition duration-500 ease-in-out hover:translate-x-2 hover:translate-y-2 z-10'
							onClick={() => navigate('/custom-kanban')}
						>
							<CreateBtn color={'purple'} />
						</button>
						{/* Overlapping div */}
						<div className='absolute bottom-[-15px] right-[-15px] w-full h-full border-4 border-[#C187F1] rounded-3xl pointer-events-none'></div>
					</div>
					<div className='border-4 border-[#007FFF] rounded-3xl m-6 p-6 md:m-10 md:p-10 w-full md:w-1/2 rectangle-home relative'>
						<h4 className='text-xl font-semibold'>Standard Kanban Board</h4>
						<p className='mt-4'>
							A standard Kanban board with predefined settings you are
							familiar with.
						</p>
						<button
							className='mt-4 transform transition duration-500 ease-in-out hover:translate-x-2 hover:translate-y-2 z-10'
							onClick={() => navigate('/standard-kanban')}
						>
							<CreateBtn color={'yellow'} />
						</button>
						{/* Overlapping div */}
						<div className='absolute bottom-[-15px] right-[-15px] w-full h-full border-4 border-[#F4D738] rounded-3xl pointer-events-none'></div>
					</div>
				</div>
			</div>
		</>
	)
}
