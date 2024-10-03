import { AiOutlineDashboard } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';
import { FaInbox, FaRegCircleUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link

export default function KanbasNavigation() {
  return (
    <div
      id='wd-kanbas-navigation'
      style={{ width: 110 }}
      className='list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2'
    >
      <a
        id='wd-neu-link'
        target='_blank'
        href='https://www.northeastern.edu/'
        className='list-group-item bg-black border-0 text-center'
      >
        <img src='/images/NEU.png' width='75px' alt='NEU Logo' />
      </a>

      {/* Account Link */}
      <NavLink
        to='/Kanbas/Account'
        id='wd-account-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <FaRegCircleUser className='fs-1 text-white' />
        Account
      </NavLink>

      {/* Dashboard Link */}
      <NavLink
        to='/Kanbas/Dashboard'
        id='wd-dashboard-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <AiOutlineDashboard className='fs-1 text-danger' />{' '}
        {/* Keep icon red */}
        Dashboard
      </NavLink>

      {/* Courses Link */}
      <NavLink
        to='/Kanbas/Courses'
        id='wd-course-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <LiaBookSolid className='fs-1 text-danger' /> 
        Courses
      </NavLink>

      {/* Calendar Link */}
      <NavLink
        to='/Kanbas/Calendar'
        id='wd-calendar-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <IoCalendarOutline className='fs-1 text-danger' /> 
        Calendar
      </NavLink>

      {/* Inbox Link */}
      <NavLink
        to='/Kanbas/Inbox'
        id='wd-inbox-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <FaInbox className='fs-1 text-danger' /> 
        Inbox
      </NavLink>

      {/* Labs Link */}
      <NavLink
        to='/Labs'
        id='wd-settings-link'
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? 'text-danger bg-white' : 'text-white'
          }`
        }
      >
        <LiaCogSolid className='fs-1 text-danger' /> 
        Labs
      </NavLink>
    </div>
  );
}
