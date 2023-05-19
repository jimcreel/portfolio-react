import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='bg-black text-accent font-sans text-xl mx-4'>
      <ul className='flex flex-row justify-start items-center'>
        <li className='m-2'>
          <Link to="/">Home</Link>
        </li>
        <li className='m-2'>
          <Link to="/about">About</Link>
        </li>
        <li className='m-2'>
          <Link to="/projects">Projects</Link>
        </li>
        <li className='ml-auto flex justify-end space-x-2'>
          <a href='https://github.com/jimcreel' target='_blank' rel='noopener noreferrer'>
            <img src='/assets/img/github-mark-white.svg' className='w-[25px]' alt='GitHub' />
          </a>
          <a href='https://www.linkedin.com/in/jim-creel' target='_blank' rel='noopener noreferrer'>
            <img src='/assets/img/icons8-linkedin.svg' className='w-[25px]' alt='LinkedIn' />
          </a>
          <a href='mailto:jim.creel@gmail.com'>
            <img src='/assets/img/Aiga_mail_white.svg.png' className='w-[25px]' alt='Email' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
