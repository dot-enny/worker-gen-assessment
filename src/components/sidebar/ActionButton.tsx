interface ActionButtonProps {
    icon: React.ElementType;
    srText?: string;
    size?: number | string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ActionButton = ({ icon: Icon, srText, size, className, onClick }: ActionButtonProps) => {
    return (
        <button type="button" className={`text-gray-400 hover:text-gray-500 ${className}`} onClick={onClick}>
            <Icon aria-hidden="true" className={`size-${size || '5'}`} />
            <span className="sr-only">{srText}</span>
        </button>
    );
};