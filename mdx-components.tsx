import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => <h1 className="text-xl sm:text-2xl font-medium mb-4" {...props} />,
  h2: (props: HeadingProps) => (
    <h2 className="text-lg sm:text-xl font-medium mt-8 mb-4" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-base sm:text-lg font-medium mt-6 mb-3" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-4 sm:pl-5 space-y-1 mb-4 text-muted-foreground text-sm sm:text-base" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-4 sm:pl-5 space-y-1 mb-4 text-muted-foreground text-sm sm:text-base" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="italic" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "underline underline-offset-4 hover:text-foreground transition-colors";
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
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="bg-muted px-1 py-0.5 rounded text-sm"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-2 border-muted-foreground/30 pl-4 italic text-muted-foreground mb-4"
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
