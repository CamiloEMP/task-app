/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouter } from 'next/router'
import { NavLayout } from '~/layouts/NavLayout'
import { api } from '~/utils/api'
import taks_mock from '~/mocks/Tasks.json'
import { DragDropContext, Draggable, type DropResult } from 'react-beautiful-dnd'
import { StrictModeDroppable as Droppable } from '~/components/actions/StrictModeDroppable'
import { useState } from 'react'
import { move, reorder } from '~/utils/drop.utils'

export default function ProjectPage() {
  const { query } = useRouter()
  const { projectId, projectTitle } = query as { projectTitle: string; projectId: string }
  const [tasks, updateTasks] = useState([
    taks_mock,
    taks_mock.map(task => ({ ...task, id: `${task.id}-1` })),
  ])

  console.log(tasks)

  const projectQuery = api.project.getById.useQuery(
    {
      id: projectId,
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: false,
    }
  )

  // TODO: Add types
  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const sourceIndex = source.droppableId
    const destinationIndex = destination.droppableId
    const draft = structuredClone(tasks)

    if (sourceIndex === destinationIndex) {
      const itemsReordered = reorder<any>(
        tasks[sourceIndex as any]!,
        source.index,
        destination.index
      )
      draft[sourceIndex as any] = itemsReordered
    } else {
      const itemsMoved = move<any>(
        tasks[sourceIndex as any]!,
        tasks[destinationIndex as any]!,
        source,
        destination
      )

      draft[sourceIndex as any] = itemsMoved[sourceIndex as any]!
      draft[destinationIndex as any] = itemsMoved[destinationIndex as any]!
    }

    updateTasks(draft)
  }

  return (
    <NavLayout>
      <section className='flex items-center justify-between gap-4'>
        <h1 className='text-2xl font-semibold text-emerald-500'>{projectTitle}</h1>
        <div>
          <button className='w-20'>Tags</button>
        </div>
      </section>
      <section className='flex gap-4'>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {tasks.map((tasksColumn, index) => (
            <Droppable
              key={index}
              droppableId={`${index}`}
            >
              {(provided, snapshot) => (
                <section
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tasksColumn.map((task, i) => (
                    <Draggable
                      index={i}
                      draggableId={task.id}
                      key={task.id}
                    >
                      {provided => (
                        <article
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {task.title}
                        </article>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </section>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </section>
    </NavLayout>
  )
}
