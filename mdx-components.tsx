import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-6" {...props} />,
  h2: (props: HeadingProps) => (
    <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.015em] mt-12 mb-5" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-lg sm:text-xl font-medium tracking-[-0.01em] mt-8 mb-3" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-muted-foreground leading-8 mb-5 text-[0.98rem] sm:text-[1.02rem] max-w-[72ch]" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-5 sm:pl-6 space-y-2 mb-6 text-muted-foreground text-[0.98rem] sm:text-[1.02rem] max-w-[72ch]" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-muted-foreground text-[0.98rem] sm:text-[1.02rem] max-w-[72ch]" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1 leading-8" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="italic" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "editorial-link";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code className="bg-muted px-1 py-0.5 rounded text-[0.88rem] sm:text-sm" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-muted/70 border border-border/60 p-4 sm:p-5 rounded-xl overflow-x-auto mb-7 text-[0.88rem] sm:text-sm" {...props}>
      {children}
    </pre>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-2 border-muted-foreground/30 pl-4 sm:pl-5 italic text-muted-foreground/95 mb-6 max-w-[72ch]"
      {...props}
    />
  ),
  hr: () => <hr className="border-border my-8" />,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
