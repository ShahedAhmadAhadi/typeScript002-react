interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Child {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      Child {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildFunctionC: React.FunctionComponent<ChildProps> = ({
  color,
}) => {
  return <div>{color}</div>;
};
