import { create } from 'zustand'

export interface ModalStoreInterface {
  movieId?: string
  isOpen: boolean
  openModal: (movieId: string) => void
  closeModal: () => void
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movidId: string) => set({ isOpen: true, movieId: movidId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}))

export default useInfoModal
