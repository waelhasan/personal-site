const IconLink = ({
    url,
    Icon
}: {
    url?: string,
    Icon: React.JSXElementConstructor<{}>
}) => (
    !!url &&
    <a className={`
            text-foregroundSectionTitle hover:text-foregroundRgb
        `}
        target="_blank"
        href={url}>
        <Icon />
    </a>
)

export default IconLink
