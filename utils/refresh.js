'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const refresh = () => {
  revalidatePath('/')
  redirect('/')
}

export default refresh