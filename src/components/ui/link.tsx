import { FC, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

type NextLinkPropsT = Omit<LinkProps, 'passHref' | 'as' | 'href'>;

type PropsT = NextLinkPropsT & {
    children: ReactNode;
    href: string;
    isExternalLink?: boolean;
};

const Link: FC<PropsT> = (props) => {
    const {
        children,
        href,
        isExternalLink,
        replace,
        scroll,
        shallow,
        prefetch = false,
        locale,
        ...restProps
    } = props;

    if (isExternalLink) {
        return (
            <a href={href} rel="noopener noreferrer" target="_blank" {...restProps}>
                {children}
            </a>
        );
    }

    return (
        <NextLink
            href={href}
            passHref
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            prefetch={prefetch}
            locale={locale}
        >
            <a {...restProps}>{children}</a>
        </NextLink>
    );
};

export default Link;
