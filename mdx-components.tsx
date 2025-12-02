import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { MdxCover } from '@/components/mdx-cover'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: MdxCover,
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
