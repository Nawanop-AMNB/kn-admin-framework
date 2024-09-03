import { Box, Typography, styled } from "@mui/material";
import { PropsWithChildren } from "react";

const ContentContainer = styled(Box)`
  width: 100%;
  padding: 24px;
  padding-bottom: 0;
`;

const ContentHeader = styled(Box)`
  width: 100%;
  height: 100%;
`;

const ContentPaper = styled(Box)`
  ${({ theme }) =>
    theme.applyStyles("dark", { backgroundColor: theme.palette.grey[900] })}
  ${({ theme }) => theme.applyStyles("light", { backgroundColor: "white" })}
  width: 100%;
  height: 100%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
`;

export type ContentBoxProps = {
  label?: string;
};
export const ContentBox = (props: PropsWithChildren<ContentBoxProps>) => {
  return (
    <ContentContainer>
      {props.label && (
        <ContentHeader>
          <Typography variant="h5" fontWeight={600}>
            {props.label}
          </Typography>
          <ContentPaper>{props.children}</ContentPaper>{" "}
        </ContentHeader>
      )}
    </ContentContainer>
  );
};
