import React, { FC } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./index.scss";

type CodeBlockProps = {
  code: string;
  language?: string;
};
export const CodeBlock: FC<CodeBlockProps> = ({ code, language = "tsx" }) => (
  <Highlight theme={themes.shadesOfPurple} code={code} language={language}>
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
);
