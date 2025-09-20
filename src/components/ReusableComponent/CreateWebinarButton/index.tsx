import { useWebinarStore } from '@/app/useWebinarStore'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import PlusIcon from '@/icons/PlusIcon'
import React from 'react'

type Props = {}

function CreateWebinarButton({}: Props) {
    const { isModalOpen,setModalOpen } = useWebinarStore()
  return <Dialog
            open={isModalOpen}
            onOpenChange={setModalOpen}
        >
            <DialogTrigger asChild>
                <button 
                    className="rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2 border
                    border-border bg-primary/10 backdrop-blur-sm text-sm font-normal text-primary
                    hover:bg-primary-20"
                    onClick={()=> setModalOpen(true)}
                >
                    <PlusIcon />
                    Create Webinar
                </button>
            </DialogTrigger>
        </Dialog>
}

export default CreateWebinarButton