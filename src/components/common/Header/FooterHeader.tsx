import { signOut } from 'next-auth/react'
import { SettingsIcon } from '~/components/icons/SettingsIcon'
import { SignoutIcon } from '~/components/icons/SignoutIcon'
import { useDialog } from '~/hooks/useDialog'
import { api } from '~/utils/api'
import { Button } from '../Button'
import Dialog from '../Dialog'

export const FooterHeader = () => {
  const dialogProject = useDialog()
  const postProject = api.project.add.useMutation()

  return (
    <>
      <Button
        className='px-1 py-1 text-center'
        variant='primary'
        onClick={dialogProject.onOpen}
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
          onClick={() => void signOut()}
        >
          Sign out
        </Button>
      </div>
      <Dialog
        {...dialogProject}
        closable
      >
        <button>Cerrar</button>
      </Dialog>
    </>
  )
}
