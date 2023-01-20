'use client';
import ThemeToggler from './ThemeToggler';

const HeaderContent = ({ children, ...props }: Children & Attrs<"div">) => {

  return (
    <div {...props} className='flex gap-2 '>
      <a className='fw-900 leading-3'>BODO<br /> TODO</a>
      <nav></nav>
      <ThemeToggler className='mis-auto' />
    </div>
  )
};

export default HeaderContent;