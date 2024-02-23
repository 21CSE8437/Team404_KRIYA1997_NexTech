import React from 'react'
import {staffData} from '../../../datas.js'

import { Table } from 'flowbite-react';
const StaffInfo = () => {
  return (
    <div className="flex">
    <div className="w-1/5"></div>
    <div className='w-4/5 h-screen flex justify-center items-center'>
      


      <Table striped>
        <Table.Head>
          <Table.HeadCell>Staff Name</Table.HeadCell>
          <Table.HeadCell>Dept</Table.HeadCell>
          <Table.HeadCell>Qualification</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            staffData.map((i)=>(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {i.staff_name}
            </Table.Cell>
            <Table.Cell>{i.dept}</Table.Cell>
            <Table.Cell>{i.qualification}</Table.Cell>
            <Table.Cell>{i.role}</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>))
          }
        </Table.Body>
      </Table>
    
    </div>
    
  </div>
  )
}

export default StaffInfo