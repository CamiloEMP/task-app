import Link from 'next/link'

interface Props {
  projects: { title: string; id: string }[]
}

export const ProjectsWrapper = ({ projects }: Props) => {
  return (
    <section className='space-y-12 pt-12'>
      <h1 className='text-center text-5xl font-semibold -tracking-wider text-emerald-600'>
        PROJECTS
      </h1>
      <section className='flex flex-wrap justify-center gap-4'>
        {projects.map(project => (
          <Link
            href={`/dashboard/${project.title}/${project.id}`}
            key={project.id}
            className='flex w-60 items-center justify-center rounded-md border-2 border-emerald-600 bg-emerald-300  p-4 transition-colors hover:bg-emerald-500 '
          >
            <h3 className='text-lg'>{project.title}</h3>
          </Link>
        ))}
      </section>
    </section>
  )
}
