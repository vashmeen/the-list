'use client';

import { Database } from '@/db_types';

type Props = {
  todoItems: Database["public"]['Tables']['todo']['Row'][]
}

const List = ({ todoItems }: Props) => {

  return (
    <ul className='space-y-2'>
      {todoItems.map((item, index) => (
        <li className='c-gray12 b-1 b-gray7 rd-xl p-4' key={index}>
          {item.name}
        </li>
      ))}
    </ul>
  )
};

export default List;