"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { TextSearch,ScrollText } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Copy } from "lucide-react"
 
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


interface Props {
  name: string;
  pin: string;
  firstname: any;
  lastname: any;
  image: string;
}

const AccountProfile = ({ name, pin, firstname, lastname, image }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [pinNumber, setPinNumber] = useState(pin);
  const [open, setOpen] = useState(false);

  let displayName = decodeURIComponent(name);



  const onSubmit = async () => {
    // console.log(pathname);
    // console.log(typeof name);
    const nameString = JSON.stringify(name);
    const sanitizedName = nameString.replace(/","/g, '/'); 
    const resultString = sanitizedName.replace(/^\[|"|]$/g, '');
    // console.log(`/results/${resultString}`);

    if (pathname === `/results/${resultString}`) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setOpen(true)
    // await fetchData();
  };

  const [result, setResult] = useState({ users: [] });
  useEffect(() => {
    setResult({ users: [] });
    fetch(`https://gec_results-1-b4240270.deta.app/getResults?name=${name}&pin=${pinNumber}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResult({ users: data });
        setOpen(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [open]);

  console.log(result.users)


  return (
<div>
             <div className="flex flex-col gap-7">

            <div className="cursor-pointer">

                <Image src="/assets/arrow-left.png"
                alt="left-arrow"
                width={24}
                height={24}
                onClick={onSubmit} />

            </div>
            <div className="mx-auto max-w-[87vw]">
            <Card className="bg-dark-1">
              <CardHeader>
                <div className="grid justify-items-center mx-auto max-h-auto px-4 gap-3.5">
                <Image src={image}
                    alt="profile photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full"
                    />
                <CardTitle className="head-text-2 text-light-2">Name: {firstname + " " + lastname}</CardTitle>
                <CardTitle className="head-text-2 text-light-2">Pin No: {pinNumber.toUpperCase()}</CardTitle>
                <CardTitle className="head-tex-2 text-light-2 text-center leading-relaxed mb-4">{displayName}</CardTitle> 
                {/* <div className="grid justify-items-center"> */}
                {/* <CardDescription className="head-text-2 text-light-1">Name: {firstname + " " + lastname}</CardDescription> */}
                {/* <CardDescription className="text-regular-semibold text-light-1">Pin No: {pinNumber.toUpperCase()}</CardDescription> */}
                {/* </div> */}
                {/* <CardDescription>Card Description</CardDescription> */}
                </div>
                <div>
                  {result.users.length === 0 ?(<div className='no-result grid justify-items-center'><Image src="/assets/loader.svg" alt='loader image' width={44} height={44} /><p className='mt-4'>Loading...</p></div>) :(
                    result.users.msg === 'not found' ? (<p className="no-result">No Result Found</p>) :(
    <Table className="text-light-1 w-full max-w-auto">
      <TableCaption>Designed By M<sup>2</sup></TableCaption>  
      <TableCaption>**Enable Desktop Mode for Better Viewing**</TableCaption>  
      <TableHeader>
        <TableRow >
          <TableHead className="">Subjects</TableHead>
          <TableHead className="">Subject Code</TableHead>
          <TableHead className="">Grade</TableHead>
          <TableHead className="">Credits</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result.users.data.map((data:any) => (
          <TableRow key={data.Htno} className={data.Grade === 'F' ? 'text-red-500' : data.Grade === 'ABSENT' ? 'text-red-500' : ''} >
            <TableCell className="font-bold">{data.Subname}</TableCell>
            <TableCell>{data.Subcode}</TableCell>
            <TableCell >{data.Grade}</TableCell>
            <TableCell className="text-light-2">{data.Credits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          {/* <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell> */}
        </TableRow>
      </TableFooter>
    </Table>
   ) )}
    </div>
              </CardHeader>

              <CardContent >
 
              </CardContent>
              <CardFooter className="flex justify-center mx-auto max-w-2xl">
                {/* <p>Card Footer</p> */}
                <div className="flex flex-row justify-center">

                <Dialog>
      <DialogTrigger asChild>

        <Button className="bg-primary-500 text-light-2"><TextSearch className="mr-2 h-6 w-6" />Search Other Result</Button>
      </DialogTrigger>
      <DialogContent className="rounded-md">
          <DialogHeader>
            <DialogTitle>Enter The Pin Number</DialogTitle>
            <DialogDescription>
              Make changes to your Pin Number here. Click Submit when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Pin No.
              </Label>
              <Input
                id="name"
                value={pinNumber}
                maxLength={10}
                onChange={(e) => setPinNumber(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
          <DialogClose >
            <Button className="bg-primary-500 text-light-2" type="button" onClick={handleSubmit} >Submit</Button>
            <Button  type="button" variant="destructive" className="ml-10" >Close</Button>
            </DialogClose>
          </DialogFooter>

      </DialogContent>
    </Dialog>


                </div>
              </CardFooter>
            </Card>
        </div>
        </div>
        </div>
  );
};

export default AccountProfile;