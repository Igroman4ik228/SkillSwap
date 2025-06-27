import type { FC, SVGProps } from 'react';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

export type IconProps = SvgProps & {
	Svg: FC<SVGProps<SVGSVGElement>>;
	onClick?: () => void;
};
