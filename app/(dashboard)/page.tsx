import { UserButton } from "@clerk/nextjs"


export default function Home() {
  return(
    <div>
      <UserButton afterSignOutUrl="/"/>
      <p>hello world</p>
    </div>
  )
}



