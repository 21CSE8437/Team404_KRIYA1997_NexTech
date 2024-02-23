
'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  var navigate = useNavigate()
  function navigateToStaff(){
    navigate('/staff')
  }
  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <div className="w-4/5 flex gap-5 justify-center items-center h-screen py-10">
      <Card className="max-w-sm">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button onClick={navigateToStaff}>Submit</Button>
      </form>
    </Card>
      </div>
    </div>
  );
}
