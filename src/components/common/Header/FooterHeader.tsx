import { signOut } from 'next-auth/react'
import { CreateProject } from '~/components/actions/CreateProject'
import { SettingsIcon } from '~/components/icons/SettingsIcon'
import { SignoutIcon } from '~/components/icons/SignoutIcon'
import { Button } from '../Button'

export const FooterHeader = () => {
  return (
    <div className='flex items-center justify-around gap-2'>
      <CreateProject />
      <Button
        className='px-4 py-1 text-sm'
        icon={<SignoutIcon />}
        variant='secondary'
        onClick={() => void signOut()}
      >
        Sign out
      </Button>
      <button className='rounded-full p-1 transition-colors hover:bg-emerald-300/50'>
        <SettingsIcon className='w-7 text-emerald-600' />
      </button>
    </div>
  )
}
