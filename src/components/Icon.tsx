import dynamic from 'next/dynamic';

const icons = {
  left: dynamic(() => import('@@/icons/left.svg')),
  right: dynamic(() => import('@@/icons/right.svg')),
  search: dynamic(() => import('@@/icons/search.svg')),
  'right-arrow': dynamic(() => import('@@/icons/right-arrow.svg')),
} as { [keys: string]: any };

export default function WrapIcon({ children, ...rest }: React.HTMLAttributes<HTMLOrSVGElement>) {
  const Icon = icons[children as string];

  if (Icon) {
    return <Icon {...rest} />;
  }

  return <span {...rest}>{children}</span>;
}
