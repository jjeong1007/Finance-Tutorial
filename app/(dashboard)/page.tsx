import { UserButton } from "@clerk/nextjs"


export default function Home() {
  return(
    <div className="flex items-end justify-end">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}



