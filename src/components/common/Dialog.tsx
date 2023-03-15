import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '../icons/CloseIcon'

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
  className?: string
}

export function Dialog({ children, isOpen, className, onClose, closable = false }: Props) {
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
                className={`relative rounded-md bg-slate-100 ${className ?? ''}`}
                variants={modal}
              >
                {children}
                {closable && (
                  <button
                    onClick={_ => onClose?.()}
                    className='absolute top-2 right-2 outline-none'
                  >
                    <CloseIcon className='text-2xl text-neutral-600 transition-colors hover:text-emerald-600' />
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
