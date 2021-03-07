interface ChildProps {
    color: string;
    onClick: () => void;
}

// With this definition of component, typescript doesn't know
// that this is a react component, so, the properties that
// a normal react componanet has will not be read by TS
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

// With this definition, you're making TypeScript know that this
// will be a React component, thus, TS can access its
// methods and provide it to you by autocomplete
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};
