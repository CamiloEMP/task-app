import { FooterHeader } from './FooterHeader'

export const Header = () => {
  return (
    <header className='sticky top-0 flex justify-between border-b p-4 shadow'>
      <div className='flex gap-4 pb-2'>
        <div className='h-8 w-8 rounded-full bg-gray-400'></div>
      </div>
      <div className='flex items-center justify-between'>
        <FooterHeader />
      </div>
    </header>
  )
}
