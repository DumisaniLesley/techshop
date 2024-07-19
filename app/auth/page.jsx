import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen py-12 px-5">
      <div className="mt-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to Acme</h1>
          <p className="text-muted-foreground mb-4">
            Sign in to your account or create a new one.
          </p>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Sign In</Button>
              <div className="flex items-center justify-center space-x-4 mt-8">
                <Button variant="outline" className="py-8">
                  <AiOutlineGithub className="h-10 w-10" />
                </Button>
                <Button variant="outline" className="py-8">
                  <FcGoogle className="h-10 w-10" />
                </Button>
                <Button variant="outline" className="py-8">
                  <FaFacebookF className="h-10 w-10" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Sign Up</Button>
              <div className="flex items-center justify-center space-x-4 mt-8">
                <Button variant="outline" className="py-8">
                  <AiOutlineGithub className="h-10 w-10" />
                </Button>
                <Button variant="outline" className="py-8">
                  <FcGoogle className="h-10 w-10" />
                </Button>
                <Button variant="outline" className="py-8">
                  <FaFacebookF className="h-10 w-10" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
