// src/Dashboard.js
import React from "react";
import styled from "styled-components";
import { FaFileMedical, FaHeartbeat, FaUserMd } from "react-icons/fa";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header>
        <Title>Medical and Dental Billing</Title>
        <UserProfile>
          <UserIcon />
          <UserName>John Doe</UserName>
        </UserProfile>
      </Header>

      <Content>
        <MainPanel>
          <PanelTitle>Automated Billing Activities</PanelTitle>
          <MetricsContainer>
            <MetricBox>
              <span>02</span>
              Pending Activities
            </MetricBox>
            <MetricBox>
              <span>020</span>
              Completed Activities
            </MetricBox>
          </MetricsContainer>
          <ChartContainer>
            <span>Real Time Analytics</span>
            <ProgressBar>
              <Progress percent={90} />
            </ProgressBar>
            <ProgressBar>
              <Progress percent={70} />
            </ProgressBar>
          </ChartContainer>
        </MainPanel>

        <SidePanel>
          <PanelTitle>Automating by Documents</PanelTitle>
          <ActionList>
            <ActionItem>
              <FaFileMedical /> Billing Coders
            </ActionItem>
            <ActionItem>
              <FaHeartbeat /> Medical Notes
            </ActionItem>
            <ActionItem>
              <FaUserMd /> Specialist Reports
            </ActionItem>
            <ActionItem>
              <FaUserMd /> Insurance Partners
            </ActionItem>
          </ActionList>
        </SidePanel>
      </Content>

      <Footer>
        <FooterItem>
          <FooterTitle>Automated Authorization</FooterTitle>
          <FooterDescription>Insurance Pre-Authorization</FooterDescription>
        </FooterItem>
        <FooterItem>
          <FooterTitle>Insurance Pre-Authorization</FooterTitle>
          <FooterDescription>
            Connect to insurance companies for authorization automatically.
          </FooterDescription>
        </FooterItem>
      </Footer>
    </DashboardWrapper>
  );
};

export default Dashboard;

// Styled Components with Improved Styling
const DashboardWrapper = styled.div`
  background-color: #fffaf0;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Helvetica Neue', sans-serif;
  color: #4d4d4d;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(135deg, #ffa726, #ff9800);
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0;
`;

const MainPanel = styled.div`
  flex: 3;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const PanelTitle = styled.h2`
  margin-bottom: 20px;
  color: #ff7043;
  font-size: 20px;
`;

const MetricsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

const MetricBox = styled.div`
  background-color: #ffecb3;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: #333;
  flex: 1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }

  span {
    display: block;
    font-size: 28px;
    font-weight: bold;
    color: #d84315;
  }
`;

const ChartContainer = styled.div`
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  background-color: #ffe0b2;
  border-radius: 25px;
  margin: 15px 0;
  height: 25px;
  width: 100%;
  overflow: hidden;
`;

const Progress = styled.div`
  background: linear-gradient(135deg, #ff7043, #ff5722);
  height: 100%;
  width: ${(props) => props.percent}%;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(255, 87, 34, 0.5);
  transition: width 0.4s ease;
`;

const SidePanel = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ActionItem = styled.div`
  padding: 15px;
  background-color: #fff3e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 12px;
    color: #ff7043;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

const FooterItem = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const FooterTitle = styled.span`
  color: #ff7043;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`;

const FooterDescription = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;
