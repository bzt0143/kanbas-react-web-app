import Modules from '../Modules';
import CourseStatus from './Status';
import ProtectedContent from '../ProtectedContent';

export default function Home() {
  return (
    <div className='d-flex' id='wd-home'>
      <div className='flex-fill'>
        <Modules />
      </div>
      <ProtectedContent requiredRole={['FACULTY']}>
      <div className='d-none d-md-block ms-3'>
        <CourseStatus />
      </div>
      </ProtectedContent>
    </div>
  );
}
