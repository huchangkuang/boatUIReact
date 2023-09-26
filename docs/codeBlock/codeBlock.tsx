import React, {FC} from "react"
import { Highlight, themes } from "prism-react-renderer"
import "./index.scss"

export const CodeBlock: FC<{code: string}> = ({code}) => (
    <Highlight
      theme={themes.shadesOfPurple}
      code={code}
      language="tsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="lineNum">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )