const IconLink = ({
    url,
    Icon,
    fontSize = "inherit"
}: {
    url?: string,
    Icon: React.JSXElementConstructor<{}>,
    fontSize?: string
}) => {
    return (!!url &&
        <a style={{ fontSize }}
            className={`
                text-foregroundSectionTitle hover:text-foregroundRgb
            `}
            target="_blank"
            href={url}>
            <Icon />
        </a>)
}

export default IconLink
