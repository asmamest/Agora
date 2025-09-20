'use client'
import { Button } from '@/components/ui/button'
import { User } from '@prisma/client'
import { ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import LightningIcon from '@/icons/LightningIcon'
import React from 'react'
import PurpleIcon from '../PurpleIcon'
import CreateWebinarButton from '../CreateWebinarButton'

type Props = {user : User}

const Header = ({user}: Props) => {

    // TO DO : Stripe Subscription, Assistant, User, Leads, Webinars, Settings
    const pathname = usePathname()
    const router = useRouter()


  return <div className="w-full px-4 pt-10 sticky top-0 z-10 flex 
  justify-between items-center flex-wrap gap-4 bg-background">
    {pathname.includes('pipeline') ? (
        <Button 
            className="bg-primary/10 border border-border rounded-xl"
            variant={'outline'}
            onClick={() => router.push('/webinar')}
        >
            <ArrowLeft /> Back to Webinars
        </Button>
    ) : (
      <div className="px-4 py-2 flex justify-center text-bold 
      items-center rounded-xl bg-background border border-border 
      text-primary capitalize">
        {pathname.split('/')[1]}
      </div>
    )}
    { /* TODO : Build stripe subscription and create webinar button */}
    <div className="flex gap-6 items-center flex-wrap">
        <PurpleIcon>
            <LightningIcon />
        </PurpleIcon>

        <CreateWebinarButton />    1/26/45



      
    </div>
  </div>
  
}

export default Header  