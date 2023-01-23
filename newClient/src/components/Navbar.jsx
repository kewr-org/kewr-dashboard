import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'
// import ConnectKeplr from './ConnectKeplr';

function Navbar() {
  return (
    <div>
      <nav className='bg-white border-red-500'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5'>
          <div>
          <a href='/' className='flex items-center'>
            <img src={logo} className='h-6 mr-3 sm:h-9' alt='Logo' />
          </a>
          </div>
          <div>
          <a href='#' className='flex items-center'>
          <div>
          {/* <ConnectKeplr /> */}
          </div>
          </a>
          </div>
        </div>
      </nav>
      <nav className='bg-red-500 text-white'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto md:px-6'>
          <div className='flex items-center'>
            <ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
              {[
                ['Home', '/'],
                ['Page One', '/page1'],
                ['Page Two', '/page2'],
                ['Page Three', '/page3'],
                ['Page Four', '/page4'],
                ['Page Five', '/page5'],
              ].map(([title, endPoint]) => (
                <li>
                  <Link
                    to={endPoint}
                    className='dark:text-white hover:underline'
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
