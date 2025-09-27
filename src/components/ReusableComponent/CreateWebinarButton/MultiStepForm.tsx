import { useWebinarStore } from '@/store/useWebinarStore'
import React from 'react'

type Step = {
    id: string
    title: string 
    description: string
    component: React.ReactNode

}

type Props = {
    steps: Step[]
    onComplete: (id: string) => void 
}

const MultiStepForm = ({ steps, onComplete }: Props) => {

  const {formData, validateStep, isSubmitting, setSubmitting, setModalOpen } = useWebinarStore()
  return <div className="flex flex-col justify-center items-center bg-[#27272A]/20 border border-border rounded-3xl overflow-hidden max-w-6xl mx-auto backdrop-blur-[106px]">
    <div className="flex items-center justify-start">
      <div className="w-full md:w-1/3 p-6">
        <div className="space-y-6">
          {steps.map((step,index) => {
            1/52/18
          })}
        </div>
      </div>
    </div>
  </div>
  
}

export default MultiStepForm