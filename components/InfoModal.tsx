import { FC, useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import PlayButton from './PlayButton'
import FavoriteButton from './FavoriteButton'
import useInfoModal from '@/hooks/useInfoModal'
import useMovie from '@/hooks/useMovie'

interface InfoModalProps {
  visible?: boolean
  onClose: any
}

const InfoModal: FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible)
  const { movieId } = useInfoModal()
  const { data = {} } = useMovie(movieId as string)
  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible])
  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])
  if (!visible) {
    return null
  }
  return (
    <div
      className="
    z-50
    transition
    duration-300
    bg-black
    bg-opacity-80
    justify-center
    icons-center
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0 
  "
    >
      <div
        className="
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
        "
      >
        <div
          className={`
             ${isVisible ? 'scale-100' : 'scale-0'}
             transform
             duration-300
             relative
             flex-auto
             bg-zinc-900
             drop-shadow-md
            `}
        >
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              muted
              loop
              autoPlay
            />
            <div
              onClick={handleClose}
              className="
                cursor-pointer
                absolute
                top-3
                right-3
                h-10
                w-10
                rounded-full
                bg-black
                bg-opacity-70
                flex
                items-center
                justify-center
            "
            >
              <AiOutlineClose size={20} className="text-white" />
            </div>
            <div
              className="
                absolute 
                botton-[10%]
                left-10
            "
            >
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
            </div>
          </div>
          <div className="px-12 py-14">
            <p className="text-white text-lg">
              <span className="text-2xl font-semibold">Duration:</span>{' '}
              {data?.duration}
            </p>
            <p className="text-white text-lg">
              <span className="text-2xl font-semibold">Genre:</span>{' '}
              {data?.genre}
            </p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InfoModal
