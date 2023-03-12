export const Sidebar = () => {
  return (
    <header className='sticky top-0 flex max-h-screen w-60 flex-auto flex-col justify-between border-r p-4 shadow'>
      <div className='flex flex-auto flex-col items-center gap-4 pb-2'>
        <div className='h-28 w-28 rounded-full bg-gray-400'></div>
        <span>Projects</span>
        <ul className='h-auto overflow-auto'>
          <li>----</li>
          <li>----</li>
          <li>----</li>
        </ul>
      </div>
      <div className='flex flex-auto flex-col justify-between border-t-2 border-gray-300 pt-2'>
        <button className='rounded-md bg-neutral-400 px-2 py-1 font-semibold text-neutral-900'>
          Create new Project
        </button>
        <div className='flex items-center justify-between gap-2'>
          <div className='h-5 w-5 rounded-full bg-gray-400'></div>
          <button className='rounded-md bg-neutral-400 px-2 py-1 font-semibold text-neutral-900'>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
