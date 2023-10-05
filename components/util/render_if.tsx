type Props = {
    condition: boolean;
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
};

const RenderIf = ({ condition, children}: Props): React.ReactElement | null => {

    if (condition) {
        return (
            <>
            {children}
            </>
        )
    }

    return null;
};

export default RenderIf;