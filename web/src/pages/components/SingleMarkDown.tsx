
import { Wrapper } from "../../components/Wrapper";
import styled from "@emotion/styled";
import { isAuthenticated } from "../../helper/auth";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

/**
 * Bass Component to display a Single Markdown with github markdown style
 */
export function SingleMarkDown(props: any) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch('/markdown/' + props.file)
    .then(response => {
      return response.text() 
    })
    .then((data) => {
      setMarkdown(data);
    });
  }, [props.file]);

  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  return (
    <MarkDownStyled>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
    </MarkDownStyled>
  );
}

const MarkDownStyled = styled(Wrapper)`
  padding: 34px;
  overflow: auto
`;
