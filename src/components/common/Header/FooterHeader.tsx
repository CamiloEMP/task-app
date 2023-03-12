import { signOut } from 'next-auth/react'
import { SignoutIcon } from '~/assets/icons/SignoutIcon'
import { Button } from '../Button'

export const FooterHeader = () => {
  return (
    <>
      <button className='rounded-md bg-neutral-400 px-2 py-1 font-semibold text-neutral-900'>
        Create new Project
      </button>
      <div className='flex items-center justify-between gap-2'>
        <div className='h-5 w-5 rounded-full bg-gray-400'></div>
        <Button
          className='px-4 py-1 text-sm'
          icon={SignoutIcon}
          variant='secondary'
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </div>
    </>
  )
}
