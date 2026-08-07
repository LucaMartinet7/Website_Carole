import { Fragment } from 'react'

// Renders a string where words wrapped in *asterisks* become emphasised (italic).
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, index) =>
        index % 2 === 1 ? (
          <em key={index}>{part}</em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  )
}
