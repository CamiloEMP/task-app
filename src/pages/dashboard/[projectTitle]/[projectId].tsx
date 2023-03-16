import { useRouter } from 'next/router'
import { NavLayout } from '~/layouts/NavLayout'
import { api } from '~/utils/api'

export default function ProjectPage() {
  const { query } = useRouter()

  const { projectId, projectTitle } = query as { projectTitle: string; projectId: string }
  const projectQuery = api.project.getById.useQuery({
    id: projectId,
  })

  console.log(projectQuery)

  return (
    <NavLayout>
      <h1>{projectTitle}</h1>
    </NavLayout>
  )
}
