export interface BoxProps {
  size?: number;
  color?: string;
}

export function Box(props: BoxProps) {
  const { size = 100, color = 'red' } = props;

  return <div style={{ width: size, height: size, backgroundColor: color }} />;
}

export default Box;
