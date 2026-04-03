/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

/* Shared visual props */
interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/* As a <button> */
type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
    href?: never;
  };

/* As an <a> */
type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white shadow-lg shadow-[var(--color-accent-glow,rgba(99,102,241,0.3))] hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.5))]',
  secondary:
    'bg-[var(--color-elevated)] hover:bg-[var(--color-hover)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  ghost:
    'bg-transparent hover:bg-[var(--color-elevated)] text-[var(--color-muted)] hover:text-[var(--color-text)]',
  outline:
    'bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-glow,rgba(99,102,241,0.1))]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

function buildClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  extra: string
) {
  return [
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    extra,
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * Polymorphic button — renders as `<button>` by default, or `<a>` when `as="a"` + `href` are provided.
 * Use `variant` to switch between primary, secondary, ghost, and outline styles.
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    leftIcon,
    rightIcon,
  } = props;
  const cls = buildClassName(variant, size, className);

  const content = (
    <>
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </>
  );

  if (props.as === 'a') {
    /* Strip Button-specific props before spreading onto <a> */
    const {
      as,
      variant: _v,
      size: _s,
      className: _c,
      leftIcon: _l,
      rightIcon: _r,
      ...anchorProps
    } = props;
    return (
      <a className={cls} {...anchorProps}>
        {content}
      </a>
    );
  }

  /* Default: render as <button> */
  const {
    as,
    variant: _v,
    size: _s,
    className: _c,
    leftIcon: _l,
    rightIcon: _r,
    ...buttonProps
  } = props as ButtonAsButton;
  return (
    <button className={cls} {...buttonProps}>
      {content}
    </button>
  );
}
