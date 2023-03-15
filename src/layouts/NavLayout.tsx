import { Header } from '~/components/common/Header/Header'

export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='flex-auto p-4'>{children}</main>
    </>
  )
}
