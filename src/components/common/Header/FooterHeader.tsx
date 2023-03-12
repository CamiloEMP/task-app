import { signOut } from 'next-auth/react'
import { SettingsIcon } from '~/components/icons/SettingsIcon'
import { SignoutIcon } from '~/components/icons/SignoutIcon'
import { Button } from '../Button'

export const FooterHeader = () => {
  return (
    <>
      <Button
        className='px-1 py-1 text-center'
        variant='primary'
      >
        Create new Project
      </Button>
      <div className='flex items-center justify-around gap-2'>
        <button className='rounded-full p-1 transition-colors hover:bg-black/10'>
          <SettingsIcon />
        </button>
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
