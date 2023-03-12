import { Sidebar } from '~/components/Sidebar'

export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex min-h-screen gap-4'>
      <Sidebar />
      <main className='flex-auto p-4'>{children}</main>
    </section>
  )
}
