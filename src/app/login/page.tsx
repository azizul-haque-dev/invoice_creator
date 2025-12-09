import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
   <>
   <div className="flex h-screen w-full justify-center items-center">
     <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl" >Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
          
        <Button type="submit" className="w-full">
          Login
        </Button>
 
          </div>
        </form>
      </CardContent>
     
    </Card>
   </div>
   </>
  )
}
