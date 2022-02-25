import classes from './button.module.scss';

export interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  const { title, onClick } = props;

  return (
    <button className={classes['container']} onClick={onClick}>
      <span className={classes['title']}>{title}</span>
    </button>
  );
}

export default Button;
