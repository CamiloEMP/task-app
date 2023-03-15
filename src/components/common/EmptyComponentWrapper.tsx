/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEmpty from 'lodash.isempty'
import { LoaderIcon } from '../icons/LoaderIcon'

interface Props {
  isLoading: boolean
  data: any
  EmptyComponent: React.ReactNode
  NonEmptyComponent: React.ReactNode
}

export function EmptyComponentWrapper({
  data,
  EmptyComponent,
  NonEmptyComponent,
  isLoading,
}: Props) {
  return (
    <div>{isLoading ? <LoaderIcon /> : isEmpty(data) ? EmptyComponent : NonEmptyComponent}</div>
  )
}
