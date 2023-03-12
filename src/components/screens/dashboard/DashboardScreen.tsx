import { EmpyProjects } from './EmpyProjects'
import { ProjectsWrapper } from './ProjectsWrapper'

export const DashboardScreen = () => {
  return (
    <section className='flex h-full flex-auto flex-col items-center justify-center gap-12'>
      {false && <EmpyProjects />}
      <ProjectsWrapper />
    </section>
  )
}
