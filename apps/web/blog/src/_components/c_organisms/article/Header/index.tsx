import React from "react";
import styled from "styled-components";

import blogConfigs from "../../../../configs/blog-config";

import Divider from "../../../a_atoms/Divider";
import TagList from "../../../a_atoms/TagList";

const { author } = blogConfigs;

const Wrapper = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const ArticleTitle = styled.h1`
  margin-bottom: 25.6px;
  line-height: 1.2;
  font-size: 44.8px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const Information = styled.div`
  margin-bottom: 32px;
  font-size: 16px;
`;

const Author = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const Date = styled.span`
  font-weight: 300;
  color: ${(props) => props.theme.colors.secondaryText};
`;

interface HeaderProps {
  title: string;
  date: string;
  update: string;
  tags: {
    fieldValue: string;
    totalCount: number;
  }[];
  minToRead: number;
}

const Header = ({
  title,
  date,
  update,
  tags,
  minToRead,
}: HeaderProps) => {
  return (
    <Wrapper>
      <ArticleTitle> {title} </ArticleTitle>
      <Information>
        <Author> @{author} </Author>
        <Date>· {date || update} </Date>
        <Date>· {minToRead} min read </Date>
      </Information>
      {tags && <TagList tagList={tags} />}
      <Divider mt="0" />
    </Wrapper>
  );
};

export default Header;
