import { FooterHeader } from './FooterHeader'

export const Header = () => {
  return (
    <header className='sticky top-0 flex max-h-screen max-w-[16rem] flex-auto flex-col justify-between border-r p-4 shadow'>
      <div className='flex flex-auto flex-col items-center gap-4 pb-2'>
        <div className='h-28 w-28 rounded-full bg-gray-400'></div>
        <span className='text-lg'>Projects</span>
        <ul className='h-auto overflow-auto'>
          <li>----</li>
          <li>----</li>
          <li>----</li>
        </ul>
      </div>
      <div className='flex flex-auto flex-col justify-between border-t-2 border-gray-300 pt-2'>
        <FooterHeader />
      </div>
    </header>
  )
}
