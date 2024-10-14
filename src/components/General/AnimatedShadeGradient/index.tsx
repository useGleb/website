import styles from './animated_shade_gradient.module.css';

const AnimatedShadeGradient = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pointer-events-none'>
      <div className='relative w-full h-full overflow-hidden '>
        <div className={styles.shade}>Animated shade gradient</div>
      </div>
    </div>
  );
};

export default AnimatedShadeGradient;
