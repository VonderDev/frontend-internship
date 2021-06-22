import Header from './Header';

interface ContainerProps {
    children: any;
    // footer: any
    header: any;
}

const Container = ({ children, header }: ContainerProps) => {
    return (
        <div>
            {header && <Header {...header} />}
            <div>{children}</div>
        </div>
    );
};

export default Container;
