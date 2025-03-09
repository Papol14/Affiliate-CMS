import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={600} // Increased from 500 to 600
      height={41} // Increased from 34 to 41
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[20.375rem] w-full h-[30px]', className)}
      src="icon.svg"
    />
  )
}
