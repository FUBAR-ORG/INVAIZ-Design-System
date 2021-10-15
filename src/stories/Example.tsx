export interface ComponentProps {
  text: string;
}

export default function Component({ text }: ComponentProps) {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        width: '200px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}
