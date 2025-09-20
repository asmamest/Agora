import { create } from 'zustand'


type WebinarStore = {
    isModalOpen: boolean
    isComplete: boolean
    isSubmitting: boolean

    setModalOpen: (open: boolean) => void 
    setComplete: (complete: boolean) => void
    setSubmitting: (submitting: boolean) => void
}

export const useWebinarStore = create<WebinarStore>((set)=>({
    isModalOpen: false,
    isComplete: false,
    isSubmitting: false,

    setModalOpen: (open: boolean) => set({ isModalOpen:open}), 
    setComplete: (complete: boolean) => set({ isComplete:complete}),
    setSubmitting: (submitting: boolean) => set({ isSubmitting:submitting}),
}))