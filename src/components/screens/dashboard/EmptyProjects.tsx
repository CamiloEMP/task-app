import { Button } from '~/components/common/Button'

export const EmptyProjects = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-2xl font-semibold'>You do not have projects created yet</h2>
      <Button
        variant='primary'
        className='px-4 py-1 text-lg'
      >
        Create One
      </Button>
    </div>
  )
}
