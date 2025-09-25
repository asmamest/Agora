import { ValidationErrors } from '@/lib/type'
import { CtaTypeEnum } from '@prisma/client'
import { create } from 'zustand'

export type WebinarFormState = {
    basicInfo: {
        webinarName?: string
        description?: string
        date?: Date
        time?: string
        timeFormat?: 'AM' | 'PM'
    }

    cta: {
        ctaLabel?: string
        tags?: string[]
        ctaType: CtaTypeEnum
        aiAgent?: string
        priceId?: string
    }

    additionalInfo: {
        lockChat?:boolean
        couponCode?: string
        couponEnabled?: boolean
    }
}

type ValidationState = {
    basicInfo: {
        valid: boolean
        errors: ValidationErrors
    }
    cta: {
        valid: boolean
        errors: ValidationErrors
    }
    additionalInfo: {
        valid: boolean
        errors: ValidationErrors
    }
}


type WebinarStore = {
    isModalOpen: boolean
    isComplete: boolean
    isSubmitting: boolean
    formData: WebinarFormState
    validation: ValidationState 

    setModalOpen: (open: boolean) => void 
    setComplete: (complete: boolean) => void
    setSubmitting: (submitting: boolean) => void

    updateBasicInfoField: <K extends keyof WebinarFormState['basicInfo']>(
        field: K,
        value: WebinarFormState['basicInfo'][K]
    ) => void

    updateCTAField: <K extends keyof WebinarFormState['cta']>(
        field: K,
        value: WebinarFormState['cta'][K]
    ) => void



    updateAdditionalInfoField     1/38/06
}

const initialState: WebinarFormState = {
    basicInfo: {
        webinarName: "",
        description: "",
        date: undefined,
        time: "",
        timeFormat:"AM",
    },
    cta: {
        ctaLabel:"",
        tags: [],
        ctaType:"BOOK_A_CALL",
        aiAgent: "",
        priceId: "",
    },
    additionalInfo:{
        lockChat: false,
        couponCode: "",
        couponEnabled: false,
    },
}

const initialValidation: ValidationState = {
    basicInfo: {valid: false, errors: {}},
    cta: { valid: false, errors: {}},
    additionalInfo: { valid: true, errors: {}}, 
}

export const useWebinarStore = create<WebinarStore>((set)=>({
    isModalOpen: false,
    isComplete: false,
    isSubmitting: false,
    FormData: initialState,
    validation: initialValidation,

     setModalOpen: (open: boolean) => set({ isModalOpen:open}), 
    setComplete: (complete: boolean) => set({ isComplete:complete}),
    setSubmitting: (submitting: boolean) => set({ isSubmitting:submitting}),
}))