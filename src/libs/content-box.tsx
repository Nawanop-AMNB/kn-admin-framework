import { Box, Typography, styled } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

const ContentContainer = styled(Box)`
  width: 100%;
  padding: 24px;
  padding-bottom: 0;
`;

const ContentHeader = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentPaper = styled(Box)`
  ${({ theme }) => ({
    backgroundColor: "white",
    ...theme.applyStyles("dark", { backgroundColor: theme.palette.grey[900] }),
  })}
  width: 100%;
  height: 100%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
`;

export type ContentBoxProps = {
  label?: string;
  action?: ReactNode;
};
export const ContentBox = (props: PropsWithChildren<ContentBoxProps>) => {
  return (
    <ContentContainer>
      {(props.label || props.action) && (
        <>
          <ContentHeader>
            {props.label && (
              <Typography variant="h5" fontWeight={600}>
                {props.label}
              </Typography>
            )}
            {props.action && props.action}
          </ContentHeader>
        </>
      )}
      <ContentPaper>{props.children}</ContentPaper>
    </ContentContainer>
  );
};
