import { type GetServerSideProps } from 'next'
import { DashboardScreen } from '~/components/screens/dashboard/DashboardScreen'
import { NavLayout } from '~/layouts/NavLayout'
import { getServerAuthSession } from '~/server/auth'

export default function Dashboard() {
  return (
    <NavLayout>
      <DashboardScreen />
    </NavLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerAuthSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
