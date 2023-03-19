/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type DraggableLocation } from 'react-beautiful-dnd'

export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const draft = structuredClone(list)

  const [itemRemoved] = draft.splice(startIndex, 1)

  draft.splice(endIndex, 0, itemRemoved!)

  return draft
}

type ResultMoveItem<T> = { [index: string]: T[] }

export const move = <T>(
  listSource: T[],
  listDestination: T[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const draftSource = structuredClone(listSource)
  const draftDestination = structuredClone(listDestination)

  const [itemRemoved] = draftSource.splice(droppableSource.index, 1)

  draftDestination.splice(droppableDestination.index, 0, itemRemoved!)

  const result = {} as ResultMoveItem<T>

  result[droppableSource.droppableId] = draftSource ?? []
  result[droppableDestination.droppableId] = draftDestination

  return result
}
