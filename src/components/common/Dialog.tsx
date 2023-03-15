import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1 },
  },
}
interface Props {
  children: React.ReactNode
  isOpen: boolean
  closable?: boolean
  onClose?: () => void
}

export default function Dialog({ children, isOpen, onClose, closable = false }: Props) {
  useEffect(() => {
    if (!closable) return

    const closeDialog = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    window.addEventListener('keyup', closeDialog)

    return () => {
      window.removeEventListener('keyup', closeDialog)
    }
  }, [closable, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {createPortal(
            <motion.div
              animate='visible'
              className='fixed inset-0 z-50 grid h-full w-full place-items-center bg-black/50'
              exit='hidden'
              id='modal'
              initial='hidden'
              variants={backdrop}
            >
              <motion.div
                className='relative rounded-md bg-slate-100 p-4'
                variants={modal}
              >
                {children}
                {closable && (
                  <button
                    onClick={_ => onClose?.()}
                    className='absolute top-2 right-2'
                  >
                    x
                  </button>
                )}
              </motion.div>
            </motion.div>,
            document.body
          )}
        </>
      )}
    </AnimatePresence>
  )
}
