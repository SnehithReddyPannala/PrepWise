"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import  Image  from "next/image"
import Link from "next/link"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const authFormSchema=(type: FormType)=>{
return z.object({
    name:type==="sign-up"?z.string().min(2,"Name must be at least 2 characters").max(50,"Name must be at most 50 characters"):z.string().optional(),
    email:z.string().min(2,"Email must be at least 2 characters").max(100,"Email must be at most 100 characters").email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters").max(100,"Password must be at most 100 characters"),
})
}

const AuthForm = ({type}:{type:FormType}) => {
    const router=useRouter();
    const formSchema=authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange", // validate as you type
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
       if(type==="sign-up"){
    toast.success(`Hey, ${values.name}! Account created Successfully please Sign In🚀`);
    router.push("/sign-in");
       }else{
        toast.success(`Welcome back! You have signed in successfully🚀`);
        router.push("/");
       }
    }catch(error){
        toast.error(`Something went wrong: ${error}`)
    }
  }
  const isSignIn=type==="sign-in";
  return (
    <div className="max-w-sm mx-auto card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="Logo" height={32} width={38} />
                <h2 className="text-primary-100">PrepWise</h2>
            </div>
            <h3>Practice job interview with AI</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn &&
             <FormField control={form.control} 
            name="name" 
            label="Name" 
            placeholder="Snehith Reddy"/>}
             <FormField control={form.control} 
            name="email" 
            label="Email" 
            placeholder="xyz@gmail.com"
            type="email"
            />
             <FormField control={form.control} 
            name="password" 
            label="Password" 
            placeholder="Enter your password"
            type="password"
            />
          <Button type="submit" className="w-full btn">
            {isSignIn ? "Sign In" : "Create an Account"}
          </Button>
        </form>
      </Form>
      <p className="text-center">
        {isSignIn ? "No account yet?" : "Already have an account?"}
        <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
          {!isSignIn ? "Sign In" : "Sign Up"}
        </Link>
      </p>
      </div>
    </div>
  )
}

export default AuthForm
