
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

export function DataTable(result:[]) {
    return (
        <div>
    <Table className="text-light-1 w-full table-auto">
      <TableCaption>Designed By M<sup>2</sup></TableCaption>  
      <TableHeader>
        <TableRow >
          <TableHead className="w-1/2 sm:w-auto text-sm">Subjects</TableHead>
          {/* <TableHead className="">Subject Code</TableHead> */}
          <TableHead className="w-1/2 sm:w-auto text-sm">Grade</TableHead>
          <TableHead className="w-1/2 sm:w-auto text-sm text-right">Credits</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result.users.map((data:[]) => (
          <TableRow key={data.Htno} className={data.Grade === 'F' ? 'text-red-500' : ''} >
            <TableCell className="font-semibold text-sm">{data.Subname}</TableCell>
            {/* <TableCell>{data.Subcode}</TableCell> */}
            <TableCell >{data.Grade}</TableCell>
            <TableCell className="text-left">{data.Credits}</TableCell>
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
    </div>
    )

};

