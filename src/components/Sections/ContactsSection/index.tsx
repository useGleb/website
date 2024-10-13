import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ContactsSectionProps = {
  className?: string;
};

const ContactsSection = ({ className }: ContactsSectionProps) => {
  return (
    <div className={`flex gap-12 ${className}`}>
      <Link href='https://www.linkedin.com/in/gleb-kolosov-7818241ab/'>
        <Image
          src='/LinkedIn.svg'
          width={42}
          height={42}
          alt='Linkedin Icon'
          className='cursor-pointer transition-transform hover:scale-110'
        />
      </Link>
      <Link href='https://www.github.com/useGleb'>
        <Image
          src='/GitHub.svg'
          width={42}
          height={42}
          alt='Github Icon'
          className='cursor-pointer transition-transform hover:scale-110'
        />
      </Link>
      <Link href='mailto:it.gleb.kolosov@gmail.com'>
        <Mail
          width={42}
          height={42}
          className='cursor-pointer transition-transform hover:scale-110'
        />
      </Link>
    </div>
  );
};

export default ContactsSection;
