

import home from './icons/home.svg';
import github from './icons/github.svg';
import blog from './icons/blog.svg';
import linkedin from './icons/ln.svg';
import insta from './icons/insta.svg';

const smallmenu = () => {
  return (
    <div className='section1'>
      <a href='#' className='icon' id='defaultbg'><img className='home' src={home}/></a>
      <a href='https://github.com/arunyagoojar' className='icon'><img className='github' src={github}/></a>
      <a href='https://arunyagoojar.me/blog/' className='icon'><img className='blog' src={blog}/></a>
      <a href='https://www.linkedin.com/in/arunyagoojar/' className='icon'><img className='linkedin' src={linkedin}/></a>
      <a href='http://instagram.com/arunya_goojar/' className='icon'><img className='insta' src={insta}/></a>
    </div>
  );
};

export default smallmenu;