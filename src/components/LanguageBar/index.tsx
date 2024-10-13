import { Globe } from 'lucide-react';
import Link from 'next/link';

type LanguageBarProps = {
  className?: string;
};
const LanguageBar = ({ className }: LanguageBarProps) => {
  return (
    //Could have used cn, but will do for our use case
    <div className={`flex flex-row gap-2 text-xl ${className} absolute top-4`}>
      <Globe />
      <Link href='/' className='hover:underline' locale='en'>
        EN
      </Link>
      <Link href='/' className='hover:underline' locale='ru'>
        RU
      </Link>
      <Link href='/' className='hover:underline' locale='bg'>
        BG
      </Link>
    </div>
  );
};

export default LanguageBar;
