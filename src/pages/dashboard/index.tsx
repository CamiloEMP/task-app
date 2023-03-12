import { type GetServerSideProps } from 'next'
import { getServerAuthSession } from '~/server/auth'

export default function Dashboard() {
  return <div>Dashboard</div>
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
