import styled from "styled-components"
import { IServicesStatus } from "../hooks"

interface ICardStatusProps {
  serviceStatus: IServicesStatus,
  isRefetching: boolean
}


export const CardStatus = ({ serviceStatus, isRefetching }: ICardStatusProps) => {
  if (Object.entries(serviceStatus).length === 0) return null

  return (
    <Container data-testid="card-status-id">
      <HeaderCard>
        <p>
          {serviceStatus.apiName}
        </p>

        {isRefetching && <span
          data-testid="refetching-id"
        >refetching...</span>}
      </HeaderCard>

      <Status
        isError={!serviceStatus.success}
      >
        <p>
          {serviceStatus.message}
        </p>
      </Status>

      <Content>
        <p>
          {serviceStatus.hostname}
        </p>
      </Content>

      <Content>
        <p>
          Status: {serviceStatus.status}
        </p>
      </Content>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  border: 1px solid black;
 
  flex-direction: column;
`
const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-bottom: 1px solid black;
  padding: 8px;

  p {
  text-transform: uppercase;
  }
`
const Status = styled.div<{ isError: boolean }>`
  display: flex;
  justify-content: center;

  background-color:${({ isError }) => isError ? "red" : "green"} ;
  padding: 8px;

  p {
    color:white;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`