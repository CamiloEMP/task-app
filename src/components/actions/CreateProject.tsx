import { useDialog } from '~/hooks/useDialog'
import { api } from '~/utils/api'
import { Button } from '~/components/common/Button'
import { Dialog } from '~/components/common/Dialog'
import { useState } from 'react'
import { LoaderIcon } from '../icons/LoaderIcon'

export function CreateProject() {
  const dialogProject = useDialog()
  const [projectTitle, setProjectTitle] = useState('')
  const postProject = api.project.add.useMutation({
    onSuccess(data) {
      console.log('created', data)
    },
    onError(error) {
      console.error(error.message)
    },
    onSettled() {
      setProjectTitle('')
      dialogProject.onClose()
    },
  })

  const onHandleProject = () => {
    postProject.mutate({
      title: projectTitle,
    })
  }

  return (
    <>
      <Button
        className='px-1 py-1 text-center text-sm'
        variant='primary'
        onClick={dialogProject.onOpen}
      >
        Create new Project
      </Button>
      <Dialog
        {...dialogProject}
        className='flex w-full max-w-md flex-col gap-6 p-8'
        closable
      >
        <h1 className='text-center text-2xl font-semibold text-emerald-600'>New Project</h1>
        <div className='flex items-center gap-2'>
          <input
            value={projectTitle}
            onChange={e => setProjectTitle(e.target.value)}
            type='text'
            placeholder='Project name...'
            className='w-full rounded border-2 border-gray-300 py-1 px-2 font-medium outline-none transition ease-in-out focus:border-emerald-600'
          />
          <Button
            className='w-52 py-1 text-center'
            variant='primary'
            onClick={onHandleProject}
          >
            {!postProject.isLoading ? '¡Create!' : <LoaderIcon className='text-2xl' />}
          </Button>
        </div>
      </Dialog>
    </>
  )
}
