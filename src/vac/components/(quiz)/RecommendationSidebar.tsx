import React from "react";
import styled from "@emotion/styled";

const Sidebar = styled.div`
  width: 20vw;
  background-color: #1f435f;
  padding: 10px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(83, 83, 83, 0.3), 0 1px 3px rgba(83, 83, 83, 0.28);
  margin-bottom: 10px;
  padding: 10px;
`;

interface RecommendationSidebarProps {
  recommendations: Array<{ id: number; title: string }>;
}

const RecommendationSidebar: React.FC<RecommendationSidebarProps> = ({
  recommendations,
}) => {
  return (
    <Sidebar>
      {recommendations.map((rec) => (
        <Card key={rec.id}>{rec.title}</Card>
      ))}
    </Sidebar>
  );
};

export default RecommendationSidebar;
