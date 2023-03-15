import { EmptyComponentWrapper } from '~/components/common/EmptyComponentWrapper'
import { api } from '~/utils/api'
import { EmptyProjects } from './EmptyProjects'
import { ProjectsWrapper } from './ProjectsWrapper'

export const DashboardScreen = () => {
  const query = api.project.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return (
    <section className='flex h-full flex-auto flex-col items-center justify-center gap-12'>
      <EmptyComponentWrapper
        data={query.data}
        isLoading={query.isLoading || query.isFetching}
        EmptyComponent={<EmptyProjects />}
        NonEmptyComponent={<ProjectsWrapper projects={query.data ?? []} />}
      />
    </section>
  )
}
