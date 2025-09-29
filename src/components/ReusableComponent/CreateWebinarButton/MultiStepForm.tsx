import { useWebinarStore } from '@/store/useWebinarStore'
import React, { useState } from 'react'
import { motion } from 'framer-motion'


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

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [validationError, setValidationError] = useState<string | null>(null)

  const currentStep = steps[currentStepIndex]
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === steps.length - 1


  return <div className="flex flex-col justify-center items-center bg-[#27272A]/20 border border-border rounded-3xl overflow-hidden max-w-6xl mx-auto backdrop-blur-[106px]">
    <div className="flex items-center justify-start">
      <div className="w-full md:w-1/3 p-6">
        <div className="space-y-6">
          {steps.map((step,index) => {
            const isCompleted = completedSteps.includes(step.id)
            const isCurrent = index === currentStepIndex
            const isPast = index < currentStepIndex

            return(
              <div key={step.id} className="relative">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <motion.div>
                      hello worl jkhkjhkjhkk
                    </motion.div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
  
}

export default MultiStepForm