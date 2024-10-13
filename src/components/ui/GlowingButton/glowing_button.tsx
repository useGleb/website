import styles from './glowing_button.module.css';

type GlowingButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const GlowingButton = ({ children, className }: GlowingButtonProps) => {
  return (
    <button className={styles.glowing_button}>
      <div className={`bg-background w-full h-full ${className}`}>
        {children}
      </div>
    </button>
  );
};

export default GlowingButton;
