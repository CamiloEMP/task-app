import { Header } from '~/components/common/Header/Header'

export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex min-h-screen gap-4'>
      <Header />
      <main className='flex-auto p-4'>{children}</main>
    </section>
  )
}
