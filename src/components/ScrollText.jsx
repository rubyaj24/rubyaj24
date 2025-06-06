import '../styles/scroll.css'
import { SiAdobeaftereffects,SiAdobepremierepro, SiAdobephotoshop, SiTailwindcss, SiVite } from 'react-icons/si'
import { RiReactjsLine, RiNextjsFill } from 'react-icons/ri'

const ScrollText = () => {
  // Define the items to be displayed in the scroll text
  // Each item can be a string or a logo imported from react-icons
  // Uncomment the items you want to display
  const items = [
    // { content: <SiAdobepremierepro className='text-gray-300' />, direction: "inner", py: true },
    // { content: <RiReactjsLine className='text-gray-300' />, direction: "inner-reverse", py: true },
    // { content: <SiAdobephotoshop className='text-gray-300' />, direction: "inner", py: true },
    // { content: <SiTailwindcss className='text-gray-300' />, direction: "inner-reverse", py: true },
    // { content: <RiNextjsFill className='text-gray-300' />, direction: "inner", py: true },
    { content: "Developer", direction: "inner-reverse", py: false },
    { content: "Designer", direction: "inner", py: false },
    { content: "Videographer", direction: "inner-reverse", py: false },
    { content: "Designer", direction: "inner", py: false },
    { content: "Student", direction: "inner-reverse", py: false },
    { content: "Student", direction: "inner-reverse", py: false },
    // { content: <SiAdobeaftereffects className='text-gray-300' />, direction: "inner", py: true },
    // { content: <SiVite className='text-gray-300' />, direction: "inner-reverse", py: true },
  ];

  return (
    <div className='gap-auto flex flex-col items-center justify-center'>
      {items.map((item, idx) => {
        // Generate array based on content type
        const contentArray = typeof item.content === 'string' 
          ? Array(18).fill(item.content)
          : Array(48).fill(item.content);
          
        return (
          <div key={idx} className="tag-list">
            <div className={`${item.direction} ${item.py ? 'py-2' : ''}`}>
              {contentArray.map((content, index) => (
                <div key={index} className="tag">{content}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollText
